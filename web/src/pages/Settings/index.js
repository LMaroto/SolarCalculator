import React, { useCallback, useEffect, useState } from 'react';
import { FiEdit, FiXSquare } from 'react-icons/fi';
import Header from '../../components/Header';
import { Container, Table } from './styles';

import api from '../../services/api';
import ModalAddSunhour from '../../components/ModalAddSunhour';
import Swal from 'sweetalert2';

const Settings = () => {
  const [loading, setLoading] = useState(false);

  const [hours, setHours] = useState([]);
  const [editing, setEditing] = useState(null);

  const [modalCreateOpen, setModalCreateOpen] = useState(false);

  useEffect(() => {
    async function loadHours() {
      setLoading(true);
      const response = await api.get('/sunhours/');

      setHours(response.data);
      setLoading(false);
    }

    loadHours();
  }, []);

  const toggleModal = useCallback(() => setModalCreateOpen(!modalCreateOpen), [
    modalCreateOpen,
  ]);

  const handleClickEdit = useCallback(
    hour => {
      setEditing(hour);
      toggleModal();
    },
    [toggleModal]
  );

  const handleCreateSunhour = useCallback(
    async data => {
      const response = await api.post('/sunhours', data);

      setHours([...hours, response.data]);

      Swal.fire({
        title: 'Sucesso!',
        text: 'Novo registro de configuração adicionado',
        icon: 'success',
      });

      toggleModal();
    },
    [hours, toggleModal]
  );

  const handleEditSunhour = useCallback(
    async data => {
      const response = await api.put(`/sunhours/${editing.id}`, data);

      // atualiza na listagem o que acabou de limpar
      setHours(
        hours.map(hour => (hour.id === response.data.id ? response.data : hour))
      );

      Swal.fire({
        title: 'Sucesso!',
        text: 'Dados alterados com sucesso',
        icon: 'success',
      });

      toggleModal();
    },
    [hours, toggleModal, editing]
  );

  const handleDeleteSunhour = useCallback(
    async id => {
      const response = await Swal.fire({
        icon: 'warning',
        title: 'Atenção!',
        text: 'Deseja realmente excluir?',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
      });

      if (response.value) {
        try {
          await api.delete(`/sunhours/${id}`);

          setHours(hours.filter(hour => hour.id !== id));

          Swal.fire({
            title: 'Sucesso!',
            text: 'Dados alterados com sucesso',
            icon: 'success',
          });
        } catch (error) {
          Swal.fire({
            title: 'Erro ao excluir!',
            text:
              'Houve um erro ao excluir. Existem clientes associados a esse registro?',
            icon: 'error',
          });
        }
      }
    },
    [hours]
  );

  return (
    <>
      <Header showBackButton />
      <Container>
        <section>
          <h1>Configurações do sistema</h1>
          <p>
            Aqui você pode configurar todos os valores que são utilizados no
            momento do cadastro dos clientes. Cada uma das entradas são cidades
            que serão associadas a eles no momento de seu cadastro.
          </p>

          <button onClick={toggleModal}>Novo registro</button>
        </section>

        <main>
          {loading ? (
            <h3>Carregando...</h3>
          ) : (
            <Table align="right">
              <thead>
                <tr>
                  <th>Cidade/UF</th>
                  <th>Ano</th>
                  <th>Jan</th>
                  <th>Fev</th>
                  <th>Mar</th>
                  <th>Abr</th>
                  <th>Mai</th>
                  <th>Jun</th>
                  <th>Jul</th>
                  <th>Ago</th>
                  <th>Set</th>
                  <th>Out</th>
                  <th>Nov</th>
                  <th>Dez</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {hours.map(hour => (
                  <tr key={hour.id}>
                    <td>{`${hour.city} - ${hour.uf}`}</td>
                    <td>{hour.year}</td>
                    <td>{hour.jan}</td>
                    <td>{hour.fev}</td>
                    <td>{hour.mar}</td>
                    <td>{hour.abr}</td>
                    <td>{hour.mai}</td>
                    <td>{hour.jun}</td>
                    <td>{hour.jul}</td>
                    <td>{hour.ago}</td>
                    <td>{hour.set}</td>
                    <td>{hour.out}</td>
                    <td>{hour.nov}</td>
                    <td>{hour.dez}</td>
                    <td>
                      <FiEdit
                        size={20}
                        color="brown"
                        onClick={() => handleClickEdit(hour)}
                      ></FiEdit>
                      <FiXSquare
                        size={20}
                        color="red"
                        onClick={() => handleDeleteSunhour(hour.id)}
                      ></FiXSquare>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </main>
      </Container>

      <ModalAddSunhour
        isOpen={modalCreateOpen}
        setIsOpen={toggleModal}
        edit={editing}
        handleSave={handleCreateSunhour}
        handleEdit={handleEditSunhour}
      />
    </>
  );
};

export default Settings;
