import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./foodCard";
import AddFood from "./modals/addFood";
import { fetchFood } from "../../store/features/foodSlice";
import { Container, Grid, Box} from "@mui/material";

export default function FoodsList() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <Container sx={{ mt: "50px", mb:'100px' }}>
      <Box sx={{ textAlign:'end', mb:'50px'}}>
        <AddFood />
      </Box>
      <Grid container spacing={2} sx={{}}>
        {foods.map((product) => (
          <Grid key={product._id} xs={12} md={3} item>
            <FoodCard item={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
