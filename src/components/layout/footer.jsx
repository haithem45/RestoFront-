import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box sx={{ width: "100%", backgroundColor: "primary.light" }}>
      <Container>
        <Typography variant="h4" sx={{textAlign: "center", pt: "70px", pb: "70px", color: "white"}}>
          Welcome to our Tunisian food website! We take pride in presenting to
          you a comprehensive list of traditional Tunisian foods and their
          ingredients. Our website is dedicated to showcasing the rich culinary
          heritage of Tunisia and its diverse flavors.
        </Typography>
      </Container>
    </Box>
  );
}
