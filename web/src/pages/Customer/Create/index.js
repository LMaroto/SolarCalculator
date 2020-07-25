import React, { useState, useCallback } from 'react';

import Header from '../../../components/Header';
import Input, { CheckBox } from '../../../components/Input';
import { Container } from './styles';

const Create = () => {
  const [hasCredentials, setHasCredentials] = useState(true);

  const onChangeCredentialsInput = useCallback((event) => setHasCredentials(!event.target.checked), []);

  return (
    <>
      <Header />
      <Container>
        <section>
          <span>Novo cliente</span>
          <button type="submit">Salvar</button>
        </section>

        <main>
          <Input name="name" label="Nome completo" type="text" placeholder="Ex. João da Silva" required />
          <Input name="kwp" label="Potência da usina (kWp)" type="number" placeholder="Ex. 288.2" required />
          <CheckBox name="credentials" label="Tem acesso as credenciais?" name="teste" onClick={onChangeCredentialsInput}></CheckBox>
          <Input name="expected" disabled={hasCredentials} label="Produção estimada (kWh)" type="number" placeholder="Ex. 198.5" />
        </main>
      </Container>
    </>
  );
};

export default Create;
