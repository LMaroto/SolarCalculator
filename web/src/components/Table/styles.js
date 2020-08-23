import styled from "styled-components";

export const Container = styled.div`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

export const ReportTable = styled.table`
  border-collapse: collapse;
  width: 100%;

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
  background: ${(props) => (props.warn ? '#fae3aa' : props.danger  ? '#db7070' : '#fff' )}
`;
