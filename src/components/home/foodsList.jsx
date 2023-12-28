import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./foodCard";
import { fetchFood } from "../../store/features/foodSlice";
import { Container, Grid, Box} from "@mui/material";

export default function FoodsList() {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <Container sx={{ mt: "100px", mb:'100px' }}>
      <Grid container spacing={2} sx={{}}>
        {foods.map((food) => (
          <Grid key={food._id} xs={12} md={3} item>
            <FoodCard item={food} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
