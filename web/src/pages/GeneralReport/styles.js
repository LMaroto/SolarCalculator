import styled from 'styled-components';

import { darken } from 'polished';
export const Container = styled.div``;

export const Content = styled.main`
  width: 1100px;
  height: calc(100vh - 50px);
  margin: 0 auto;
  padding: 25px 0;

  color: #fff;

  h1 {
    font-weight: bold;
    font-size: 28px;
    position: relative;
  }

  h2 {
    display: none;
  }

  @media print {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000;

    h1 {
      display: none;
    }
    h2 {
      display: flex;
      margin: 20px 0;
    }
    span {
      display: none;
    }

    label {
      display: none;
    }
  }
`;

export const Form = styled.form`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  @media print {
    display: none;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  select,
  input {
    width: 150px;
    height: 30px;
    padding: 4px 8px;
    margin-right: 8px;

    font-size: 12px;
  }
`;

export const GenerateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 30px;
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

export const Loader = styled.div`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;

export const ReportsArea = styled.section`
  display: none;

  @media print {
    -webkit-print-color-adjust: exact;

    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
`;

export const WarnTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  font-size: 16px;

  background: #fae3aa;
`;
export const DangerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;

  background: #db7070;
`;
