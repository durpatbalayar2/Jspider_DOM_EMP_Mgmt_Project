# Employee Management System

A responsive, browser-based **Employee Management System** built using **HTML5, CSS3, Bootstrap 5, and Vanilla JavaScript (ES6 Modules)**. The application lets users view, search, add, edit, and delete employee records, with changes saved locally in the browser using **LocalStorage**.

> A DOM manipulation and JavaScript CRUD project developed as part of hands-on learning at JSpiders.

## Features

- **Employee directory:** Display employee name, user type, email, phone number, status, and available actions in a table.
- **Employee count:** Show the number of records currently displayed.
- **Search and filtering:** Search by name, email, phone, company, location, department, designation, or status.
- **Combined filters:** Apply multiple search criteria together to narrow the results.
- **Clear filters:** Reset the search fields and restore the employee list.
- **Add employee:** Enter employee details using a popup form and create a record with a timestamp-based ID.
- **Edit employee:** Open the same form with existing details and update the selected record.
- **Delete employee:** Remove a record after a confirmation prompt.
- **LocalStorage persistence:** Keep added, edited, and deleted records consistent after refreshing the page.
- **Responsive layout:** Bootstrap-based form layout and a horizontally scrollable table on smaller screens.

## Tech Stack

| Technology | Usage |
| --- | --- |
| HTML5 | Page structure, forms, and tables |
| CSS3 | Custom styling and popup overlay |
| Bootstrap 5 | Responsive grid, components, and utility classes |
| JavaScript (ES6+) | DOM manipulation, event handling, filtering, and CRUD operations |
| ES Modules | Separating application features into modules |
| LocalStorage | Client-side persistence of employee records |

**No backend or database server is required.** Employee information is stored in the browser that runs the application.

## Project Structure

```text
Jspider_DOM_EMP_Mgmt_Project/
├── index.html              # Application layout and forms
├── style.css               # Custom styling
├── app.js                  # Application entry point and setup
├── data.js                 # Initial data and LocalStorage loading
├── displayData.js          # Employee table rendering and DOM selections
├── searchE.js              # Single and combined search filters
├── addNewEmp.js            # Add and update employee logic
└── handleDelete&Edit.js    # Edit/delete button handling
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/durpatbalayar2/Jspider_DOM_EMP_Mgmt_Project.git
   ```

2. Open the project folder:

   ```bash
   cd Jspider_DOM_EMP_Mgmt_Project
   ```

3. Open the folder in VS Code and run `index.html` using **Live Server** (or another local HTTP server).

4. Use the interface to search for employees, add a record, edit details, or delete a record.

No `npm install` or build step is needed.

## How It Works

### 1. Display employees

The application starts with sample employee records from `data.js` and renders them dynamically in the table. The employee counter updates based on the displayed records.

### 2. Search and combine filters

Search uses JavaScript's `filter()` method. Each populated field progressively filters the results of the previous step, supporting both single-field and combined searches. Name searches support partial matching; email, phone, and dropdown selections use exact matching.

### 3. Add or edit an employee

A popup form collects employee details. In Add mode, a new employee object is pushed into the array. In Edit mode, the selected employee's data is updated while preserving their existing ID.

### 4. Delete an employee

The application uses event delegation to identify the clicked Delete button, finds the selected record by ID, asks for confirmation, and removes the employee.

### 5. Save records locally

Employee records are serialized using `JSON.stringify()` and saved under the `employees` LocalStorage key. On subsequent page loads, `JSON.parse()` restores the saved data instead of resetting it to the default records.

## JavaScript Concepts Practiced

- DOM selection and dynamic HTML rendering
- `addEventListener()` and event delegation
- Array methods: `filter()`, `map()`, `find()`, `findIndex()`, `push()`, and `splice()`
- Conditional statements and logical operators
- Form handling and validation
- ES6 import/export modules
- Template literals and the spread operator
- String manipulation and case-insensitive matching
- `JSON.stringify()`, `JSON.parse()`, and LocalStorage
- Responsive design using Bootstrap breakpoints

## Limitations

- The application is **frontend-only**: it does not have a backend API, authentication, or a shared database.
- LocalStorage data is specific to the browser and site origin. It is not synchronized between devices or users, and clearing site data removes saved records.
- Timestamp-based IDs are convenient for this learning project but do not guarantee uniqueness under every condition.

## Author

**Durpat Singh Balayar**

- GitHub: [@durpatbalayar2](https://github.com/durpatbalayar2)
- Repository: [Jspider_DOM_EMP_Mgmt_Project](https://github.com/durpatbalayar2/Jspider_DOM_EMP_Mgmt_Project)

---

*Built to strengthen core JavaScript, DOM manipulation, and responsive frontend development skills.*