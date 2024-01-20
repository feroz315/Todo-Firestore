import React from 'react';
import Button from '@mui/material/Button';



const TodoInput = ({setInput,Input,AddTodo,DeleteAll,change}) => {

 return (
    <div>
    <input type='text' 
     placeholder='Add Item' 
     onChange={(e) => setInput(e.target.value)} 
     style={{height:30, width:'25%',borderRadius:10}}
     value={Input}/>
     
         <Button variant="contained" onClick={AddTodo} style={{marginLeft:20}}>Add Item</Button>
         <Button variant="contained" onClick={DeleteAll} style={{marginLeft:10}}>DeleteAll</Button>
    
    </div>
  )
}


export default TodoInput;