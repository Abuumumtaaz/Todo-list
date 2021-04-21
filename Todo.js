const adForm = document.querySelector('.add');
const list = document.querySelector('.todo');
const delet = document.querySelector('.delet');
const search = document.querySelector('.search input');


/*
delet.addEventListener('click', ()  => {
  listt.remove();
})
*/

// part one qaybta add todp ga
const generateTemplate = todo => {
  const html = `
  <li class="list-group-item listt d-flex justify-content-between align-item-center">
              <span>${todo}</span>
              <i class="fas fa-trash-alt delet"></i>
          </li>
  `;
list.innerHTML += html;
}; 




adForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const todo = adForm.add.value.trim();
     
    
   

        if (todo.length) {
          generateTemplate(todo);
          adForm.reset();
        }
        
    
})

//part two qaybta delet todo ga

list.addEventListener('click', (e) => {

  if(e.target.classList.contains('delet')){
    e.target.parentElement.remove();
  }
}); 

//part three qaybta search todo ga

const filterTodos = (term) => {
  Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add('filter'));

  Array.from(list.children)
  .filter((todo) => todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.remove('filter'));


};


search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);
  
});