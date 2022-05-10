import React,{useState} from 'react';
import './App.css';
// import IncDec from './component/IncDec';
import ToDoList from './ToDoList';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [todo, settodo] = useState('')
  const [list, setlist] = useState([])
  const  Todolist= (event)=>{
          console.log(event.target.value);
          settodo(event.target.value)
  }
  const Click = ()=>{
    console.log('clicked');
    setlist((olditems)=>{
      return[...olditems,todo]
    });
    settodo("")
  }
  const deleteItems =(id)=>{
    console.log('delete');
    setlist((olditems)=>{
      return olditems.filter((arratitems,index)=>{
           return index!== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <input type="text" placeholder='Add a Items' value={todo} onChange={Todolist} />
          <Tooltip title="Add">
           <Button className='newbtn' type='submit' onClick={Click}> <AddIcon/></Button>
          </Tooltip>

          <ol>
            {/* <li>{todo}</li> */}
            {
              list.map((listValue , index)=>{
                return <ToDoList 
                key={index}
                id={index}
                 text={listValue}
                   onSelect={deleteItems}
                 />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}


export default App;
