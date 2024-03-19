
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CustomerPage from './pages/CustomerPage';
import PackagePage from './pages/PackagePage';
import Home from './pages/Home';
import Invoice from './components/Invoice';
import InvoicePage from './pages/InvoicePage';
import useFetchData from './hooks/useFetchData';
import { getAllCustomers, setCustomersToLocalStorage } from './services/customerService';
import { getAllPackages, setPackagesToLocalStorage } from './services/packageService';

const App = () => {
  const packagesData = useFetchData('data/packages.json');

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const storedPackages = getAllPackages();
    if (!storedPackages || Object.keys(storedPackages).length === 0) {
      setPackagesToLocalStorage(packagesData);
      setPackages(getAllPackages()); 
    }
    else{
      setPackages(storedPackages); 
    }
  }, [packagesData]);


  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/" element={<CustomerPage />} />
            <Route path="/packages" element={<PackagePage />} />
            <Route path="/invoices" element={<InvoicePage />} />
            <Route path="/customer/:customer_id/invoices" element={<Invoice />} />
          </Routes>
        </BrowserRouter >
      </div>
    </>
  );
}

export default App;


// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Link} from "react-router-dom"
// import CustomerPage from './pages/CustomerPage';
// import PackagePage from './pages/PackagePage';
// import InvoicePage from './pages/InvoicePage';

// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/customers">Customers</Link>
//                         </li>
//                         <li>
//                             <Link to="/packages">Packages</Link>
//                         </li>
//                         <li>
//                             <Link to="/invoices">Invoices</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 <Routes>
//                     <Route path="/customers" element={<CustomerPage />} />
//                     <Route path="/packages" element={<PackagePage />} />
//                     <Route path="/invoices" element={<InvoicePage />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;
