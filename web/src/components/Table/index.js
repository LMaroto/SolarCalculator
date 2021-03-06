import React from 'react';

import { Container, ReportTable, Report } from './styles';
import PropTypes from 'prop-types';

/**
 *
 * @param {String[]} columns nome de cada coluna
 * @param {String[]} rows mapeamento de cada linha da tabela
 * @param {Array} data conteúdo da tabela
 */
function Table({ columns, rows, data, dangerValidate, warnValidate }) {
  return (
    <Container>
      <ReportTable>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            const cells = rows(item);

            return (
              <Report
                key={item.id}
                warn={warnValidate(item)}
                danger={dangerValidate(item)}
              >
                {cells.map(cell => (
                  <td key={cell}>{cell}</td>
                ))}
              </Report>
            );
          })}
        </tbody>
      </ReportTable>
    </Container>
  );
}

Table.defaultProps = {
  dangerValidate: () => false,
  warnValidate: () => false,
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.func,
  data: PropTypes.array,

  dangerValidate: PropTypes.func,
  warnValidate: PropTypes.func,
};

export default Table;
