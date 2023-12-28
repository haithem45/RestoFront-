import { Box, createTheme, ThemeProvider } from "@mui/material";
import Header from './components/layout/header';
import Routes from './routes';
import Footer from "./components/layout/footer";
import './App.css';

const theme = createTheme({
  palette: {
  primary: {
    light: "#F1592A",
    main: "#F1592A",
    mainTwo:'#F1592A',
  },
},
typography: {
  h1:{
    fontFamily :'Poppins , sans-serif',
    fontWeight:'bold',
    fontSize:'3.5rem',
  },
  h2:{
   fontFamily :'Poppins , sans-serif',
    fontWeight:'400',
    fontSize:'1.75rem',
  },
  h3:{
   fontFamily :'Poppins , sans-serif',
    fontSize:'1.5rem',
  },
  h4:{
    fontFamily :'Poppins , sans-serif',
    fontWeight:'400',
    fontSize:'1.3rem',
  },
  h5:{
    fontFamily :'Poppins , sans-serif',
    fontWeight:'400',
    fontSize:'0.9375rem',
  },
  h6:{
    fontFamily :'Poppins , sans-serif',
    fontWeight:'60',
    fontSize:'0.875rem',
  }
},
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
       <Header />
       <Routes />
       <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
