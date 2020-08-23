import React from "react";

import { Container, ReportTable, Report } from "./styles";
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
            <Report key={`${report.month}${report.year}`}
            warn={report.difference < (-15) && report.difference > (-25)}
            danger={report.difference < (-25)}>
              <td>{`${report.month}/${report.year}`}</td>
              <td>{report.goal} kWh</td>
              <td>{report.produced} kWh</td>
              <td>{report.percentual}%</td>
              <td>{report.difference}%</td>
            </Report>
            ))}
        </tbody>
      </ReportTable>
    </Container>
          )}
Table.propTypes = {
  reports: PropTypes.array,
};

export default Table;
