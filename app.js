import addNewEmployee from "./addNewEmp.js";
import { employees } from "./data.js";
import displayData from "./displayData.js";
import { searchEmployee } from "./searchE.js";

// Module-1 : Display Employee
displayData(employees);

// Module-2: Search Employees
searchEmployee();

// Pop-up form open and hide logic

let formpopupTag = document.getElementById("form-popup");
let closeBtn = document.getElementById("btn-close");
let addBtn = document.getElementById("btn-add");

addBtn.addEventListener("click", function () {
  formpopupTag.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  formpopupTag.style.display = "none";
});

// Module-3 : Add new Employee in table

addNewEmployee();
