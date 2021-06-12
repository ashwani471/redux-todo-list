import React, { useState } from 'react';
import {useSelector, useDispatch } from "react-redux";
import { addTodo ,deleteTodo} from 'react';
const Todo=()=>{
    const [inputData ,setInputData] =useState('');
    const list=useSelector((state)=>state.todoReducers.list);
 const dispatch =useDispatch();
     
  return (
    <>
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here 👍</figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder="✍️ Add items..." 
              value={inputData}
              onChange={(event)=>setInputData(event.target.value)}
          />
          <button className="add-btn" onClick={()=>dispatch(addTodo(inputData),setInputData(''))}>+</button>
          {/* <i className="fas fa-plus-circle add-btn"></i> */}
        </div>
        <div className="showItems">
     
       {
           list.map((elem)=>{
               return(
            <div className="eachItem" key={elem.id}>
                <h3>{elem.data}</h3>
              <button className="add-btn" onClick={()=>dispatch(deleteTodo(elem.id))}>-</button>
            </div>
               );
           })
       }
         
        </div>
      </div>
    </div>
    </>
  );
}

export default Todo;