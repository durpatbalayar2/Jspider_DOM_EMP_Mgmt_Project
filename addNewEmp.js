import { employees } from "./data.js";
import displayData from "./displayData.js";

//Initially editId will be null globally

let editId = null;

export function setEditId(id) {
  editId = id;
}

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
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      userType: userTypeEle.value,
      email: newInpEmail.value,
      phone: newInpPhone.value,
      company: newSelCompany.value,
      location: newSelLocation.value,
      department: newSelDept.value,
      designation: newSelDesg.value,
      status: newSelStatus.value,
    };

    if (editId === null) {
      employees.push(newEmployee);
      formpopEle.style.display = "none";

      displayData(employees);
    } else {
      //console.log(editId)

      let editEmployeeData = employees.map((elem) => {
        if (elem.id === editId) {
          return {
            ...elem,
            name: newInpUser.value,
            email: newInpEmail.value,
            phone: newInpPhone.value,
            company: newSelCompany.value,
            location: newSelLocation.value,
            userType: userTypeEle.value,
            department: newSelDept.value,
            designation: newSelDesg.value,
            status: newSelStatus.value,
          };
        }

        return elem;
      });

      editId = null;

      employees.splice(0, employees.length, ...editEmployeeData);

      formpopEle.style.display = "none";

      displayData(employees);
    }
  });
}
