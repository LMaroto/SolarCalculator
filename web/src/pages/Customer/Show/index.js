import React, { useState, useEffect, useCallback } from "react";
import { FiFileText, FiPlusCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import {
  FaHouseDamage,
  FaMapMarkerAlt,
  FaUserCheck,
  FaSun,
  FaBolt,
} from "react-icons/fa";

import Header from "../../../components/Header";
import Table from "../../../components/Table";
import Chart from "../../../components/Chart";

import {
  Container,
  Actions,
  RecordButton,
  PrintButton,
  UserAside,
  UserAnalytics,
  UserInfo,
  UserStats,
  ModalContainer,
  ModalContent,
  ModalForm,
} from "./styles";
import api from "../../../services/api";

const Show = () => {
  const [user, setUser] = useState([]);
  const [reports, setReports] = useState([]);

  const [modalOpened, setModalOpened] = useState(false);

  const { id } = useParams();

  const loadReports = useCallback(async () => {
    const reportsResponse = await api.get(`customers/${id}/reports`);
    setReports(reportsResponse.data);
  }, [id]);

  const submitFormRecord = useCallback(
    async (event) => {
      event.preventDefault();
      const record = {
        month: event.target.month.value,
        year: event.target.year.value,
        power: event.target.produced.value,
      };

      const response = await api.post(`/customers/${id}/records`, record);

      if (response.status === 201) {
        setModalOpened(false);
        alert("Leitura reportada para o sistema!");
        await loadReports();
      } else {
        alert("Algo de errado aconteceu. :(");
      }
    },
    [id, loadReports]
  );

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`/customers/${id}`);
      setUser(response.data);

      await loadReports();
    }

    loadData();
  }, [id, loadReports]);

  return (
    <>
      <Header showBackButton large />

      <Container>
        <Actions>
          <RecordButton onClick={() => setModalOpened(true)}>
            <FiPlusCircle size={20} color="#fff" />
            Novo registro
          </RecordButton>
          <PrintButton to="#">
            <FiFileText size={20} color="#fff" />
            Gerar relatório
          </PrintButton>
        </Actions>
        <section>
          <UserAside>
            <FaHouseDamage size={150} color="#ccc" />
            <UserInfo>
              <span>Código: {user.id}</span>
              <strong>{user.name}</strong>
            </UserInfo>
            <UserStats>
              <li>
                <FaMapMarkerAlt size={16} />
                <span>{user.address}</span>
              </li>
              <li>
                <FaSun size={16} />
                <span>
                  Potência de usina: <br />
                  <strong>{user.kWp} kWp</strong>
                </span>
              </li>
              <li>
                <FaBolt size={16} />
                <span>
                  Produção contratual: <br />
                  <strong>{user.expected} kWh</strong>
                </span>
              </li>
              <li>
                <FaUserCheck size={16} />
                <span>Possui credenciais</span>
              </li>
            </UserStats>
          </UserAside>
          <UserAnalytics>
            {reports.length ? (
              <>
                <section>
                  <h1>Resumo da produção</h1>
                  <Table reports={reports} />
                </section>
                <hr></hr>
                <section>
                  <h1>Produção nos últimos 12 meses</h1>
                  <Chart reports={reports} />
                </section>
              </>
            ) : (
              <h3>Carregando...</h3>
            )}
          </UserAnalytics>
        </section>
      </Container>

      {modalOpened && (
        <ModalContainer>
          <ModalContent>
            <button
              type="button"
              className="close"
              onClick={() => setModalOpened(false)}
            >
              X
            </button>

            <h3>Informe a leitura efetuada</h3>

            <ModalForm onSubmit={submitFormRecord}>
              <div className="date">
                <label>
                  Mês de coleta
                  <select name="month" required>
                    <option value="">Selecione</option>
                    <option value="jan">Janeiro</option>
                    <option value="fev">Fevereiro</option>
                    <option value="mar">Março</option>
                    <option value="abr">Abril</option>
                    <option value="mai">Maio</option>
                    <option value="jun">Junho</option>
                    <option value="jul">Julho</option>
                    <option value="ago">Agosto</option>
                    <option value="set">Setembro</option>
                    <option value="out">Outubro</option>
                    <option value="nov">Novembro</option>
                    <option value="dez">Dezembro</option>
                  </select>
                </label>
                <label>
                  Ano de coleta
                  <input
                    name="year"
                    required
                    type="number"
                    placeholder="Ex: 2020"
                  />
                </label>
              </div>
              <label>
                Valor produzido (kWp)
                <input
                  name="produced"
                  required
                  type="number"
                  placeholder="Digite o valor que foi lido"
                />
              </label>

              <input type="submit" />
            </ModalForm>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};

export default Show;
