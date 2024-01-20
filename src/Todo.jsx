import React,{ useState }from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { db } from './Firebase';
import { collection,addDoc,getDocs, updateDoc, doc, setDoc} from 'firebase/firestore';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Todo() {
 const [ todo,setTodo ] = useState([]);
 const [ Input, setInput ] = useState('');
 const [ change,setChange ] = useState(true) 

 const navigate = useNavigate();


 const AddTodo = async() => {
   try {
      const obj = {
         Input,
      }
     
      const Doc =  await addDoc(collection(db,'Tododata'),obj)
      console.log("doc",Doc)
      setInput(Doc)
      if(Input !== '')
      setTodo([...todo, Input])
      setInput('')

   } catch (error) {
      console.log("error",error)
   }

 }
 
 const EditTodo = async(id) => {
   const userUpdate = prompt("Enter value");
   await updateDoc(doc(db,"user",id))
   setInput(userUpdate);
   
 }

 const DeleteTodo = (text) => {
 const del = todo.filter((item) => {
        return item !== text;
    })
    setTodo(del)
 }

 const DeleteAll = () => {
    setTodo([]);
 }




//  const getdata = async () => {
//    try {
//       const arr =[];
//       const Docs = await getDocs(collection(db,'Tododata'));
//       Docs.forEach((Doc) => {
//          // console.log("data",Doc.data)
//          // console.log("id",Doc.id)
//          arr.push({
//             ...Doc.data(),
//             id: Doc.id
//          })
//          setTodo([...arr])
         
//       })
//    } catch (error) {
//       console.log("error",error)
//    }
//  }
//  console.log("userData", todo);



return( 
  
   <div>
      <h2>React Todo App</h2>     
       <TodoInput setInput={setInput} Input={Input} change={change} AddTodo={AddTodo} DeleteAll={DeleteAll}/>
       <TodoList List={todo} DeleteTodo={DeleteTodo} edit={EditTodo}/>   

       <button onClick={() => {localStorage.clear(); navigate('/')}}>Logout</button>
      </div>
  )
}




export default Todo;