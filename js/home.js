
const getElem = document.querySelector("#get_service");
    const getURL = "http://127.0.0.1:3000/EmployeePayRollDB/1";
    makeServiceCall("GET", getURL, true)
    .then(responseTest => {
        getElem.textContent = "Get User Data: "+responseTest;

    })
    .catch(error =>{
        getElem.textContent = "GET Error Status: "+JSON.stringify(error);
    });
    const deleteElem = document.querySelector("#delete_services");
    const deleteURL = "http://127.0.0.1:3000/EmployeePayRollDB/3";
    makeServiceCall("DELETE", deleteURL, false)
    .then(responseTest => {
        deleteElem.textContent = "Delete Data: "+responseTest;

    })
    .catch(error => {
        deleteElem.textContent = "DELETE Error Status"+JSON.stringify(error);

    });
    const empPayrollData = {
        _name: 'Amarpa Shashanka Keerthi Kumar', 
        _gender: 'female',
        _department: [
            'Sales'
        ],
        _salary: '400000',
        _satartData: '29 Oct 2019',
        _note: '',
        _profilePic: 'C:\Users\User\Desktop\243-rfp\ClientServerArchitectureDay-48\assets\profile-images\Ellipse -1.png'
    };
    const postElem = document.querySelector("#post_services");
    const postURL = "http://127.0.0.1:3000/EmployeePayRollDB/";
    makeServiceCall("POST", postURL, true, empPayrollData)
    .then(responseTest => {
        postElem.textContent = "New user Data: "+responseTest;
    })
    .catch(error => {
        
        postElem.textContent = "POST Error Status: "+ JSON.stringify(error);
    });
    
    
