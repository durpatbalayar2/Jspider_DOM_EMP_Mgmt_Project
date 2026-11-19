import { employees } from "./data.js";
import displayData from "./displayData.js";

export default function addNewEmployee() {
  // selection
  let formEleDiv = document.getElementById("form-ele");

  let userTypeEle = document.getElementById("new-select-usertype");

  let newInpUser = document.getElementById("new-input-user");
  let newInpEmail = document.getElementById("new-input-email");
  let newInpPhone = document.getElementById("new-input-phone");

  let newSelCompany = document.getElementById("new-select-company");
  let newSelLocation = document.getElementById("new-select-location");
  let newSelDept = document.getElementById("new-select-dept");
  let newSelDesg = document.getElementById("new-select-desg");
  let newSelStatus = document.getElementById("new-select-status");

  // after submit form to get hide

  let formpopEle = document.getElementById("form-popup");

  formEleDiv.addEventListener("submit", function (e) {
    e.preventDefault();

    let newEmployee = {
      id: Date.now(),
      name: newInpUser.value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
      userType: userTypeEle.value,
      email: newInpEmail.value,
      phone: newInpPhone.value,
      company: newSelCompany.value,
      location: newSelLocation.value,
      department: newSelDept.value,
      designation: newSelDesg.value,
      status: newSelStatus.value,
    };

    employees.push(newEmployee);
    formpopEle.style.display = "none";

    displayData(employees);
  });
}
