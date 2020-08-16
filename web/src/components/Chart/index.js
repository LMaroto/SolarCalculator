import React from 'react';
import {
  FlexibleWidthXYPlot, XAxis, YAxis, VerticalBarSeriesCanvas, VerticalGridLines, HorizontalGridLines, DiscreteColorLegend, VerticalRectSeries,
} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

import { Container } from './styles'

function Chart() {
  const data = [
    { x: 'danifer', y: 8 },
  ];

  return (
    <Container>
    <FlexibleWidthXYPlot height={300} stackBy="y">
      <DiscreteColorLegend
      orientation="horizontal"
      items={[
        {
          title: 'Produção esperada',
          color: '#F2A378'
        },
        {
          title: 'Produção real',
          color: '#138DD2'
        }
      ]} />

      <VerticalGridLines />
      <HorizontalGridLines />
      <YAxis />
      <XAxis />

      <VerticalRectSeries data={data} />
      <VerticalRectSeries color="#7159c1" data={[{ x: 'teste', y: 5 }]} />
    </FlexibleWidthXYPlot>
    </Container>
  );
}

export default Chart;
