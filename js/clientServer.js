let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    if (site_properties.use_local_storage.match("true")){
        getEmployeePayrollDatatFromStorage();
    }else getEmployeePayrollDatafromServer();

});
const processEmployeePayrollDataResponse = () => {
    document.querySelector(".emp-count").textContent= empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');

}

const getEmployeePayrollDatatFromStorage = () => {
    empPayrollList = localStorage.getItem('EmployeePayrollList') ? 
    JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
    processEmployeePayrollDataResponse();

}

const getEmployeePayrollDatafromServer = () => {
    makeServiceCall("GET", site_properties.server_url, true)
    .then(responseTest => {
        empPayrollList = JSON.parse(responseTest);
        processEmployeePayrollDataResponse();

    })
    .catch(error => {
        console.log("GET Error Staus: "+JSON.stringify(error));
        empPayrollList = [];
        processEmployeePayrollDataResponse();

    });
    
}