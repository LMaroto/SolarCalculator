import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Container, ReportTable } from './styles';

import api from '../../services/api';

function Table() {
  const [reports, setReports] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`customers/${id}/reports`);
      setReports(response.data);
    }

    loadData();
  }, [id]);

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
              <td>
                {`${report.month}/${report.year}`}
              </td>
              <td>{report.goal}</td>
              <td>{report.produced}</td>
              <td>{report.percentual}</td>
              <td>{report.difference}</td>
            </tr>
          ))}
        </tbody>

      </ReportTable>
    </Container>
  );
}

export default Table;
