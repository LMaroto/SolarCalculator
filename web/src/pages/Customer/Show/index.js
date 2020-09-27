import React, { useState, useEffect, useCallback } from 'react';
import { FiFileText, FiPlusCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import {
  FaHouseDamage,
  FaMapMarkerAlt,
  FaUserCheck,
  FaSun,
  FaBolt,
} from 'react-icons/fa';

import Swal from 'sweetalert2';

import Header from '../../../components/Header';
import Table from '../../../components/Table';
import ChartComponent from '../../../components/Chart';

import {
  Container,
  Actions,
  RecordButton,
  PrintButton,
  UserAside,
  UserAnalytics,
  UserInfo,
  UserStats,
} from './styles';
import api from '../../../services/api';
import ModalAddRecord from '../../../components/ModalAddRecord';

const Show = () => {
  const [user, setUser] = useState([]);
  const [reports, setReports] = useState([]);

  const [openRecordModal, setOpenedRecordModal] = useState(false);

  const { id } = useParams();

  const loadReports = useCallback(async () => {
    const reportsResponse = await api.get(`customers/${id}/reports`);
    setReports(reportsResponse.data);
  }, [id]);

  const toggleRecordModal = useCallback(
    () => setOpenedRecordModal(!openRecordModal),
    [openRecordModal, setOpenedRecordModal]
  );

  const submitFormRecord = useCallback(
    async data => {
      /*
      Verificando se existe alguma leitura para o mesmo período.
      */

      const record = {
        month: data.month,
        year: Number(data.year),
        power: Number(data.power),
        start: Number(data.start),
        end: Number(data.end),
        observation: data.observation,
      };

      const recordExists = reports.find(
        report => record.month === report.month && report.year === record.year
      );
      /*
        Opção para sobrescrever leitura.
      */
      if (recordExists) {
        Swal.fire({
          icon: 'warning',
          title: 'Atenção!',
          text:
            'Já existe leitura para o período selecionado. Deseja sobrescrever?',
          showCancelButton: true,
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
        }).then(async result => {
          if (result.value) {
            const response = await api.put(
              `/customers/${id}/records/${recordExists.id}`,
              record
            );

            if (response.status === 200) {
              await loadReports();

              Swal.fire({
                title: 'Sucesso!',
                text: 'Leitura reportada para o sistema',
                icon: 'success',
              });
            } else {
              Swal.fire({
                title: 'Opa!',
                text: 'Algo de errado aconteceu. Por favor, tente novamente.',
                icon: 'error',
              });
            }
          }
          setOpenedRecordModal(false);
        });
      } else {
        /*
        Caso não exista leitura para o período, cria uma nova.
      */
        const response = await api.post(`customers/${id}/records`, record);

        if (response.status === 201) {
          setOpenedRecordModal(false);

          Swal.fire({
            title: 'Sucesso!',
            text: 'Leitura reportada para o sistema',
            icon: 'success',
          });

          await loadReports();
        } else {
          Swal.fire({
            title: 'Opa!',
            text: 'Algo de errado aconteceu. Por favor, tente novamente.',
            icon: 'error',
          });
        }
      }
    },
    [id, loadReports, reports]
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
      <Header showBackButton large title={user.name} />
      <Container>
        <Actions>
          <RecordButton onClick={() => setOpenedRecordModal(true)}>
            <FiPlusCircle size={20} color="#fff" />
            Novo registro
          </RecordButton>
          <PrintButton to={`${user.id}/reports`}>
            <FiFileText size={20} color="#ff7518" />
            Gerar relatório
          </PrintButton>
        </Actions>
        <section>
          <UserAside>
            <FaHouseDamage size={150} color="#ccc" />
            <UserInfo>
              <span>Código: {user.registration_number}</span>
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
                  <Table
                    columns={[
                      'Mês/Ano',
                      'Esperado (CRESESB)',
                      'Produção',
                      'Percentual',
                      'Diferença',
                    ]}
                    rows={report => [
                      `${report.month}/${report.year}`,
                      `${report.goal} kWp`,
                      `${report.produced} kWp`,
                      `${report.percentual} %`,
                      `${report.difference} %`,
                    ]}
                    warnValidate={report =>
                      report.difference < -15 && report.difference > -25
                    }
                    dangerValidate={report => {
                      const difference = report.difference * -1;
                      return difference > 25;
                    }}
                    data={reports}
                  />
                </section>
                <hr></hr>
                <section>
                  <h1>Produção nos últimos 12 meses</h1>
                  <ChartComponent reports={reports} />
                </section>
              </>
            ) : (
              <h3>Não há registros.</h3>
            )}
          </UserAnalytics>
        </section>
      </Container>
      <ModalAddRecord
        isOpen={openRecordModal}
        setIsOpen={toggleRecordModal}
        handleSaveRecord={submitFormRecord}
      />
    </>
  );
};

export default Show;
