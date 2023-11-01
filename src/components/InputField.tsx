import React, { useRef } from 'react'
import './styles.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e: React.FormEvent)=> void;
}
const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  // const inputRef=useRef<HTMLInputElement>(null);
  return (
    <Box   component="form" sx={{border:'1px solid black',width:"46%"}}  onSubmit={(e)=>handleAdd(e)}>
       <TextField sx={{width:"670px",margin:"15px"}}  
      // ref={inputRef}
      value={todo}
      onChange={
        (e)=>setTodo(e.target.value)
      }  label="New Todo"  />
       <Button sx={{color:"white",width:'672px',borderRadius:"3px",margin:"15px"}}  variant="contained">Add new task</Button>
    
    </Box>


    // <form className='input' onSubmit={(e)=>handleAdd(e)}>
    //   <input type='input' 
    //   // ref={inputRef}
    //   value={todo}
    //   onChange={
    //     (e)=>setTodo(e.target.value)
    //   }
    //   placeholder='New Todo' className='input_box'/>
    //   <Box >
    
    //   <Button sx={{background:"#41a3a0",color:"white",width:'672px',borderRadius:"3px",margin:"15px"}} variant="text">Add new task</Button>
    //   </Box>
    // </form>
  )
}

export default InputField