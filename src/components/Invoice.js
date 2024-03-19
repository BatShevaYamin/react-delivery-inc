import React, { useState } from 'react';
import GenericTable from './shared/GenericTable';
import useFetchData from '../hooks/useFetchData';
import { getRandomNumber, getCurrentDate, getCustomerNameById, getCustomerPackagesById, getTotalPrice, getTotalWeight } from '../services/invoiceService';
import { useEffect } from 'react';

const Invoice = (customerId) => {
  const [invoice, setInvoice] = useState({});
  const packages = useFetchData('data/packages.json');
  const customers = useFetchData('data/customers.json');


  useEffect(() => {
    const fetchData = () => {
      setInvoice(
      {
        randomId: getRandomNumber(),
        date: getCurrentDate,
        customerName: getCustomerNameById(customerId),
        packages: getCustomerPackagesById(customerId),
        totalPrice: getTotalPrice(getCustomerPackagesById(customerId)),
        totalWeight: getTotalWeight(getCustomerPackagesById(customerId))
      })
    }
    fetchData();
  }, []);

  

  const columns = [
    { key: 'weight', header: 'Weight' },
    { key: 'price', header: 'Price' },
    { key: 'packageId', header: 'Package ID' },
  ];

  return (
    <>
    <p>{customerId}</p>
      {/* <p>Date: {invoice.date}</p>
      <p>Invoice ID: {invoice.randomId}</p>
      <p>Customer: {invoice.customerName}</p>
      <GenericTable data={invoice.packages} columns={columns} />
      <p>Total Price: {invoice.totalPrice}</p>
      <p>Total Weight: {invoice.totalWeight}</p> */}
    </>
  );
};

export default Invoice;
