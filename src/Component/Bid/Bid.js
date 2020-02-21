import React from 'react';
import Link from '@material-ui/core/Link';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom'
const Bid = props => {


  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 66: 'Thailand', 67: 'Malaysia' },
      },
    ],
    data: [
      { name: 'ธนวัฒน์', 
      surname: 'วิรัชตั้งสกุล', 
      birthYear: 1994, 
      birthCity: 66 
    },
      {
        name: 'Tanawat',
        surname: 'Wirattangsakul',
        birthYear: 1994,
        birthCity: 67,
      },
    ],
  });

  return (
      
    <MaterialTable
      title="Edit Person Profile"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
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
export default Bid
