import React  from "react";
import Todoli from './Todoli.js';
import '../App.css';
export default function Todo_part() {

const [todoList, setTodoList] = React.useState(" ");
const inputvalue = document.getElementById('input');
const [todoarr, setTodoarr] = React.useState([]);
var ul = document.getElementById('todos');


function input_change(event){
    setTodoList(event.target.value);
}

function handlekeydown(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        if (inputvalue.value === '') {
            return;
        }
        console.log(todoList)
        inputvalue.value = '';
        setTodoarr(prevarr => [...prevarr, todoList])
        console.log(todoarr);
        // var li = document.createElement('li');
        // li.innerHTML = todoList;
        // li.className = 'li_class';
        // li.id = todoList;
        // ul.appendChild(li);

    }
}

function handleUl(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
        const isclasschecked = event.target.classList.contains('checked');
        console.log(isclasschecked);
        if(isclasschecked){
            event.target.style.textDecoration = 'line-through';
            event.target.style.opacity = '0.4';
        }
        else{
            event.target.style.textDecoration = 'none';
            event.target.style.opacity = '1';
        }
    }
}

function handleUldouble(event){
    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
}


    return (
        <div>
            <form action="">
                <input  id="input" className="input" type="text" placeholder='Enter your todo' onChange={input_change}
                onKeyDown={handlekeydown}/>

                <Todoli todoarr={todoarr} handleUl={handleUl} handleUldouble={handleUldouble} />
                
            </form>
        </div>
    )
}