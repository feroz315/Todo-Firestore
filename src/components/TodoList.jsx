import React from 'react';



function TodoList({List,DeleteTodo,edit}) {
  return (
    <>
    {List?.length > 0 ?(
        <ul>
        {List.map((item,index) => (
            <div>
            <li key={index}>{item}</li>
            <button onClick={() => DeleteTodo(item)}>Delete Item</button>
            <button onClick={() => edit()}>Edit Item</button>
       
            </div>
      ))}
       </ul> 
        
    ):
    <div style={{marginTop:150,fontSize:18,}}>
    <p>There is no Task</p>
    </div>
}
</>
  )
}


export default TodoList;