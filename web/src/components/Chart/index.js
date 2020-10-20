import React from 'react';

import { Chart } from 'react-google-charts';

import BeatLoader from 'react-spinners/BeatLoader';

import PropTypes from 'prop-types';
import { Container, Loader } from './styles';

function ChartComponent({ reports, onReady, ...props }) {


  const reportsData = reports.map(report => [
    `${report.month}/${report.year}`,
    report.goal,
    report.produced,
  ]);

  return (
    <Container>
      <Chart
        width="100%"
        height="300px"
        {...props}
        chartType="ColumnChart"
        loader={
          <Loader>
            <BeatLoader color="#F2A378" />
          </Loader>
        }
        data={[
          ['Mês/Ano', 'Produção esperada', 'Produção real'],
          ...reportsData,
        ]}
        options={{
          colors: ['#F2A378', '#138DD2'],
          legend: { position: 'bottom' },
        }}

        chartEvents={[{ eventName: 'ready', callback: onReady }]}
      />
    </Container>
  );
}

ChartComponent.propTypes = {
  reports: PropTypes.arrayOf(PropTypes.any).isRequired,
  onReady: PropTypes.func,
};

ChartComponent.defaultProps = {
  onReady: () => {},
};

export default ChartComponent;
