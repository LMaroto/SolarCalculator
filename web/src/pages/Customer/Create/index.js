import React, { useState, useCallback, useRef } from 'react';

import { Form } from '@unform/web';
import api from '../../../services/api';

import Header from '../../../components/Header';
import Input, { CheckBox } from '../../../components/Input';
import { Container } from './styles';

const Create = () => {
  const [hasCredentials, setHasCredentials] = useState(true);
  const onChangeCredentialsInput = useCallback(
    (event) => setHasCredentials(!event.target.checked), [],
  );

  const formRef = useRef(null);

  const formSubmit = useCallback(async (data) => {
    try {
      const kwp = parseFloat(data.kwp);
      const expected = parseFloat(data.expected);

      console.log(expected);

      const newData = {
        name: data.name,
        address: data.address,
        kWp: kwp,
        access: data.access,
        expected,
      };

      await api.post('customers', newData);

      alert('Cadastro realizado com sucesso!');
    } catch (err) {
      alert('Erro ao cadastrar, tente novamente.');
    }
  }, []);
  return (
    <>
      <Header showBackButton />
      <Container>
        <section>
          <span>Novo cliente</span>
          <button type="submit" onClick={() => (formRef.current.submitForm())}>Salvar</button>
        </section>

        <main>
          <Form ref={formRef} onSubmit={formSubmit}>

            <Input name="name" label="Nome completo" type="text" placeholder="Ex. João da Silva" required />
            <Input name="address" label="Endereço" type="text" placeholder="Ex. Rua das Camélias, 2000, Cuiabá - MT" required />
            <Input name="kwp" label="Potência da usina (kWp)" type="number" placeholder="Ex. 288.2" required />
            <CheckBox name="access" label="Tem acesso às credenciais?" onClick={onChangeCredentialsInput} />
            <Input name="expected" disabled={hasCredentials} label="Produção estimada (kWh)" type="number" placeholder="Ex. 198.5" />

          </Form>
        </main>
      </Container>
    </>
  );
};

export default Create;
