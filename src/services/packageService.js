export const addPackageToLocalStorage = (packageData) => {
  const storedPackages = JSON.parse(localStorage.getItem('packages')) || [];
  storedPackages.push(packageData);
  setPackagesToLocalStorage(storedPackages);
};

export const deletePackageFromLocalStorage = (packageId) => {
  const storedPackages = JSON.parse(localStorage.getItem('packages')) || [];
  const updatedPackages = storedPackages.filter(pkg => pkg.id !== packageId);
  setPackagesToLocalStorage(updatedPackages);
};

export const deleteCustomerPackagesFromLocalStorage = (customerId) => {
  console.log(customerId);
  debugger
  const storedPackages = getAllPackages() || [];
  
  // Filter out packages belonging to the specified customer ID
  const updatedPackages = storedPackages.filter(pkg => pkg.customerId !== customerId);
  
  // Update localStorage with the filtered packages
  setPackagesToLocalStorage(updatedPackages);
};

export const getAllPackages = () => {
  const storedPackages = localStorage.getItem('packages');
  
  if (storedPackages) {
    return JSON.parse(storedPackages);
  } else {
    return [];
  }
};

// Set packages to localStorage
export const setPackagesToLocalStorage = (packages) => {
  localStorage.setItem('packages', JSON.stringify(packages));
};

