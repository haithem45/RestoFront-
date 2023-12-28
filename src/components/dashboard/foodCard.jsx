import { useState} from 'react';
import { useDispatch } from 'react-redux';
import EditFood from './modals/editFood';
import {deleteFood} from '../../store/features/foodSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import {Card, CardMedia, CardContent, Collapse, IconButton, CardActions, Typography, Box,Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FoodCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const dispatch = useDispatch()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    dispatch(deleteFood(props.item._id));
  };

  return (
    <Box>
       <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Confirm deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Are you sure you want to delete {props.item.name}?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>Delete</Button>
        </DialogActions>
      </Dialog>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={props.item.images[0]} alt="Paella dish" />
      <CardContent>
        <Typography variant="h2" color="text.secondary">{props.item.name}</Typography>
        <Typography variant="h4" color="text.secondary">{props.item.category}</Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Box>
       <IconButton aria-label="share">
        <EditFood editedFood={props.item} />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon onClick={() => setDeleteDialogOpen(true)} sx={{color:'red'}}/>
        </IconButton>
       </Box>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Price</Typography>
          <Typography paragraph>{props.item.price}</Typography>
        </CardContent>
      </Collapse>
      </Card>
    </Box>
  );
}
