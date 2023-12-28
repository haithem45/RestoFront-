import { useState} from "react";
import { Container, TextField,  Modal,  Button, Box, Typography, FormControl,} from "@mui/material";
import { useDispatch } from "react-redux";
import {addFood} from '../../../store/features/foodSlice'
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};

export default function AddFood() {
  const [open, setOpen] = useState(false);
  const [foodData, setFoodData] = useState({
    name : '', 
    category:'',
    price : '',
    images:[""]
  });
  //const { name, category, description, price } = foodData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const onChange = (e) => {
    setFoodData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addFood(foodData))
    navigate('/')
  }

  console.log(foodData)


  return (
    <Container>
      <Button variant="contained" onClick={handleOpen} sx={{mt:'100px'}}>Add food</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>
            <Typography sx={{mb:'25px', fontWeight:'bold'}}>Add new item</Typography>
            <Box component="form" onSubmit={onSubmit} onChange={onChange}>
            <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" name='name' label="name" variant="outlined" />
          </Box>

          <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" name='category' label="Category" variant="outlined" />
          </Box>
          <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" name='price' label="Price" variant="outlined" />
          </Box>
          <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" label="images" name='images' variant="outlined" />
          </Box>
          <Box sx={{ textAlign:'end' }} >
            <Button variant="outlined" sx={{mr:'15px', width:'85px'}} onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit" sx={{width:'85px'}}>Save</Button>
          </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
