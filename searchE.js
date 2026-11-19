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
      alert("Please enter or select at least one search field.");
    } else {
      let resultArr = userData;

      if (nameVal) {
        resultArr = resultArr.filter((elem) =>
          elem.name.toLowerCase().includes(nameVal),
        );
      }

      if (emailVal) {
        resultArr = resultArr.filter(
          (elem) => elem.email.toLowerCase() === emailVal,
        );
      }

      if (phoneVal) {
        resultArr = resultArr.filter((elem) => elem.phone === phoneVal);
      }

      if (companyVal) {
        resultArr = resultArr.filter(
          (elem) => elem.company.toLowerCase() === companyVal,
        );
      }

      if (locationVal) {
        resultArr = resultArr.filter(
          (elem) => elem.location.toLowerCase() === locationVal,
        );
      }

      if (designationVal) {
        resultArr = resultArr.filter(
          (elem) => elem.designation.toLowerCase() === designationVal,
        );
      }

      if (departmentVal) {
        resultArr = resultArr.filter(
          (elem) => elem.department.toLowerCase() === departmentVal,
        );
      }

      if (statusVal) {
        resultArr = resultArr.filter(
          (elem) => elem.status.toLowerCase() === statusVal,
        );
      }

      displayData(resultArr);
    }
  });

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
}
