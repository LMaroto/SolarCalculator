import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Container, ReportTable } from './styles';

import api from '../../services/api';

function Table() {
  const [reports, setReports] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    await api
      .get(`customers/${id}/reports`)
      .then((response) => {
        setReports(response.data);
      });
  }, []);

  return (
    <Container>
      <ReportTable>
        <tr>
          <th>Mês/Ano</th>
          <th>Esperado (CRESESB)</th>
          <th>Produção</th>
          <th>Percentual</th>
          <th>Diferença</th>
        </tr>
        {reports.map((report) => (
          <tr>
            <td>
              {report.month}
              /
              {report.year}
            </td>
            <td>{report.goal}</td>
            <td>{report.produced}</td>
            <td>{report.percentual}</td>
            <td>{report.difference}</td>
          </tr>
        ))}

      </ReportTable>
    </Container>
  );
}

export default Table;
