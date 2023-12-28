import { useState} from "react";
import { Container, TextField,  Modal,  Button, Box, Typography, FormControl,} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import {editFood} from '../../../store/features/foodSlice'
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

export default function EditFood(props) {
  const [open, setOpen] = useState(false);

  const [foodData, setFoodData] = useState({
    name : props.editedFood.name, 
    category: props.editedFood.category,
    price :  props.editedFood.price,
    images: props.editedFood.images[0]
  });

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false) };
  
  const handleCloseModal = () => {
    setFoodData({
      name : props.editedFood.name, 
      category: props.editedFood.category,
      price :  props.editedFood.price,
      images: props.editedFood.images[0]
    })
    handleClose();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editFood({foodId: props.editedFood._id, food: foodData}));
    handleClose();
    navigate('/dashboard');
  };

  console.log(props.editedFood._id)

  return (
    <Container>
      <EditIcon onClick={handleOpen} sx={{cursor:'pointer'}}/>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Box sx={style}>
            <Typography sx={{mb:'25px', fontWeight:'bold'}}>Edit food</Typography>
            <Box component="form" onSubmit={onSubmit}>
            <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" name='name' value={foodData.name}  onChange={(e) =>
    setFoodData({ ...foodData, name: e.target.value })
  } label="Food" variant="outlined" />
          </Box>

          <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" name='category' value={foodData.category}  onChange={(e) => setFoodData({ ...foodData, category: e.target.value })} label="Category" variant="outlined" />
          </Box>
          <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" name='price' value={foodData.price} onChange={(e) => setFoodData({ ...foodData, price: e.target.value })} label="Price" variant="outlined" />
          </Box>
          <Box sx={{mb:'15px'}}>
            <TextField sx={{width:'100%'}} id="outlined-basic" label="images" name='images' value={foodData.images} onChange={(e) => setFoodData({ ...foodData, images: e.target.value })}   variant="outlined" />
          </Box>
          <Box sx={{mb:'15px'}}>
            <img style={{width:'180px', height:'130px'}} sx={{width:'100%'}} id="outlined-basic" label="images" name='images' src={foodData.images}   variant="outlined" />
          </Box>
          <Box sx={{ textAlign:'end' }} >
            <Button variant="outlined" sx={{mr:'15px', width:'85px'}} onClick={handleCloseModal}>Cancel</Button>
            <Button variant="contained" type="submit" sx={{width:'85px'}}>Edit</Button>
          </Box>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
