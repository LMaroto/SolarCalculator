import React, { useCallback, useState } from "react";

import api from "../../services/api";
import Header from "../../components/Header";
import Table from "../../components/Table";

import { Container, Content, Form, Loader, ReportsArea, GenerateButton } from "./styles";

import { FiFileText } from "react-icons/fi";

import GridLoader from "react-spinners/GridLoader";

const GeneralReport = () => {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(false);


  const formSubmit = useCallback(async (event) => {
    setLoading(true);
    event.preventDefault();

    const month = event.target.month.value;
    const year = event.target.year.value;

    const response = await api.get(`/reports?month=${month}&year=${year}`);

    const reports = response.data;
    const warnZones = reports.filter(customer => {
      if (customer.report) {
        const difference = customer.report.difference * -1;
        console.log(difference);
        return difference > 15 && difference < 25;
      }
    });
    const dangerZones = reports.filter(customer => {
      if (customer.report) {
        const difference = customer.report.difference * -1;
        return difference > 25;
      }
    });

    setReports({danger: dangerZones, warn: warnZones});
    setLoading(false);

    window.print();
  }, []);

  return (
    <Container>
      <Header showBackButton large />

      <Content>
        <h1>Relatório de produção geral</h1>
        <label>Selecione o período desejado para o relatório:</label>

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
        {loading ?
          (<Loader><GridLoader color="#ee8143" /></Loader>) :
          (
            (reports &&
            <ReportsArea>
              <Table reports={reports.warn} />
              <Table reports={reports.danger} />
              {/* Produção entre 15% a 25% abaixo do esperado - jun/20 */}
              {/* Produção em 25% ou mais abaixo do esperado - jun/20 */}
              {/* Clientes antigos que possivelmente precisam de limpeza */}
              {/* | id - nome | esperado | produção | percentual | diferença | */}
            </ReportsArea>)
          )
        }
      </Content>
    </Container>
  );
};

export default GeneralReport;
