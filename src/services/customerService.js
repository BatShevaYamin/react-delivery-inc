export const deleteCustomerFromLocalStorage = (customerId) => {
  // Retrieve the existing customer data from localStorage
  const customersData = JSON.parse(localStorage.getItem('customers'));
  
  // Delete the customer data associated with the provided customerId
  const indexToDelete = customersData.findIndex(customer => customer.id === customerId);
  
  // If customer with matching customerId is found, delete it
  if (indexToDelete !== -1) {
    customersData.splice(indexToDelete, 1);
    
  // Update the localStorage with the modified customers data
  localStorage.setItem('customers', JSON.stringify(customersData));
  }
}

export const getCustomerNameById = (customerId) => {
  const customersData = JSON.parse(localStorage.getItem('customers')) || [];
  const customer = customersData.find(customer => customer.id === customerId);
  return customer ? customer.name : null; // Return customer name if found, otherwise null
};

// Get all customers from localStorage
export const getAllCustomers = () => {
  const storedCustomers = localStorage.getItem('customers');
  
  if (storedCustomers) {
    return JSON.parse(storedCustomers);
  } else {
    return [];
  }
};

// Set customers to localStorage
export const setCustomersToLocalStorage = (customers) => {
  localStorage.setItem('customers', JSON.stringify(customers));
};
