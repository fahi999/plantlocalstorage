import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Addproduct() {

  let initialValue;
  if(localStorage.getItem("Plant")=== null){
    initialValue =[]
  }else{
    initialValue = JSON.parse(localStorage.getItem("Plant"));
  }


  const [value, setValue] = useState(initialValue);
  const [insert, setInsert] = useState({});

  const handleChange= (e) =>{
    setInsert({
      ...insert,
      [e.target.name] : e.target.value
    });
  };
    
  console.log(value,"value state")
  console.log(insert,"insert state")

  const handleSubmit= (e) =>{
    e.preventDefault();
    const newPlantedId = value.length === 0 ? 1 : value[value.length - 1].p_id + 1;
    const details = {
      p_id : newPlantedId,
      ...insert
    };
    const updatedValue = [...value, details]; //corrected line
    setValue(updatedValue); // update the state with the new array
    localStorage.setItem("Plant",JSON.stringify(updatedValue)); // store the updated array in localstorage
  }
  return (

    <div  style={{display:"flex",justifyContent:"center"}}>
      
         <Box 
          
         style={{border:"1px solid black" ,height:"600px",width:"400px",background:"linear-gradient(180deg, #eea7f3, #c0f5d022 60%)"}}
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1 } }}
      noValidate

      autoComplete="off"
    >
      <div> 
        <div>
        <h1>INSERTING FORM</h1>
      
        <TextField style={{width:"350px"}}
         
          id="outlined-required"
          label="Product Name*"
          name="Name"
          onChange={handleChange}
         

          
        />
        <br></br>
         <TextField  style={{width:"350px"}}
         
         id="outlined-required"
         label="Availability*"
         name="Availability"
         onChange={handleChange}
        

         
       />
        <br></br>
         <TextField style={{width:"350px"}}
         
         id="outlined-required"
         label="Price*"
         name="price"
         onChange={handleChange}
        

         
       />
        <br></br>
       
        <TextField style={{width:"350px"}}
    id="outlined-required"
    label="Description*"
    name= "description"
    onChange={handleChange}
   
    multiline
    rows={4}
    // Optional: makes the TextField take the full width of its container
/>
       
        <br></br>
         <TextField style={{width:"350px"}}
         
         id="outlined-required"
         label="image Links*"
         name = "image"
         onChange={handleChange}
         
        

         
       />
        </div>
        <Button variant="contained" color="success" style={{width:"350px"}}
        onClick={handleSubmit}
        
        
        >
  Submit
</Button>
         
       
       
        </div>
        
       
      
     
      </Box>
     
      
      
   
    </div>
  )
}
