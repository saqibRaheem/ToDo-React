import React,{useEffect, useState} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';


export default function IncDec() {
   const [first, setfirst] = useState(0)
    useEffect(() => {
     document.title=`you clicked me ${first} time`  
    }, [first])
    
   const Increase=()=>{
     setfirst(first + 1)
   }
   const Decrease =()=>{
    //  setfirst(first-1)
     if(first>0){
       setfirst(first-1)
      } else
       {
         alert("kch bhi")
         setfirst(0)
     }
   }
  return (
    <div className='main_div'>
        <div className="center_div">
            <h1> {first} </h1>
            <Stack spacing={2} direction="row">
            <Tooltip title="Add">

            <Button  onClick={Increase} ><AddIcon /></Button>
            </Tooltip>
            <Tooltip title="Delete">
      <Button   onClick={Decrease}><RemoveIcon /></Button>
            </Tooltip>
      </Stack>
        </div>

    </div>
  )
}
