import React,{useState}from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ContentCutIcon from '@mui/icons-material/ContentCut';
export default function ToDoList(props) {
const [line, setline] = useState(false)
const cutItm=()=>{
setline(true)
}

  return (
      <>
         <div className="todo_style">
         {/* <FontAwesomeIcon icon={["far", "coffee"]} /> */}
         <DeleteOutlineIcon  onClick={()=>{
          props.onSelect(props.id)
        }}/>
        <span onClick={cutItm}>
          <ContentCutIcon/>
        </span>
        {/* <button className='btn' onClick={()=>{
          props.onSelect(props.id)
        }}>*</button> */}
    <li style={{ textDecoration : line ? "line-through" :"none"}}>{props.text}</li>
         </div> 
      </>
  )
}
