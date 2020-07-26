import React, { useState, useCallback, useRef } from 'react';

import Header from '../../../components/Header';
import Input, { CheckBox } from '../../../components/Input';
import { Container } from './styles';

import { Form } from "@unform/web";

const Create = () => {
  const [hasCredentials, setHasCredentials] = useState(true);
  const onChangeCredentialsInput = useCallback((event) => setHasCredentials(!event.target.checked), []);

  const formRef = useRef(null);

  const formSubmit = useCallback((data) => { }, []);
  return (
    <>
      <Header showBackButton />
      <Container>
        <section>
          <span>Novo cliente</span>
          <button type="submit">Salvar</button>
        </section>

        <main>
          <Form ref={formRef} onSubmit={formSubmit}>
            <Input name="name" label="Nome completo" type="text" placeholder="Ex. João da Silva" required />
            <Input name="kwp" label="Potência da usina (kWp)" type="number" placeholder="Ex. 288.2" required />
            <CheckBox name="credentials" label="Tem acesso as credenciais?" name="teste" onClick={onChangeCredentialsInput}></CheckBox>
            <Input name="expected" disabled={hasCredentials} label="Produção estimada (kWh)" type="number" placeholder="Ex. 198.5" />

          </Form>
        </main>
      </Container>
    </>
  );
};

export default Create;
