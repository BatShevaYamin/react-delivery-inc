
import customers from '../data/customers.json';

const deleteCustomer = async (customerId) => {
  try {
    const index = customers.findIndex((customer) => customer.id === customerId);

    if (index !== -1) {
        customers.splice(index, 1);
    }


    return true; 
  } catch (error) {
    console.error('Error deleting customer:', error.message);
    return false;
  }
};

export { deleteCustomer };
