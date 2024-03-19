import React from 'react';
import GenericTable from './shared/GenericTable';
import GenericButton from './shared/GenericButton';
import { deleteCustomerFromLocalStorage, getAllCustomers, setCustomersToLocalStorage } from '../services/customerService';
import useFetchData from '../hooks/useFetchData';
import { useEffect, useState } from 'react';
import { deleteCustomerPackagesFromLocalStorage } from '../services/packageService';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const customersData = useFetchData('data/customers.json'); // Pass the URL to useFetchData
  const [customers, setCustomers] = useState();
  const [refresh, setRefresh] = useState(false);
   
  const navigate = useNavigate();

  useEffect(() => {
    const storedCustomers = getAllCustomers();
    if (!storedCustomers || Object.keys(storedCustomers).length === 0) {
      setCustomersToLocalStorage(customersData);
      setCustomers(getAllCustomers()); 
      setRefresh(true)
    }
    else{
      setCustomers(storedCustomers); 
      setRefresh(true)
    }
  }, [customersData]);


  const handleDeleteCustomer = (customerId) => {
    deleteCustomerFromLocalStorage(customerId);
    // Optionally, you can perform any additional actions after deletion
    console.log(`Customer with ID ${customerId} deleted from localStorage`);
    deleteCustomerPackagesFromLocalStorage(customerId);
    setCustomers(getAllCustomers());
  };

  const createInvoice = (customerId) =>{
    console.log(customerId);
    navigate(`/customer/${customerId}/invoices`);
    }

  const renderButtons = (rowData) => (
    <>
      <GenericButton onClick={() => createInvoice(rowData.id)} data={rowData.id} name={"Create Invoice"} />
      <GenericButton onClick={() => handleDeleteCustomer(rowData.id)} data={rowData.id} name={"Delete"} />
    </>
  );

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'actions', header: 'Actions', render: renderButtons }
  ];

  return <> {refresh && <GenericTable data={customers} columns={columns} /> } </> ;
};

export default CustomerList;
