import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, DiscreteColorLegend, VerticalBarSeries,
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

import { Container } from './styles';
import api from '../../services/api';

function Chart() {
  const [reports, setReports] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    await api
      .get(`customers/${id}/reports`)
      .then((response) => {
        setReports(response.data);
      });
  }, []);

  const goalData = reports.map((report) => (
    {
      x: `${report.month}/${report.year}`,
      y: report.goal,
    }
  ));

  const productionData = reports.map((report) => (
    {
      x: `${report.month}/${report.year}`,
      y: report.produced,
    }
  ));

  return (
    <Container>
      <FlexibleWidthXYPlot height={300} xType="ordinal">
        <DiscreteColorLegend
          orientation="horizontal"
          items={[
            {
              title: 'Produção esperada',
              color: '#F2A378',
            },
            {
              title: 'Produção real',
              color: '#138DD2',
            },
          ]}
        />

        <HorizontalGridLines />
        <YAxis title="Produção (kWh)" />
        <XAxis title="Meses" />

        <VerticalBarSeries barWidth={0.5} color="#F2A378" data={goalData} />
        <VerticalBarSeries barWidth={0.5} color="#138DD2" data={productionData} />

      </FlexibleWidthXYPlot>
    </Container>
  );
}

export default Chart;
