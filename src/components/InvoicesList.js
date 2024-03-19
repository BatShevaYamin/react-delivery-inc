// InvoicesList.js
import React, { useEffect, useState } from 'react';
import Invoice from './Invoice';
import useFetchData from '../hooks/useFetchData';
import { json } from 'react-router-dom';

const InvoicesList = () => {

    const [customers, setCustomers] = useState([]);
    const fetchData = useFetchData('data/customers.json');
    useEffect(() => {
        setCustomers(fetchData);
    }, [fetchData]);


    return (
        <div>
            {customers.length > 0 &&
                customers.map((customer) => (
                    <Invoice customerId={customer.id} />
                ))}
        </div>
    );
};

export default InvoicesList;
