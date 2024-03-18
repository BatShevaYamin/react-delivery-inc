import React from 'react';
import GenericTable from './shared/GenericTable';

const InvoiceList = () => {
  //חילוץ שאר הפרטים החוצים בשביל הטבלה והצגתם כי ה 3 שורות הם רק הסיכום
  const invoices = [
    {
      customerName: "Shalom",
      totalWeight: 201,
      totalPrice: 5,

    },
    // { id: 2, name: 'Jane Smith' },
    // { id: 3, name: 'Alice Johnson' },
  ];
  const columns = [
    { key: 'customerName', header: 'Customer Name' },
    { key: 'totalWeight', header: 'Total Weight' },
    { key: 'totalPrice', header: 'Total Price' }
  ];

  return (
    <>
      <GenericTable
        data={invoices}
        columns={columns}
        renderItem={(rowData, index) => (
          <div key={index}>
            <div>{rowData.customerName}</div>
            <div>{rowData.totalWeight}</div>
            <div>{rowData.totalPrice}</div>
          </div>
        )}
      />
      </>
  );
};

export default InvoiceList;
