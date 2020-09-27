import React, { useCallback, useRef } from 'react';
import Modal from '../Modal';
import Select from '../Select';
import Input from '../Input';

import PropTypes from 'prop-types';

import * as yup from 'yup';

import { Container, Form, VerticalInputs } from './styles';
import extractValidationMessage from '../../utils/extractValidatorErrors';

const schema = yup.object().shape({
  city: yup.string().required('A cidade é obrigatória'),
  uf: yup.string().min(2).required('A UF é obrigatória'),
  jan: yup.number().required(),
  fev: yup.number().required(),
  mar: yup.number().required(),
  abr: yup.number().required(),
  mai: yup.number().required(),
  jun: yup.number().required(),
  jul: yup.number().required(),
  ago: yup.number().required(),
  set: yup.number().required(),
  out: yup.number().required(),
  nov: yup.number().required(),
  dez: yup.number().required(),
});

const ufOptions = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
  { label: 'Amazonas', value: 'AM' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Ceará', value: 'CE' },
  { label: 'Distrito Federal', value: 'DF' },
  { label: 'Espírito Santo', value: 'ES' },
  { label: 'Goiás', value: 'GO' },
  { label: 'Maranhão', value: 'MA' },
  { label: 'Mato Grosso', value: 'MT' },
  { label: 'Mato Grosso do Sul', value: 'MS' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Pará', value: 'PA' },
  { label: 'Paraíba', value: 'PB' },
  { label: 'Paraná', value: 'PR' },
  { label: 'Pernambuco', value: 'PE' },
  { label: 'Piauí', value: 'PI' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Rio Grande do Norte', value: 'RN' },
  { label: 'Rio Grande do Sul', value: 'RS' },
  { label: 'Rondônia', value: 'RO' },
  { label: 'Roraima', value: 'RR' },
  { label: 'Santa Catarina', value: 'SC' },
  { label: 'São Paulo', value: 'SP' },
  { label: 'Sergipe', value: 'SE' },
  { label: 'Tocantins', value: 'TO' },
];

const ModalAddSunhour = ({
  isOpen,
  setIsOpen,
  edit,
  handleSave,
  handleEdit,
}) => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async data => {
      try {
        await schema.validate(data);

        if (edit) {
          handleEdit(data);
        } else {
          handleSave(data);
        }
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = extractValidationMessage(error);
          if (formRef.current) {
            formRef.current.setErrors(errors);
          }
        }
        console.log(error);
      }
    },
    [handleSave, edit, handleEdit]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h3>Nova configuração</h3>

        <Form ref={formRef} onSubmit={handleSubmit} initialData={edit}>
          <Input
            name="city"
            label="Cidade"
            placeholder="Digite o nome da cidade"
            type="text"
          />
          <Select
            name="uf"
            label="Estado"
            options={ufOptions}
            placeholder="Selecione o estado..."
          />

          <Input
            name="year"
            label="Ano de referência"
            placeholder="Digite um ano válido"
            type="number"
          />

          <fieldset>
            <span>Horas para os meses</span>
            <VerticalInputs>
              <Input label="Janeiro" placeholder="Ex: 5.57" name="jan" />
              <Input label="Fevereiro" placeholder="Ex: 5.57" name="fev" />
              <Input label="Março" placeholder="Ex: 5.57" name="mar" />
            </VerticalInputs>
            <VerticalInputs>
              <Input label="Abril" placeholder="Ex: 5.57" name="abr" />
              <Input label="Maio" placeholder="Ex: 5.57" name="mai" />
              <Input label="Junho" placeholder="Ex: 5.57" name="jun" />
            </VerticalInputs>
            <VerticalInputs>
              <Input label="Julho" placeholder="Ex: 5.57" name="jul" />
              <Input label="Agosto" placeholder="Ex: 5.57" name="ago" />
              <Input label="Setembro" placeholder="Ex: 5.57" name="set" />
            </VerticalInputs>
            <VerticalInputs>
              <Input label="Outubro" placeholder="Ex: 5.57" name="out" />
              <Input label="Novembro" placeholder="Ex: 5.57" name="nov" />
              <Input label="Dezembro" placeholder="Ex: 5.57" name="dez" />
            </VerticalInputs>
          </fieldset>

          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </Modal>
  );
};

ModalAddSunhour.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func,
  handleSave: PropTypes.func,
};

export default ModalAddSunhour;
