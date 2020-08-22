import React from "react";

import { Container, ReportTable } from "./styles";
import PropTypes from "prop-types";

function Table({ reports }) {
  return (
    <Container>
      <ReportTable>
        <thead>
          <tr>
            <th>Mês/Ano</th>
            <th>Esperado (CRESESB)</th>
            <th>Produção</th>
            <th>Percentual</th>
            <th>Diferença</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={`${report.month}${report.year}`}>
              <td>{`${report.month}/${report.year}`}</td>
              <td>{report.goal} kWh</td>
              <td>{report.produced} kWh</td>
              <td>{report.percentual}%</td>
              <td>{report.difference}%</td>
            </tr>
          ))}
        </tbody>
      </ReportTable>
    </Container>
  );
}

Table.propTypes = {
  reports: PropTypes.array,
};

export default Table;
