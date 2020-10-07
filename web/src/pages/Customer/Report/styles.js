import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  height: 100vh;
  margin: 0 auto;
  padding: 30px 60px;
  color: #fff;
  background: #ff7825;
  @media print {
    color: #000;
  }
`;

export const IntervalContainer = styled.div`
  color: white;
  h1 {
    margin: 0;
    font-weight: 300;
    position: relative;
  }
  span {
    align-self: left;
    padding: 0 5px;
  }
`;

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: row;

  label {
    display: block;
    margin-bottom: 10px;
  }

  select,
  input {
    width: 150px;
    padding: 4px 8px;
    margin-right: 8px;
  }

  @media print {
    display: none;
  }
`;

export const GenerateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  padding: 0 15px;

  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;

  background: #138dd2;

  &:hover {
    background: ${darken(0.05, '#138dd2')};
  }

  svg {
    margin-right: 4px;
  }
`;

export const ReportContainer = styled.div`
  display: none;

  @media print {
    -webkit-print-color-adjust: exact;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    background: #fff;
  }
`;

export const Title = styled.h4`
  margin: 10px 0;
`;
export const Info = styled.table`
  margin: 10px 0;
  width: 100%;
  border-collapse: collapse;

  th {
    border: 1px solid #000;
    background: #fbc000;
  }

  td {
    border: 1px solid #000;
    padding: 0 4px;
    font-size: 12px;
    font-weight: bold;
  }
`;
export const Paragraph = styled.p`
  text-align: justify;
  margin: 5px 0 10px 0;
`;
export const Reporter = styled.p`
  display: none;
  @media print {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }
`;
