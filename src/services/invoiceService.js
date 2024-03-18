// // Corrected component name starting with an uppercase letter
// import React, { useEffect, useState } from 'react';
// import useFetchData from '../hooks/useFetchData'; // Assuming this is the custom hook file

// const invoiceService = () => {
//   const [invoices, setInvoices] = useState([]);

//   // Renamed the hook to start with "use"
//   const { fetchData } = useFetchData("./data/invoices.json");

//   useEffect(() => {
//     const fetchInvoicesData = async () => {
//       const invoicesData = await fetchData('/invoices.json');
//       setInvoices(invoicesData);
//     };
//     fetchInvoicesData();
//   }, [fetchData]);

//   return (
//     <div>
//       <h2>Invoices</h2>
//       <ul>
//         {invoices.map((invoice) => (
//           <li key={invoice.id}>{invoice.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default invoiceService;
