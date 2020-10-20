import React, { useCallback, useEffect, useState } from 'react';
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
  InputBlock,
  Conclusion,
  ChartArea,
  Reinforcement,
} from './styles';

import Header from '../../../components/Header';
import ChartComponent from '../../../components/Chart';
import api from '../../../services/api';

const Report = () => {
  const [customer, setCustomer] = useState([]);
  const [reports, setReports] = useState([]);
  const [sunHours, setSunhours] = useState([]);
  const [conclusions, setConclusions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [graphReady, setGraphReady] = useState(false);


  const user = useParams();

  const monthToNumber = {
    jan: '1',
    fev: '2',
    mar: '3',
    abr: '4',
    mai: '5',
    jun: '6',
    jul: '7',
    ago: '8',
    set: '9',
    out: '10',
    nov: '11',
    dez: '12',
  };

  const completeMonths = {
    jan: 'Janeiro',
    fev: 'Fevereiro',
    mar: 'Março',
    abr: 'Abril',
    mai: 'Maio',
    jun: 'Junho',
    jul: 'Julho',
    ago: 'Agosto',
    set: 'Setembro',
    out: 'Outubro',
    nov: 'Novembro',
    dez: 'Dezembro',
  };

  const formSubmit = useCallback(
    async evt => {
      setGraphReady(false);
      setLoading(true);

      evt.preventDefault();

      const month_start = evt.target.month_start.value;
      const year_start = evt.target.year_start.value;

      const month_end = evt.target.month_end.value;
      const year_end = evt.target.year_end.value;

      const conclusionInput = evt.target.conclude.value;

      const customerResponse = await api.get(`customers/${user.id}`);
      const reportResponse = await api.get(
        `customers/${user.id}/reports?month_start=${month_start}&year_start=${year_start}&month_end=${month_end}&year_end=${year_end}`
      );

      const hoursResponse = await api.get(`sunhours/${year_start}`);

      setCustomer(customerResponse.data);
      setReports(reportResponse.data);
      setConclusions(conclusionInput);

      setSunhours(hoursResponse.data);
      setLoading(false);
    },
    [user.id]
  );

  useEffect(() => {
    if (!loading && graphReady) {
      window.print();
    }
  }, [loading, graphReady]);

  return (
    <>
      <Header showBackButton large title="Relatório de produção" />
      <Container>
        <IntervalContainer>
          <h1>Relatório de produção individual</h1>


          <Form onSubmit={formSubmit}>
          <span>Selecione o período desejado para o relatório:</span>
            <InputBlock>

            <span>Início do período</span>
            <select name="month_start">
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
              name="year_start"
              required
              type="number"
              min="2019"
              defaultValue={new Date().getFullYear()}
              placeholder="Ex.: 2020"
            />

            <span>Fim do período</span>
            <select name="month_end">
              <option value="jan">Janeiro</option>
              <option value="fev">Fevereiro</option>
              <option value="mar">Março</option>
              <option value="abr">Abril</option>
              <option selected value="mai">
                Maio
              </option>
              <option value="jun">Junho</option>
              <option value="jul">Julho</option>
              <option value="ago">Agosto</option>
              <option value="set">Setembro</option>
              <option value="out">Outubro</option>
              <option value="nov">Novembro</option>
              <option value="dez">Dezembro</option>
            </select>

            <input
              name="year_end"
              required
              type="number"
              min="2019"
              defaultValue={new Date().getFullYear()}
              placeholder="Ex.: 2020"
            />
            </InputBlock>
            <InputBlock className="subgrid">
            <textarea name="conclude"
            type="text"
            placeholder="Após analisar tensões e correntes, insira aqui as conclusões a respeito do sistema analisado." />
             <GenerateButton type="submit" value="Consultar">
              <FiFileText color="#fff" size={20} />
              Gerar relatório
            </GenerateButton>
            </InputBlock>



          </Form>
        </IntervalContainer>
        {loading && <p>Carregando...</p>}
        {!!reports.length && (
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
                    <td>
                      Cidade: {customer.city} - {customer.uf}
                    </td>
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
                de luz solar não é a mesma o ano todo. Sendo assim, o número de
                horas de sol consideradas para o cálculo de produção mensal é
                variável. Como consequência, tem-se meses de maior produção e
                meses de menor produção, popularmente conhecidos como meses de
                alta e meses de baixa. Segue abaixo a tabela com o número de
                horas de sol consideradas por dia de produção de cada mês:
                (Informações de irradiação solar retiradas do site
                WWW.CRESESB.CEPEL.BR)
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
                O TOTAL produzido no mês consiste na soma das produções de cada
                dia.
              </Paragraph>

              <Title>Análise de produção</Title>

              <Paragraph>
                Os dados a seguir foram analisados de{' '}
                <strong>
                  {reports[0].start}/{monthToNumber[reports[0].month]}/
                  {reports[0].year}
                </strong>{' '}
                a{' '}
                <strong>
                  {reports[`${reports.length - 1}`].end}/
                  {monthToNumber[reports[`${reports.length - 1}`].month]}/
                  {reports[`${reports.length - 1}`].year}
                </strong>
                . As informações de produção de energia foram enviadas{' '}
                {customer.devices.length === 1 ? (
                  <>
                    pelo módulo de monitoramento conectado ao inversor
                    <strong> {customer.devices[0].name} </strong>
                    que está instalado no local da obra.
                  </>
                ) : (
                    <>
                      pelos módulos de monitoramento conectados aos inversores
                    <strong>
                        {customer.devices.map(device => ` ${device.name}, `)}
                      </strong>
                    que estão instalados no local da obra.
                  </>
                  )}
              </Paragraph>
              <ChartArea>
                <ChartComponent
                  height="auto"
                  reports={reports}
                  onReady={() => setGraphReady(true)}
                />
              </ChartArea>
            </ReportContainer>
            {reports.map(report => {
              const { month, year } = report;

              return (
                <Reporter key={`${month}-${year}`}>
                  <Paragraph>
                    <br />
                    <center>
                    <strong>{completeMonths[month]}</strong>
                    </center>
                    <br />
                    Potência instalada: {customer.kWp} kWp.
                    <br />
                    Horas de sol: {sunHours[month]} horas.
                    <br />
                    Dias de produção: {report.end - report.start + 1} dias.
                    <br />A produção ESPERADA para o mês de {completeMonths[month]} era de:{' '}
                    {report.goal} kWh.
                    <br />A produção REAL do mês de {completeMonths[month]} foi de:{' '}
                    {report.produced} kWh (<strong>{report.difference}%</strong>{' '}
                    do esperado).
                    {report.obs !== '' ? (
                      <>
                        <br />
                        <br />
                        <strong>Observações:</strong> {report.obs}
                      </>
                    ) : (
                        ''
                      )}
                  </Paragraph>
                </Reporter>
              );
            })}
            {conclusions ? (<Conclusion>
              <strong>Conclusão</strong>
              {conclusions}
            </Conclusion>) : ''}
            <Reinforcement>
              <Paragraph>
                <strong>REFORÇO:</strong> O estudo feito para produção de
                energia fotovoltaica é feito com média anual de 5,10 horas. Os
                meses de baixa e alta produção já são esperados e colocados nos
                orçamentos destinados a clientes. Essas informações são
                encontradas na página 6 dos orçamentos.
              </Paragraph>
              <Paragraph>
                <strong>ATENÇÃO:</strong> Os meses de baixa produção são os
                meses de seca do Estado de Mato Grosso - MT. Como consequência
                desse período, há um acúmulo de poeira nos painéis
                fotovoltaicos, diminuindo a eficiência da produção. Portanto,
                entre os meses de ABRIL e JULHO, uma limpeza deve ser feita nos
                painéis para diminuir a queda de produção.
              </Paragraph>
            </Reinforcement>
          </>
        )}
      </Container>
    </>
  );
};

export default Report;
