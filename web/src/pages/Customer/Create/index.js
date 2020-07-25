import React, { useRef } from 'react';

import Header from '../../../components/Header';
import Input from '../../../components/Input';
import { Container } from './styles';

const Create = () => {
  const credentialsRef = useRef(null);
  return (
    <>
      <Header />
      <Container>
        <section>
          <span>Novo cliente</span>
          <button type="submit">Salvar</button>
        </section>

        <main>
          <Input label="Nome completo" type="text" placeholder="Ex. João da Silva" required />
          <Input label="Potência da usina (kWp)" type="number" placeholder="Ex. 288.2" required />
          <Input ref={credentialsRef} label="Tem acesso às credenciais?" type="checkbox" />
          <Input disabled={credentialsRef.current && !!credentialsRef.current.value} label="Produção estimada (kWh)" type="number" placeholder="Ex. 198.5" />

        </main>
      </Container>
    </>
  );
};

export default Create;
