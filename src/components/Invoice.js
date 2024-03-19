import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import GenericTable from './shared/GenericTable';
import '../styles/invoice.css';
import { buildInvoice } from '../services/invoiceService';

const Invoice = () => {
    const { customer_id } = useParams(); // Retrieve customer_id from URL params
    const [invoice, setInvoice] = useState();
    
    useEffect(() => {
        const fetchInvoices = () => {
            try {
                const customerInvoices = buildInvoice(parseInt(customer_id));
                setInvoice(customerInvoices);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };

        fetchInvoices();
    }, [customer_id]);

    const columns = [
        { key: 'price', header: 'Price' },
        { key: 'id', header: 'PackageID' },
        { key: 'weight', header: 'Weight' },
    ];

    return (
        <div>
            {invoice &&
                <div className="invoice-container">
                    <div className="invoice-header">
                        <h3>Invoice Details</h3>
                    </div>

                    <div className="invoice-body">
                        <div className="invoice-row">
                            <p><b>Date:</b> {invoice.date}</p>
                        </div>
                        <div className="invoice-row">
                            <p><b>Invoice No:</b> {invoice.randomId}</p>
                        </div>
                        <div className="invoice-row">
                            <p><b>Customer:</b> {invoice.customerName}</p>
                        </div>
                        <GenericTable data={invoice.packages} columns={columns} />
                        <div className="invoice-row">
                            <p className="total">Total Price: {invoice.totalPrice}</p>
                            <p className="total">Total Weight: {invoice.totalWeight}</p>
                        </div>
                    </div>

                    <div className="invoice-footer">
                        <p>Thank you for your business!</p>
                    </div>
                </div>
}
        </div>
    );
};

export default Invoice;
