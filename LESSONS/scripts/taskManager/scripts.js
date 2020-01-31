'use strict';

function addTask() {
  let li = document.createElement('li');
  li.className = 'tasks-list__item';
  if (task.value !== '') {
    li.innerHTML = `
      <span>${task.value}</span>
      <div>
        <button class="tasks-list__edit-task">Edit</button>
        <button class="tasks-list__delete-task">Delete</button>
      </div>
    `;
    list.append(li);
    task.value = '';
  };
}

function interationTask() {
  console.log(event);
  let target = event.target;
  
  if(target.className === 'tasks-list__delete-task') {
    target.parentElement.parentElement.remove(); 
  };
  if (target.className === 'tasks-list__edit-task') {
    let value = target.parentElement.parentElement.children[0].innerHTML;
    value = prompt('Исправьте задачу', value);
    
    target.parentElement.parentElement.children[0].innerHTML = value;
  };
}

let list = document.querySelector('.tasks-list');
let task = document.querySelector('.form__add-task');
let add = document.querySelector('.form__submit');

add.addEventListener('click', addTask);
list.addEventListener('click', interationTask);

//add.addEventListener('click', ()=>console.log('Кнопка нажата'));
//document.querySelector('.form').addEventListener('click', ()=>console.log('Форма нажата'));
//document.querySelector('.main').addEventListener('click', ()=>console.log('Main нажата'));
//document.querySelector('.wrapper').addEventListener('click', ()=>console.log('Wrapper нажата'));
//document.querySelector('body').addEventListener('click', ()=>console.log('Body нажата'));