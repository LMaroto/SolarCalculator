import React, { useState, useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

import { v4 as uuid } from 'uuid';

import Swal from 'sweetalert2';
import Header from '../../../components/Header';
import Input, { CheckBox } from '../../../components/Input';
import {
  Container,
  DeviceInput,
  DevicesContainer,
  RemoveDeviceIcon,
} from './styles';

const Create = () => {
  const formRef = useRef(null);
  const [hasCredentials, setHasCredentials] = useState(true);

  // guarda ids uuid para controlar presença de novos inversores
  const [devices, setDevices] = useState([]);

  const history = useHistory();

  const onChangeCredentialsInput = useCallback(
    event => setHasCredentials(!event.target.checked),
    []
  );

  const addNewDevice = useCallback(() => {
    setDevices([...devices, uuid()]);
  }, [devices]);

  const removeDevice = useCallback(
    device => {
      const newDevices = devices.filter(value => value !== device);

      setDevices(newDevices);
    },
    [devices]
  );

  const customerSchema = Yup.object().shape({
    registration_number: Yup.string().required(
      'O número da obra é obrigatório'
    ),
    name: Yup.string().required('Nome é obrigatório'),
    address: Yup.string().required('O endereço é obrigatório'),
    kWp: Yup.number('Precisa ser um número').required(
      'Potência da usina é obrigatória'
    ),
    access: Yup.boolean(),
    expected: Yup.number().when('access', {
      is: true,
      then: Yup.number('Precisa ser um número').required(
        'Produção estimada é obrigatória'
      ),
      otherwise: Yup.number('Precisa ser um número'),
    }),
  });

  const formSubmit = useCallback(
    async data => {
      try {
        await customerSchema.validate(data, { abortEarly: false });

        const kWp = parseFloat(data.kWp);

        if (!data.devices) {
          await Swal.fire({
            title: 'Calma lá!',
            text: 'Você precisa cadastrar algum inversor.',
            icon: 'warning',
          });

          return;
        }

        const devices = Object.values(data.devices);
        const emptyDevice = devices.find(
          object => object.name === '' || object.install_date === ''
        );
        console.log(devices);
        if (devices.length === 0 || emptyDevice) {
          await Swal.fire({
            title: 'Calma lá!',
            text: 'Você precisa cadastrar algum inversor.',
            icon: 'warning',
          });

          return;
        }
        const newData = {
          registration_number: data['registration_number'],
          name: data.name,
          address: data.address,
          kWp,
          access: data.access,
          ...(data.expected ? { expected: parseFloat(data.expected) } : {}),
          devices,
        };

        await api.post('customers', newData);

        Swal.fire({
          title: 'Sucesso!',
          text: 'Cadastro realizado com sucesso.',
          icon: 'success',
        });

        history.goBack();
      } catch (err) {
        // problemas de validação do schema
        if (err instanceof Yup.ValidationError) {
          const errors = {}; // objeto no formato: {campo: MensagemErro}

          err.inner.forEach(validationError => {
            errors[validationError.path] = validationError.message;
          });

          if (formRef.current) {
            formRef.current.setErrors(errors);
          }

          console.log('teve erros');
        } else {
          Swal.fire({
            title: 'Opa!',
            text: 'Algo de errado aconteceu. Por favor, tente novamente.',
            icon: 'error',
          });
        }
      }
    },
    [customerSchema, history]
  );

  return (
    <>
      <Header showBackButton />
      <Container>
        <section>
          <span>Novo cliente</span>
          <button type="submit" onClick={() => formRef.current.submitForm()}>
            Salvar
          </button>
        </section>

        <main>
          <Form
            ref={formRef}
            onSubmit={formSubmit}
            defaultValue={{ kWp: 0.0, expected: 0.0 }}
          >
            <Input
              name="registration_number"
              label="Número da obra"
              type="text"
              placeholder="Ex: 14A"
              required
            />
            <Input
              name="name"
              label="Nome completo"
              type="text"
              placeholder="Ex. João da Silva"
              required
            />
            <Input
              name="address"
              label="Endereço"
              type="text"
              placeholder="Ex. Rua das Camélias, 2000, Cuiabá - MT"
              required
            />
            <Input
              name="kWp"
              label="Potência da usina (kWp)"
              type="number"
              placeholder="Ex. 288.2"
              required
            />

            <DevicesContainer>
              {devices.length > 0 && <span>Inversores</span>}
              {devices.map(device => (
                <Scope key={device} path={`devices[${device}]`}>
                  <DeviceInput>
                    <Input
                      type="text"
                      required
                      name="name"
                      label="Identificação do inversor"
                    />
                    <Input
                      type="date"
                      required
                      name="install_date"
                      label="Data de instalação"
                    />
                    <RemoveDeviceIcon
                      size={20}
                      onClick={() => removeDevice(device)}
                    />
                  </DeviceInput>
                </Scope>
              ))}
              <button type="button" onClick={addNewDevice}>
                Novo inversor
              </button>
            </DevicesContainer>

            <CheckBox
              name="access"
              label="Tem acesso às credenciais?"
              onClick={onChangeCredentialsInput}
            />
            {!hasCredentials && (
              <Input
                name="expected"
                label="Produção estimada contratual (kWh)"
                type="number"
                required
                placeholder="Ex. 198.5"
              />
            )}
          </Form>
        </main>
      </Container>
    </>
  );
};

export default Create;
