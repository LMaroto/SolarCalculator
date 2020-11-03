import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 60px;
  color: #fff;
  background: #ff7825;

  @media print {
    background: #fff;

    font-size: 14pt;
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
    margin: 10px 0;
    align-self: left;
  }

  @media print {
    display: none;
  }
`;

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    margin-bottom: 10px;
  }

  .subgrid {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
      height: 250px;
      padding: 5px;
      border-radius: 4px;
      border: none;
    }
  }
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  select,
  input {
    width: 150px;
    padding: 4px 8px;
    margin-right: 3px;
  }
`;

export const Conclusion = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  margin-bottom: 15px;
  strong {
    margin: 10px auto;
  }
`;

export const GenerateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 15px;
  margin-top: 10px;
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

export const ReportPreview = styled.div`
  background: #fff;

  border: 1px solid #000;
  margin-top: 10px;
  padding-top: 10px;

  border-radius: 10px;

  > span {
    color: #666;
    font-size: 18px;
    margin-top: 10px;
    margin-left: 10px;
  }

  @media print {
    border: none;

    > span {
      display: none;
    }
  }
`;

export const ReportContainer = styled.div`
  -webkit-print-color-adjust: exact;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  background: #fff;

  color: black;
`;

export const PageBreaker = styled.div`
  @media print {
    display: block;
    page-break-before: always;
  }
`;

export const Title = styled.h4`
  margin: 5px 0;

  color: black;
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
    /* padding: 0 4px; */
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  margin: 5px 0 10px 0;
`;

export const Reporter = styled.div`
  width: 100%;

  padding: 10px 5px;
  border-radius: 5px;

  span {
    display: block;
  }

  & + div {
    margin-top: 10px;
  }
`;

export const Reinforcement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PrintForm = styled.form`
  span {
    display: block;
    font-size: 16px;
  }

  textarea {
    width: 100%;
  }
`;

export const PrintButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 15px;
  margin-top: 10px;
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
