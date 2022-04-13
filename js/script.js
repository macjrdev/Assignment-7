// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form  = document.getElementById('addForm');
let table = document.getElementById('employees');


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let emptCount


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDep      = document.querySelector('#department').value;


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow(-1)


    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    let cell5 = row.insertCell(4)
    let cell6 = row.insertCell(5)


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let tdEmpID     = document.createTextNode(empID)
    let tdEmpName   = document.createTextNode(empName)
    let tdEmpExt    = document.createTextNode(empExt)
    let tdEmpEmail  = document.createTextNode(empEmail)
    let tdEmpDep    = document.createTextNode(empDep)

    cell1.appendChild(tdEmpID)
    cell2.appendChild(tdEmpName)
    cell3.appendChild(tdEmpExt)
    cell4.appendChild(tdEmpEmail)
    cell5.appendChild(tdEmpDep)


    // CREATE THE DELETE BUTTON
    let deleteBtn     = document.createElement('button')
    let deleteBtnText = document.createTextNode('X')

    deleteBtn.appendChild(deleteBtnText)
    cell6.appendChild(deleteBtn)


    // DELETE EMPLOYEE
    deleteBtn.addEventListener('click', (e) => {
        table.deleteRow(e.target.parentNode.parentNode.rowIndex)
    });


    // RESET THE FORM
    document.getElementById("addForm").reset();


    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();


    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

