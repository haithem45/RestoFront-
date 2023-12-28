import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../store/features/authSlice'
import {Box, AppBar, Toolbar, Typography, Button , Avatar ,CssBaseline, 
  Divider, Drawer, IconButton , List, ListItem, 
  ListItemButton, ListItemText, Link} 
from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = ['Home', 'Dashboard', 'Contact'];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>Restaurant</Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex',  }}>
      <CssBaseline />
      <AppBar component="nav" sx={{}}>
        <Toolbar>
           <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Link href="/" underline="none" sx={{zIndex:'20', color:'white', flexGrow: 1}}>
            <Typography variant='h4' component="div" sx={{textAlign: 'center'}}>Tunisian Food</Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {user ? 
          <Box>  
            <Link href="/" underline="none" sx={{zIndex:'20', color:'white'}}>
              <Button Button color="inherit">Home</Button>
             </Link> 
            <Link href="/dashboard" underline="none" sx={{zIndex:'20', color:'white'}}>
              <Button color="inherit">Dashboard</Button>
             </Link> 
            <Link onClick={onLogout} href="/" underline="none" sx={{zIndex:'20', color:'white'}}>
              <Button color="inherit">Logout</Button>
            </Link> 
              <Button>
                <Avatar>A</Avatar>
              </Button>
          </Box> : 
            <Link href="/login" underline="none" sx={{zIndex:'20', color:'white'}}>
              <Button color="inherit">Login</Button>
            </Link>}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}