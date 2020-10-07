import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  width: 100%;
`;

export const ReportTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  @media print {
    font-size: 20px;
  }
  .title {
    display: ${props => (props.title ? 'flex' : 'none')};
  }
  th {
    background: #f2a378;
  }
  td,
  th {
    border: none;
    text-align: center;
    padding: 8px;
  }
`;

export const Report = styled.tr`
  background: ${props =>
    props.warn ? '#fae3aa' : props.danger ? '#db7070' : '#fff'};

  @media print {
    font-size: 20px;
  }
`;
