import { getAllCustomers } from "./customerService";
import { getAllPackages } from "./packageService";

const getCustomerPackagesById = (customerId) => {
    const packages = getAllPackages();
    return packages.filter(pkg => pkg.customerId === customerId);
  }

  const getCustomerNameById = (customerId) => {
    const customers = getAllCustomers();
    const customer = customers.find(customer => customer.id === customerId);
    return customer ? customer.name : 'Unknown Customer';
  };

  const getCurrentDate = () => {
    const currentDate = new Date();

    // Get individual components of the date (year, month, day)
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Note: Month is zero-indexed (0 = January)
    const day = currentDate.getDate();
  
    // Format the date and time as a string
    const formattedDateTime = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    return formattedDateTime;
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

  const buildInvoice = (customerId) => {
    const invoice = {
      randomId: getRandomNumber(),
      date: getCurrentDate(),
      customerName: getCustomerNameById(customerId),
      packages: getCustomerPackagesById(customerId),
      totalPrice: getTotalPrice(getCustomerPackagesById(customerId)),
      totalWeight: getTotalWeight(getCustomerPackagesById(customerId))
    }
    return invoice
  }

export {buildInvoice};
