// import React,{useState,useEffect} from 'react';
// import './App.css';
// import InputField from './components/InputField';
// import { Todo } from './components/model';
// import TodoList from './components/TodoList';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import axios from 'axios';

// const App: React.FC = () => {
//   const[todo,setTodo]=useState<string>("")
//   const[data,setData]=useState<any>([])
//   const[todos,setTodos]=useState<Todo[]>([]);

//   const handleAdd=(e: React.FormEvent)=>{
//     e.preventDefault();

//     if(todo){

//       setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
//       setTodo("");

//     }

//   }

// // const getdata=()=>{
// //   return(
// //     let data =await axios.get("https://jsonplaceholder.typicode.com/todos");
// //   )
// // }

//  useEffect(():void => {
//     axios.get("https://640eb8dacde47f68db36899c.mockapi.io/todo").then(
//     response => {
//     //  console.log("data1",response.data)
//      setData(response.data)
//     // return response.data
//     }
//   );

// },[])

// // console.log("data",data);

//   return(
//     <Box className='App'>
//       <span className="heading">TodoInput</span>
//       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
//       <span className="heading2">TodoList</span>
//       <Box sx={{width:'660px', height:'52px',marginRight:"50px",marginLeft:"50px",display:"flex"}}>
//       <Button sx={{color:"white",width:'90px'}} variant="contained">All</Button>
// <Button sx={{marginLeft:"220px",color:"white",width:'90px'}} variant="contained">Done</Button>
// <Button sx={{marginLeft:"220px",color:"white",width:'90px'}} variant="contained">Todo</Button>
//       </Box>
//       <TodoList todos={todos} setTodos={setTodos} data={data}   />

//       <Box>
//         {/* {
//           data && data.
//         } */}
//       </Box>
//     </Box>
//   )
// };
// export default App;

import React,{useState} from 'react'
import "./App.css"
import {Note} from './models/note.model'
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import NotesList from './components/NotesList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
    const[notes, setNotes]=useState<Note[]>([{
      id: (new Date).toString(),
      title: "Meeting",
      text:"Schedule Meeting",
      color:"#dfdfdf",
      date:(new Date).toString(),
    }]);
    
  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
        <NotesList notes={notes} />
        </Col>
      </Row>
    </Container>  
    </>
  );
}

export default App
