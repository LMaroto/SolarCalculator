import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FiFileText } from 'react-icons/fi';
import {
  Container,
  IntervalContainer,
  Form,
  GenerateButton,
  ReportContainer,
  Title,
  Info,
  Paragraph,
  Reporter,
} from './styles';

import Header from '../../../components/Header';
import ChartComponent from '../../../components/Chart';
import api from '../../../services/api';

const Report = () => {
  const [customer, setCustomer] = useState([]);
  const [reports, setReports] = useState([]);
  const [sunHours, setSunhours] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useParams();

  const formSubmit = useCallback(
    async evt => {
      setLoading(true);
      evt.preventDefault();

      const month = evt.target.month.value;
      const year = evt.target.year.value;

      const customerResponse = await api.get(`customers/${user.id}`);
      const reportResponse = await api.get(
        `customers/${user.id}/reports?month=${month}&year=${year}`
      );

      const hoursResponse = await api.get(`sunhours/${year}`);

      setCustomer(customerResponse.data);
      setReports(reportResponse.data);
      setSunhours(hoursResponse.data);
      setLoading(false);
      // window.print();
    },
    [user.id]
  );

  return (
    <>
      <Header showBackButton large title="Relatório de produção" />
      <Container>
        <IntervalContainer>
          <h1>Relatório de produção individual</h1>
          <span>Selecione o período desejado para o relatório</span>

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
        </IntervalContainer>
        {loading && <p>Carregando...</p>}
        {reports && (
          <>
            <ReportContainer>
              <Title>
                Relatório analítico de produção de energia fotovoltaica
              </Title>
              <Info>
                <thead>
                  <tr>
                    <th>Informações sobre a instalação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Nome: {customer.name}</td>
                  </tr>
                  <tr>
                    <td>Endereço da instalação: {customer.address}</td>
                  </tr>
                  <tr>
                    <td>Potência instalada: {customer.kWp} kWp</td>
                  </tr>
                </tbody>
              </Info>

              <Paragraph>
                Atendendo à solicitação de V.S. ª estamos encaminhando um
                relatório de fácil compreensão para esclarecer qualquer tipo de
                dúvidas sobre a Produção de Energia Fotovoltaica.
              </Paragraph>
              <Paragraph>
                A leitura de Produção da ENERGISA é diferente da leitura enviada
                pelo INVERSOR, pois durante o dia a energia produzida pelos
                PAINÉIS FOTOVOLTAICOS e enviada para o INVERSOR pode ser
                parcialmente - ou totalmente - consumida pela própria unidade
                consumidora no exato momento em que foi gerado. Ou seja, o valor
                exibido no medidor da ENERGISA é o excedente não consumido na
                unidade.
              </Paragraph>

              <Title>Produção esperada e produção real de cada mês</Title>

              <Paragraph>
                A produção de energia varia de mês para mês, pois a incidência
                de luz solar não é a mesma o ano todo, sendo assim, o número de
                horas de sol consideradas para o cálculo de produção mensal é
                variável, como consequência se tem meses de maior produção e
                meses de menor produção, popularmente chamado de meses de alta e
                meses de baixa. Segue abaixo a tabela com o número de horas de
                sol consideradas por dia de produção de cada mês: (Informações
                de irradiação solar retiradas do site WWW.CRESESB.CEPEL.BR)
              </Paragraph>

              <Info>
                <thead>
                  <tr>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>País</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Km</th>
                  </tr>
                </thead>
                <tbody>
                  <tr align="center">
                    <td>Cuiabá</td>
                    <td>MT</td>
                    <td>Brasil</td>
                    <td>15,501º S</td>
                    <td>56,049º O</td>
                    <td>10,4</td>
                  </tr>
                </tbody>
              </Info>
              <Info>
                <thead>
                  <tr align="center">
                    <th>Mês</th>
                    <td>Janeiro</td>
                    <td>Fevereiro</td>
                    <td>Março</td>
                    <td>Abril</td>
                    <td>Maio</td>
                    <td>Junho</td>
                    <td>Julho</td>
                    <td>Agosto</td>
                    <td>Setembro</td>
                    <td>Outubro</td>
                    <td>Novembro</td>
                    <td>Dezembro</td>
                  </tr>
                </thead>
                <tbody>
                  <tr align="center">
                    <th>Horas</th>
                    <td>{sunHours.jan}</td>
                    <td>{sunHours.fev}</td>
                    <td>{sunHours.mar}</td>
                    <td>{sunHours.abr}</td>
                    <td>{sunHours.mai}</td>
                    <td>{sunHours.jun}</td>
                    <td>{sunHours.jul}</td>
                    <td>{sunHours.ago}</td>
                    <td>{sunHours.set}</td>
                    <td>{sunHours.out}</td>
                    <td>{sunHours.nov}</td>
                    <td>{sunHours.dez}</td>
                  </tr>
                </tbody>
              </Info>

              <Paragraph>
                O TOTAL Produzido no mês é somente a soma de todos os dias
                Produzidos. Para Saber o total que deve ser produzido em um mês
                basta multiplicar os dados: (𝑃.𝐼𝑛𝑠𝑡𝑎𝑙𝑎𝑑𝑎 × %𝑑𝑒 𝑒𝑓𝑖𝑐𝑖𝑒𝑛𝑐𝑖𝑎 𝑑𝑜
                𝑚ó𝑑𝑢𝑙𝑜 × ℎ𝑜𝑟𝑎𝑠 × 𝑑𝑖𝑎𝑠 𝑑𝑜 𝑚ê𝑠 ).
                <br />
                <br />
                EXEMPLO MÊS DE MARÇO: ({customer.kWp} × 0,80 × {sunHours.mar} ×
                31 = {(customer.kWp * 0, 8 * sunHours.mar * 31)} 𝑘𝑊ℎ)
              </Paragraph>

              <Title>Análise de produção</Title>

              <Paragraph>
                Os dados a seguir foram analisados de <strong>28/04/20</strong>{' '}
                a <strong>31/07/20</strong>. As informações de produção de
                energia foram enviadas pelo módulo de monitoramento, conectado
                ao inversor <strong />
                que está instalado no local da obra e retiradas do site de
                monitoramento <strong>MONITORAMENTO.SICESSOLAR.COM.BR</strong>.
              </Paragraph>

              <ChartComponent reports={reports} />
            </ReportContainer>
            {reports.map(report => {
              const { month } = report;

              return (
                <Reporter>
                  Mês: <strong>{month}</strong>
                  <br />
                  Potência instalada: {customer.kWp} kWp.
                  <br />
                  Horas de sol: {sunHours[month]} horas.
                  <br />A produção ESPERADA para o mês de {month} era de:{' '}
                  {report.goal} kWh.
                  <br />A produção REAL do mês de {month} foi de:{' '}
                  {report.produced} kWh (<strong>{report.percentual}%</strong>{' '}
                  do esperado).
                </Reporter>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
};

export default Report;
