const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const professionInput = document.querySelector('#profession');
const ageInput = document.querySelector('#age');
const addButton = document.querySelector('#add-employee');
const messagesDiv = document.querySelector('#messages');
const employeeList = document.querySelector('#employee-list');
const noemployee = document.querySelector('.noemp');

let employees = [];
let nextId = 1;

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (nameInput.value === '' || professionInput.value === '' || ageInput.value === '') {
    messagesDiv.textContent = 'Error : Please Make sure All the fields are filled before adding in an employee !';
    messagesDiv.style.color = 'red';
  } else {
    const employee = {
      id: nextId,
      name: nameInput.value,
      profession: professionInput.value,
      age: ageInput.value
    };

    noemployee.style.display='none';
    employees.push(employee);
    nextId++;
    
    const listItem = document.createElement('li');
    listItem.style.display='flex';
    listItem.style.justifyContent='space-between';
    listItem.style.alignItems='center';
    listItem.style.paddingLeft='10px';
    listItem.style.marginBottom='20px';




    listItem.style.border='2px solid white';
    listItem.textContent = `${employee.id}.   name : ${employee.name} profession :  ${employee.profession} Age :  ${employee.age}`;
    
    // listItem.textContent = '${employee.id} ${employee.name} (${employee.profession}), age ${employee.age}`;
 // listItem.innerHTML = `<div class="emp"><div class="emp-data"><div>${employee.id}.</div> <div>Name: ${employee.name}</div><div>Profession: ${employee.profession}</div><div>Age: ${employee.age}</div> </div><button onclick='del(${emp.id})' class="delete">Delete User</button></div>`;
    
    const deleteButton = document.createElement('button');
    deleteButton.style.width='162px';
    deleteButton.style.height='42px';
    deleteButton.style.borderRadius='20px';
     deleteButton.style.marginRight='50px';
     deleteButton.style.fontSize='23px';

    deleteButton.style.marginLeft='80px';
    deleteButton.textContent = 'Delete';
    
    deleteButton.addEventListener('click', () => {
      const index = employees.findIndex((element) => element.id === employee.id);
      if (index !== -1) {
        employees.splice(index, 1);
        listItem.remove();
        messagesDiv.textContent = 'Employee Deleted!';
          
    messagesDiv.style.color = 'red';
      
      }
      if(index === 0){
        noemployee.style.display='blok';
      }
      
    });
    listItem.appendChild(deleteButton);
    
    employeeList.appendChild(listItem);
    
    messagesDiv.textContent = 'Success: Employee Added! ';
    messagesDiv.style.color = 'green';
    
    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';
  }
});