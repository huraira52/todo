import React,{useState} from 'react'
import { Todo } from './model';
import{AiFillEdit,AiFillDelete} from 'react-icons/ai'
import{MdDone} from 'react-icons/md'
import './styles.css'
import Box from '@mui/material/Box';




type Props={
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;    
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
   const[edit,setEdit]=useState<boolean>(false) 
   const[editTodo,seteditTodo]=useState<string>(todo.todo) 
   
  
   const handleDone=(id:number)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
   };

   const handleDelete=(id:number)=>{
      setTodos(todos.filter((todo)=>todo.id !== id))

   };
   
   const handleEdit=(e: React.FormEvent,id:number)=>{
        e.preventDefault();
        
        setTodos(todos.map((todo)=>(
          todo.id===id?{...todo,todo:editTodo}:todo
        )))
        setEdit(false)

   };


  return (
    <Box component="form" sx={{width:"47.5%", border: "1px solid black",  padding: "20px", marginTop: "35px",display:"flex"}} onSubmit={(e)=>handleEdit(e,todo.id)}>
      {
        edit? (
          <input value={editTodo}onChange={(e)=>seteditTodo(e.target.value)} className="todos__single--test"/>
        ):(
          
            todo.isDone? (
              <s className="todos__single--text">
              {todo.todo}
            </s>
            ):(
              <span className="todos__single--text">
              {todo.todo}
            </span>
            )
          
        )
      }
    
   
      <Box>
        <span className="icon" onClick={()=>{
          if(!edit && !todo.isDone){
            setEdit(!edit)
          }
        }}>
            <AiFillEdit/>
        </span>
        <span className="icon" onClick={()=>handleDelete(todo.id)}>
            <AiFillDelete/>
        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
            <MdDone/>
        </span>
      </Box>
    </Box>
  )
}

export default SingleTodo