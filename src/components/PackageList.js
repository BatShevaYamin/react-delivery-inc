import React, { useEffect, useState } from 'react';
import GenericTable from './shared/GenericTable';
import GenericButton from './shared/GenericButton';
import useFetchData from '../hooks/useFetchData';
import Modal from './Modal'; // Import the Modal component
import { addPackageToLocalStorage, deletePackageFromLocalStorage, getAllPackages, setPackagesToLocalStorage } from '../services/packageService';
import { getCustomerNameById } from '../services/customerService';


const PackageList = () => {

  const [packages, setPackages] = useState([]);
  const [packagesWithCustomerNames, setPackagesWithCustomerNames] = useState([]);

  useEffect(() => {
    setPackages(getAllPackages());
    // Transform the packages data to include customer names
    const updatedPackages = packages.map(pkg => ({
      ...pkg,
      customerName: getCustomerNameById(pkg.customerId)
    }));

    // Set the state with the updated packages data
    setPackagesWithCustomerNames(updatedPackages.slice().sort((a, b) => a.id - b.id));
    setRefresh(true);
  }, [packages]); // Run this effect whenever packages changes

    const [refresh, setRefresh] = useState(false);

  const handleDeletePackages = (packagesId) => {
    deletePackageFromLocalStorage(packagesId);
    // Optionally, you can perform any additional actions after deletion
    console.log(`packages with ID ${packagesId} deleted from localStorage`);
    setPackages(getAllPackages());
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData) => {
    try {
      // Call the addPackage function from packageService.js
      addPackageToLocalStorage(parseFields(formData));
      setPackages(getAllPackages());
      handleCloseModal();
    } catch (error) {
      console.error('Error adding package:', error);
    }
  };

  const parseFields = (formData) =>{
    formData.id = parseInt(formData.id);
    formData.customerId = parseInt(formData.customerId);
    formData.weight = parseInt(formData.weight);
    formData.price = parseInt(formData.price);
    return formData
  }

  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'customerName', header: 'CustomerName' },
    { key: 'weight', header: 'Weight' },
    { key: 'price', header: 'Price' },
    {
      key: 'actions',
      header: (
        <GenericButton onClick={handleOpenModal} variant="contained" name={"+"} />
      ),
      render: (rowData) => (
        <>
          <GenericButton onClick={()=> handleDeletePackages(rowData.id)} variant="contained" name={"Delete"} />
        </>
      ),
    },
  ];


  return (
    <>
    {refresh &&
    <>
      <GenericTable data={packagesWithCustomerNames} columns={columns} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        fields={[
          { name: 'id', label: 'ID' },
          { name: 'customerId', label: 'Customer Id' },
          { name: 'weight', label: 'Weight' },
          { name: 'price', label: 'Price' },
        ]}
      />
      </>
      }
    </>
  );
};

export default PackageList;
