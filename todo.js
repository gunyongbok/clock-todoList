const inputBox = document.querySelector('.todo__input');
const addButton = document.querySelector('.todo__button');
const toDOList = document.querySelector('.to__dos');

const addList = (() =>{
    const list = document.createElement('li');
    if(!inputBox.value){
        alert('Please enter what to do');
    } else{
        list.innerText = inputBox.value;
        toDOList.appendChild(list);
        inputBox.value = ""; 
    }
    // when you click toDOList it takes redline
    const checkFinishList = (() => {
        list.style.textDecoration = 'line-through red';
    })
    list.addEventListener('click',checkFinishList);
    //when you doubleclick toDoList it vanishes
    const deleteList = (() => {
        toDOList.removeChild(list);
    })
    list.addEventListener('dblclick',deleteList);
    
})  
addButton.addEventListener('click',addList);


