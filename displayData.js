// Selection

let btnSearchTag = document.getElementById("btn-ele");
let btnFilterTag = document.getElementById("btn-clear");
let btnAddNewTag = document.getElementById("btn-add");

let inputName = document.getElementById("input-name");
let inputEmail = document.getElementById("input-email");
let inputPhone = document.getElementById("input-phone");

let selectCompany = document.getElementById("sel-company");
let selectLocation = document.getElementById("sel-location");
let selectDepartment = document.getElementById("sel-dept");
let selectDesgination = document.getElementById("sel-desg");
let selectStatus = document.getElementById("sel-status");

let tableDataContainer = document.getElementById("table-data");
let totalEmpCount = document.getElementById("total-data");

// Module-1 Display Employee in table

function displayData(data) {
  if (data.length > 0) {
    let htmlCode = ``;

    data.forEach((elem) => {
      htmlCode += `<tr>
                  <td>${elem.name}</td>
                  <td>${elem.userType}</td>
                  <td>${elem.email}</td>
                  <td>${elem.phone}</td>
                  <td class=${`${elem.status == "Active" ? "text-success" : "text-danger"}`}>${elem.status}</td>

                  <td > 
                   <button id=${elem.id} class="btn btn-success edit-btn">Edit </button>
                   <button id=${elem.id} class="btn btn-danger delete-btn">Delete </button>
                  </tr>`;
    });

    tableDataContainer.innerHTML = htmlCode;
    totalEmpCount.textContent = `${data.length}`;
  } else {
    tableDataContainer.textContent = "No data in table";
    tableDataContainer.style.color = "red";
    totalEmpCount.textContent = `${data.length}`;
  }
}

export default displayData;

export {
  btnSearchTag,
  btnFilterTag,
  btnAddNewTag,
  inputName,
  inputEmail,
  inputPhone,
  selectCompany,
  selectDesgination,
  selectLocation,
  selectDepartment,
  selectStatus,
  tableDataContainer,
};
