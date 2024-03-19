
import packages from '../data/packages.json';
// import fs from 'fs';

const addPackage = async (packageData) => {
  // const filePath = '../data/packages.json';
  // fs.writeFile(filePath, JSON.stringify(packageData), (err) => {
  //   if (err) {
  //     console.error('Error writing JSON file:', err);
  //   } else {
  //     console.log('JSON file has been written successfully.');
  //   }
  // });
  try {
    packages.push(packageData);
    return true;
  } catch (error) {
    console.error('Error adding package:', error.message);
    return false;
  }
};

export { addPackage };
