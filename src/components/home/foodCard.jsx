import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import DescriptionIcon from "@mui/icons-material/Description";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FoodCard(props) {
  const [expanded, setExpanded] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="194"
          image={props.item.images[0]}
          alt="Paella dish"
        />
        <CardContent>
          <Box sx={{ display: "flex", mb: "10px" }}>
            <FastfoodIcon sx={{ mr: "10px" }} />
            <Typography variant="h3" color="text.secondary">
              {props.item.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mb: "10px" }}>
            <DescriptionIcon sx={{ mr: "10px" }} />
            <Typography variant="h5" sx={{ pt: "4px" }} color="text.secondary">
              {props.item.category}
            </Typography>
          </Box>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
        <EditFood editedFood={props.item} />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon onClick={() => setDeleteDialogOpen(true)} sx={{color:'red'}}/>
        </IconButton> */}
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Box sx={{ display: "flex", mb: "10px" }}>
              <MonetizationOnIcon sx={{ mr: "10px" }} />
              <Typography paragraph>{props.item.price} DT</Typography>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}
