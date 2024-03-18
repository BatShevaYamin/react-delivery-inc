import React, { useState } from 'react';
import GenericTable from './shared/GenericTable';
import GenericButton from './shared/GenericButton';
import useFetchData from '../hooks/useFetchData';
import Modal from './Modal'; // Import the Modal component
import {addPackage} from "../services/packageService"


const PackageList = () => {
  const packages = useFetchData('data/packages.json');
  const customers = useFetchData('data/customers.json');
  
  const getCustomerNameById = (customerId) => {
    const customer = customers.find(customer => customer.id === customerId);
    return customer ? customer.name : 'Unknown Customer';
  };

  // Once packages and customers are fetched, map packages to include customer names
  const packagesWithCustomerNames = packages.map(pkg => ({
    ...pkg,
    customerName: getCustomerNameById(pkg.customerId)
  }));


  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (formData) => {
    try {
      // Call the addPackage function from packageService.js
      await addPackage(formData);
      console.log('New package added successfully');
      handleCloseModal();
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'customerName', header:'CustomerName' },
    { key: 'weight', header: 'Weight' },
    { key: 'price', header: 'Price' },
    {
      key: 'actions',
      header: (
        <GenericButton onClick={handleOpenModal} variant="contained" name={"+"} />
      ),
      render: (rowData) => (
        <>
          <GenericButton variant="contained" name={"Delete"} />
        </>
      ),
    },
  ];


  return (
    <>
      <GenericTable data={packagesWithCustomerNames} columns={columns} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        fields={[
          { name: 'id', label: 'ID' },
          { name: 'customerId', label:'Customer Id' },
          { name: 'weight', label: 'Weight' },
          { name: 'price', label: 'Price' },
        ]}
      />
    </>
  );
};

export default PackageList;
