
import customers from '../data/customers.json';
import packages from '../data/packages.json';
const getCustomerPackagesById = (customerId) => {
    return packages.filter(pkg => pkg.customerId === customerId);
  }

  const getCustomerNameById = (customerId) => {
    const customer = customers.find(customer => customer.id === customerId);
    return customer ? customer.name : 'Unknown Customer';
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString();
  }

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  }

  const getTotalPrice = (packages) => {
    return packages.reduce((total, pkg) => total + pkg.price, 0);
  }

  const getTotalWeight = (packages) => { 
    return packages.reduce((total, pkg) => total + pkg.weight, 0);
  }


export { getCustomerPackagesById,  getCustomerNameById, getCurrentDate, getRandomNumber, getTotalPrice, getTotalWeight};
