import displayData, {
  btnFilterTag,
  btnSearchTag,
  inputEmail,
  inputName,
  inputPhone,
  selectCompany,
  selectDepartment,
  selectDesgination,
  selectLocation,
  selectStatus,
} from "./displayData.js";

import { employees as userData } from "./data.js";

export function searchEmployee() {
  btnSearchTag.addEventListener("click", function () {
    let nameVal = inputName.value.trim().toLowerCase();
    let emailVal = inputEmail.value.trim().toLowerCase();
    let phoneVal = inputPhone.value.trim();

    let companyVal = selectCompany.value;
    let locationVal = selectLocation.value;
    let designationVal = selectDesgination.value;
    let departmentVal = selectDepartment.value;
    let statusVal = selectStatus.value;

    if (
      nameVal === "" &&
      emailVal === "" &&
      phoneVal === "" &&
      companyVal === "" &&
      locationVal === "" &&
      designationVal === "" &&
      departmentVal === "" &&
      statusVal === ""
    ) {
      alert("Invalid filed");
    } else {
      if (nameVal) {
        let filterName = userData.filter(
          (elem) => elem.name.toLowerCase().includes(nameVal),
        );
        displayData(filterName);
      } else if (emailVal) {
        let filterEmail = userData.filter(
          (elem) => elem.email.toLowerCase() === emailVal,
        );
        displayData(filterEmail);
      } else if (phoneVal) {
        let filterPhone = userData.filter((elem) => elem.phone === phoneVal);

        displayData(filterPhone);
      } else if (companyVal) {
        let filterEmpCompany = userData.filter((elem) => {
          if (elem.company.toLowerCase() === companyVal) {
            return elem;
          }
        });

        // console.log(filterEmpCompany);

        displayData(filterEmpCompany);
      } else if (locationVal) {
        let filterEmpLocation = userData.filter(
          (elem) => elem.location.toLowerCase() === locationVal,
        );

        displayData(filterEmpLocation);
      } else if (designationVal) {
        let filterEmpDesg = userData.filter(
          (elem) => elem.designation.toLowerCase() === designationVal,
        );

        displayData(filterEmpDesg);
      } else if (departmentVal) {
        let filterEmpDept = userData.filter(
          (elem) => elem.department.toLowerCase() === departmentVal,
        );

        displayData(filterEmpDept);
      } else if (statusVal) {
        let filterEmpStatus = userData.filter(
          (elem) => elem.status.toLowerCase() === statusVal,
        );

        displayData(filterEmpStatus);
      }
    }

    btnFilterTag.addEventListener("click", function () {
      inputName.value = "";
      inputEmail.value = "";
      inputPhone.value = "";
      selectCompany.value = "";
      selectLocation.value = "";
      selectDepartment.value = "";
      selectDesgination.value = "";
      selectStatus.value = "";

      displayData(userData);
    });
  });
}
