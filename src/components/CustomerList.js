import React from 'react';
import GenericTable from './shared/GenericTable';
import GenericButton from './shared/GenericButton';
import { deleteCustomer } from '../services/customerService';
import useFetchData from '../hooks/useFetchData';
import { useEffect, useState } from 'react';

const CustomerList = ({ onDeleteCustomer }) => {
  const [customers, setCustomers] = useState([]);
  const fetchData = useFetchData('data/customers.json'); // Pass the URL to useFetchData
  useEffect(() => {
      setCustomers(fetchData); // Update customers when data is fetched
  }, [fetchData]);


  const renderButtons = (rowData) => (
    <>
      <GenericButton onClick={() => console.log("Create Invoice")} data={rowData.id} name={"Create Invoice"} />
      <GenericButton onClick={() => console.log("delelte")/*onDeleteCustomer(rowData.id)*/} data={rowData.id} name={"Delete"} />

    </>
  );

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'actions', header: 'Actions', render: renderButtons }
  ];

  return <GenericTable data={customers} columns={columns} />;
};

export default CustomerList;
