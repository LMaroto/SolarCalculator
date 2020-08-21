import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import {
  FlexibleWidthXYPlot, XAxis, YAxis, HorizontalGridLines, DiscreteColorLegend, VerticalBarSeries, Hint,
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

import { Container, CustomHint } from './styles';
import api from '../../services/api';

function Chart() {
  const [reports, setReports] = useState([]);
  const [goalData, setGoals] = useState([]);
  const [productionData, setProductions] = useState([]);
  const [hint, setHint] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`customers/${id}/reports`);
      setReports(response.data);
    }

    loadData();
  }, [id]);

  useEffect(() => {
    if (reports.length > 0) {
      const goals = reports.map((report) => (
        {
          x: `${report.month}/${report.year}`,
          y: report.goal,
        }
      ));
      const productions = reports.map((report) => (
        {
          x: `${report.month}/${report.year}`,
          y: report.produced,
        }
      ));

      setGoals(goals);
      setProductions(productions);
    }
  }, [reports]);


  const showHint = useCallback((value, label) => {
    setHint({ position: value, label, value: value.y + ' kWh' });
  }, []);

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


        <VerticalBarSeries
          onValueMouseOver={(value) => showHint(value, 'Esperado')}
          onValueMouseOut={() => setHint(null)}
          barWidth={0.5} color="#F2A378"
          data={goalData} />
        <VerticalBarSeries
          barWidth={0.5}
          color="#138DD2"
          onValueMouseOver={(value) => showHint(value, 'Produzido')}
          onValueMouseOut={() => setHint(null)}
          data={productionData} />

        {hint &&
          (<Hint value={hint.position}>
            <CustomHint>{`${hint.label}: ${hint.value}`}</CustomHint>
          </Hint>)
        }

      </FlexibleWidthXYPlot>
    </Container>
  );
}

export default Chart;
