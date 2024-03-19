## Delivery Inc. Delivery Software

Welcome to Delivery Inc.! Below is an overview of the project structure and the changes made to improve the software.

### Project Structure

```plaintext
delivery-inc/
│
├── components/
│   ├── CustomerList.js
│   ├── Invoice.js
│   ├── InvoicesList.js
│   ├── Modal.js
│   └── PackageList.js
│
├── data/
│   ├── customers.json
│   ├── invoices.json
│   └── packages.json
│
├── hooks/
│   └── useFetchData.js
│
├── pages/
│   ├── CustomerPage.js
│   ├── Home.js
│   ├── InvoicePage.js
│   └── PackagePage.js
│
└── services/
    ├── customerService.js
    ├── fetchData.js
    ├── invoiceService.js
    └── packageService.js
```

### Changes Made

#### 1. Menu Button Fix

The menu button was hooked up to the drawer to enable navigation between different pages using react-router.

#### 2. Code Separation

Code was separated into files to improve modularity and maintainability. Each page and component was moved to its own file within the appropriate directory.

- **components/**
  - **CustomerList.js**: Displays a list of customers and allows deletion of customers.
  - **Invoice.js**: Represents an individual invoice component.
  - **InvoicesList.js**: Renders a list of invoices dynamically based on packages and customers.
  - **Modal.js**: Provides modal functionality for adding packages.
  - **PackageList.js**: Displays a list of packages sorted by shipping order and allows reordering of shipping orders.

- **pages/**
  - **CustomerPage.js**: Implements the Customer List page.
  - **Home.js**: Home page with the menu button and drawer navigation.
  - **InvoicePage.js**: Implements the Invoice List page.
  - **PackagePage.js**: Implements the Package List page.

- **services/**
  - **customerService.js**: Handles operations related to customers.
  - **fetchData.js**: Contains utility functions for fetching data.
  - **invoiceService.js**: Manages operations related to invoices.
  - **packageService.js**: Manages operations related to packages.

#### 3. Pages Implementation

Three pages were implemented as follows:

- **Customer List**: Displays a list of customers. Allows deletion of customers and includes a "Create Invoice" button to navigate to the invoice page.

- **Package List**: Displays a list of packages sorted by shipping order. A modal is provided to add new packages, and buttons allow reordering of shipping orders.

- **Invoices**: Dynamically generates a list of invoices based on packages and customers. No control elements are provided.

#### 4. Navigation Implementation

React-router was utilized to enable seamless navigation between pages.

#### 5. Custom Hook Creation

A custom hook, `useFetchData`, was created to handle common functionality related to fetching data across components.

### Additional Notes

- Bugs and odd behaviors were addressed during the development process.
- Separation of concerns and best practices for code organization and readability were followed throughout the project.

### Running Instructions

To run the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open your web browser and visit `http://localhost:3000` to view the application.
