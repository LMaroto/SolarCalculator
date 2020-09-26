import React, { useCallback, useRef } from 'react';
import Modal from '../Modal';
import Select from '../Select';
import Input from '../Input';

import PropTypes from 'prop-types';

import * as yup from 'yup';

import { Container, Form, VerticalInputs } from './styles';
import extractValidationMessage from '../../utils/extractValidatorErrors';
import TextArea from '../TextArea';

const schema = yup.object().shape({
  month: yup
    .string()
    .oneOf([
      'jan',
      'fev',
      'mar',
      'abr',
      'mai',
      'jun',
      'jul',
      'ago',
      'set',
      'out',
      'nov',
      'dez',
    ])
    .required(),
  year: yup.number().required('O ano é obrigatório'),
  power: yup.number().required('Valor produzido é obrigatório'),
  start: yup
    .number()
    .min(1, 'Precisa ser um dia do mês válido')
    .max(31, 'Precisa ser um dia do mês válido')
    .required('O dia inicial é obrigatório'),
  end: yup
    .number()
    .min(1, 'Precisa ser um dia do mês válido')
    .max(31, 'Precisa ser um dia do mês válido')
    .required('O dia inicial é obrigatório'),
  observation: yup.string().optional(),
});

const monthOptions = [
  { value: 'jan', label: 'Janeiro' },
  { value: 'fev', label: 'Fevereiro' },
  { value: 'mar', label: 'Março' },
  { value: 'abr', label: 'Abril' },
  { value: 'mai', label: 'Maio' },
  { value: 'jun', label: 'Junho' },
  { value: 'jul', label: 'Julho' },
  { value: 'ago', label: 'Agosto' },
  { value: 'set', label: 'Setembro' },
  { value: 'out', label: 'Outubro' },
  { value: 'nov', label: 'Novembro' },
  { value: 'dez', label: 'Dezembro' },
];

const ModalAddRecord = ({ isOpen, setIsOpen, handleSaveRecord }) => {
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async data => {
      try {
        await schema.validate(data);

        handleSaveRecord(data);
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = extractValidationMessage(error);
          if (formRef.current) {
            formRef.current.setErrors(errors);
          }
        }
      }
    },
    [handleSaveRecord]
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h3>Nova leitura</h3>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Select
            name="month"
            label="Mês de leitura"
            options={monthOptions}
            placeholder="Selecione o mês..."
          />

          <Input
            type="number"
            label="Ano da leitura"
            name="year"
            placeholder="Ex: 2020"
          />

          <VerticalInputs>
            <Input
              name="start"
              label="Dia inicial do intervalo"
              placeholder="Digite o dia (de 1 até 31)"
              min="1"
              max="31"
              type="number"
            />
            <Input
              name="end"
              label="Dia final do intervalo"
              placeholder="Digite o dia (de 1 até 31)"
              min="1"
              max="31"
              type="number"
            />
          </VerticalInputs>

          <Input
            type="number"
            step="any"
            name="power"
            label="Valor produzido (kWh)"
            placeholder="Digite o valor de produção"
          />

          <TextArea
            label="Observações"
            name="observation"
            placeholder="Digite aqui se houver observações na leitura. Seu comentário será utilizado no relatório."
            rows="5"
          />

          <button type="submit">Registrar</button>
        </Form>
      </Container>
    </Modal>
  );
};

ModalAddRecord.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func,
  handleSaveRecord: PropTypes.func,
};

export default ModalAddRecord;
