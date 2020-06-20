import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email', type: 'email' },
      { title: 'Password', field: 'password', type: 'password' },
      {
        title: 'Role',
        field: 'role',
        lookup: { 24: 'User', 23: 'Bidan', 25:'Admin' },
      },
    ],
    data: [
      { name: 'Yuna Zarai', email: 'me@mail.com', password: 'asdifgy2', role: 23 },
      {
        name: 'Zendaya Ahadi',
        email: 'Baran@mail.com',
        password: 'ermf8iym',
        role: 24,
      },
    ],
  });

  return (
    <MaterialTable
      title="Manajemen User"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
