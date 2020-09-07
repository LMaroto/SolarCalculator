import React, { useState, useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';

import Swal from 'sweetalert2';
import Header from '../../../components/Header';
import Input, { CheckBox } from '../../../components/Input';
import { Container } from './styles';

const Create = () => {
  const formRef = useRef(null);
  const [hasCredentials, setHasCredentials] = useState(true);

  const history = useHistory();

  const onChangeCredentialsInput = useCallback(
    event => setHasCredentials(!event.target.checked),
    []
  );

  const customerSchema = Yup.object().shape({
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

        const newData = {
          name: data.name,
          address: data.address,
          kWp,
          access: data.access,
          ...(data.expected ? { expected: parseFloat(data.expected) } : {}),
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
