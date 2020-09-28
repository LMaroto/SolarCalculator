import React, { useCallback, useState } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';
import Table from '../../components/Table';

import {
  Container,
  Content,
  Form,
  Loader,
  ReportsArea,
  GenerateButton,
  WarnTitle,
  DangerTitle,
} from './styles';

import { FiFileText } from 'react-icons/fi';

import BeatLoader from 'react-spinners/BeatLoader';

const TABLE_COLUMNS = [
  'Nome do cliente',
  'Esperado (CRESESB)',
  'Produção',
  'Percentual',
  'Diferença',
];
const TABLE_ROW_TEMPLATE = customer => [
  `${customer.registration_number} - ${customer.name}`,
  `${customer.report.goal} kWh`,
  `${customer.report.record} kWh`,
  `${customer.report.percentual} %`,
  `${customer.report.difference} %`,
];

const GeneralReport = () => {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(false);

  const formSubmit = useCallback(async event => {
    setLoading(true);
    event.preventDefault();

    const month = event.target.month.value;
    const year = event.target.year.value;

    const response = await api.get(`/reports?month=${month}&year=${year}`);

    const reports = response.data;
    const warnZones = reports.filter(customer => {
      if (customer.report) {
        const difference = customer.report.difference * -1;
        return difference > 15 && difference < 25;
      }

      return false;
    });

    const dangerZones = reports.filter(customer => {
      if (customer.report) {
        const difference = customer.report.difference * -1;
        return difference > 25;
      }

      return false;
    });

    setReports({ danger: dangerZones, warn: warnZones });
    setLoading(false);
    window.print();
  }, []);

  return (
    <Container>
      <Header showBackButton title={'Relatório de produção'} />

      <Content>
        <h1>Relatório de produção geral</h1>
        <h2>Clientes com produção abaixo do esperado</h2>
        <span>Selecione o período desejado para o relatório:</span>

        <Form onSubmit={formSubmit}>
          <select name="month">
            <option value="jan">Janeiro</option>
            <option value="fev">Fevereiro</option>
            <option value="mar">Março</option>
            <option value="abr">Abril</option>
            <option value="mai">Maio</option>
            <option value="jun">Junho</option>
            <option value="jul">Julho</option>
            <option value="ago">Agosto</option>
            <option value="set">Setembro</option>
            <option value="out">Outubro</option>
            <option value="nov">Novembro</option>
            <option value="dez">Dezembro</option>
          </select>

          <input
            name="year"
            required
            type="number"
            min="2019"
            defaultValue={new Date().getFullYear()}
            placeholder="Ex.: 2020"
          />

          <GenerateButton type="submit" value="Consultar">
            <FiFileText color="#fff" size={20} />
            Gerar relatório
          </GenerateButton>
        </Form>
        {loading ? (
          <Loader>
            <BeatLoader color="#ff7518" />
          </Loader>
        ) : (
          reports && (
            <ReportsArea>
              {reports.warn.length > 0 ? (
                <>
                  <WarnTitle>
                    <h3>Produção pouco abaixo do esperado</h3>
                  </WarnTitle>
                  <Table
                    columns={TABLE_COLUMNS}
                    rows={TABLE_ROW_TEMPLATE}
                    data={reports.warn}
                  />
                </>
              ) : (
                ''
              )}
              {reports.danger.length > 0 ? (
                <>
                  <DangerTitle>
                    <h3>Produção muito abaixo do esperado</h3>
                  </DangerTitle>
                  <Table
                    columns={TABLE_COLUMNS}
                    rows={TABLE_ROW_TEMPLATE}
                    data={reports.danger}
                  />
                </>
              ) : (
                ''
              )}
              {/* <Table reports={reports.danger} /> */}
              {/* Produção entre 15% a 25% abaixo do esperado - jun/20 */}
              {/* Produção em 25% ou mais abaixo do esperado - jun/20 */}
              {/* | id - nome | esperado | produção | percentual | diferença | */}
            </ReportsArea>
          )
        )}
      </Content>
    </Container>
  );
};

export default GeneralReport;
