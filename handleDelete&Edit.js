import { setEditId } from "./addNewEmp.js";
import { employees } from "./data.js";
import displayData, { tableDataContainer } from "./displayData.js";

export function handleDelete() {
  // Event Delegation concept
  tableDataContainer.addEventListener("click", function (e) {
    // console.log(e.target.id,typeof e.target.id)// 101 string

    if (e.target.classList.contains("delete-btn")) {
      let targetId = Number(e.target.id);

      let targetIndx = employees.findIndex((elem) => elem.id === targetId); // Provide the particular index

      if (targetIndx !== -1) {
        let confirmation = confirm(
          "Are you sure want to delete this employee?",
        );

        if (confirmation) {
          employees.splice(targetIndx, 1);
          displayData(employees);
        }
      }
    }
  });
}

export function handleEdit() {
  let formpopupTag = document.getElementById("form-popup");

  let userTypeEle = document.getElementById("new-select-usertype");
  let newInpUser = document.getElementById("new-input-user");
  let newInpEmail = document.getElementById("new-input-email");
  let newInpPhone = document.getElementById("new-input-phone");
  let newSelCompany = document.getElementById("new-select-company");
  let newSelLocation = document.getElementById("new-select-location");
  let newSelDept = document.getElementById("new-select-dept");
  let newSelDesg = document.getElementById("new-select-desg");
  let newSelStatus = document.getElementById("new-select-status");

  tableDataContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
      let targetId = Number(e.target.id);

      let editData = employees.find((elem) => elem.id === targetId);

      newInpUser.value = editData.name;
      newInpEmail.value = editData.email;
      newInpPhone.value = editData.phone;
      newSelCompany.value = editData.company.toLowerCase();
      newSelLocation.value = editData.location.toLowerCase();
      newSelDept.value = editData.department.toLowerCase();
      newSelDesg.value = editData.designation.toLowerCase();
      newSelStatus.value = editData.status;
      userTypeEle.value = editData.userType;

      formpopupTag.style.display = "block";

      setEditId(targetId);
    }
  });
}
