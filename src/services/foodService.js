import axios from "axios";

// const API_URL = "https://threew-apis.onrender.com/api";
const API_URL = "http://localhost:9095";

// Get foods
const getFoods = async () => {
  try {
    const response = await axios.get(API_URL + "/foods");
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// Get food by ID
const getFoodById = async (foodId) => {
  try {
    const response = await axios.get(`${API_URL}/food/${foodId}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// Add new food
const addFood = async (foodData) => {
  try {
    const response = await axios.post(API_URL + "/food", foodData);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// Edit food
const editFood = async (foodId, foodData) => {
  try {
    const response = await axios.put(`${API_URL}/food/${foodId}`, foodData);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// Delete food
const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(`${API_URL}/food/${foodId}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
};

const foodService = {
  getFoods,
  addFood,
  getFoodById,
  editFood,
  deleteFood,
};

export default foodService;
