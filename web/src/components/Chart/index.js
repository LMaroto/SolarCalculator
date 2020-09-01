import React from "react";

import {Chart} from 'react-google-charts'

import { Container, Loader } from "./styles";

import BeatLoader from 'react-spinners/BeatLoader'

import PropTypes from "prop-types";

function ChartComponent({ reports }) {

  const reportsData = reports.map((report) => (
    [`${report.month}/${report.year}`, report.goal, report.produced]
  ))

  return (
    <Container>
    <Chart
      width={'100%'}
      height={'300px'}
      chartType="ColumnChart"
      loader={<Loader><BeatLoader color='#F2A378' /></Loader>}
      data={[
        ['Mês/Ano', 'Produção esperada', 'Produção real'],
        ...reportsData
      ]}
      options={{
        colors:['#F2A378', '#138DD2'],
        legend: {position: 'bottom'},
      }}
    />
    </Container>
  );
}

Chart.propTypes = {
  reports: PropTypes.array,
};

export default ChartComponent;
