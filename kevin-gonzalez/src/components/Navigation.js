// Importing React Components 

import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

// Importing Material UI Components

import 
{ 
    AppBar,
    Box, 
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
} 
from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

// Importing Application Screens 

import HomePage from "../screens/HomePage";
import EducationPage from "../screens/EducationPage";
import ExperiencePage from "../screens/ExperiencePage";
import ProjectsPage from "../screens/ProjectsPage";

// Start of Navigation 

const drawerWidth = 240;

const navItems = ["Home", "Education", "Experience", "Projects"];

const Navigation = (props) =>
{
    const { window } = props; 

    // Setting up Drawer Logic for Mobile Devices  

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () =>
    {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = 
    (
        <Box onClick = { () => handleDrawerToggle } sx = {{ textAlign: "center" }}>
            <Typography variant = "h6" sx = {{ my: 2 }}> 
                <MenuIcon />
            </Typography>
            <Divider />
            <List>
                {
                    navItems.map((item) => (
                        <ListItem key = { item } disablePadding>
                            <ListItemButton sx = {{ textAlign: 'center' }}>
                                <ListItemText>
                                    <Link 
                                        to = { item === "Home" ? "/" : `/${item.toLowerCase()}` } 
                                        style = {{ textDecoration: "none", color: "inherit" }}
                                    >
                                        { item }
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    // End of Drawer Logic Set up

    return (
        <Box sx = {{ display: "flex", flexDirection: "column", width: "100%" }}>

            <CssBaseline />

            {/* Adding the Fixed App Bar */}

            <AppBar component = "nav" style = {{ backgroundColor: "#282c34" }}>
                <Toolbar>
                    <IconButton
                        color = "inherit"
                        aria-label = "open-drawer"
                        edge = "start"
                        onClick = { handleDrawerToggle }
                        sx = {{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant = "h6" 
                        component = "div"
                        sx = {{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    </Typography>
                    <Box sx = {{ display: { xs: 'none', sm: 'block' } }}>
                        {
                            navItems.map((item) => (
                                <Link 
                                    key = { item } 
                                    to = { item === "Home" ? "/" : `/${ item }` } 
                                    className = "nav-item"
                                    style = {{ textDecoration: "none", color: "inherit", padding: "1rem" }}
                                >
                                    { item }
                                </Link>
                            ))
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            
            {/* Adding the Drawer for Mobile Screens */}

            <nav>
                <Drawer
                    container = { container }
                    variant = "temporary"
                    open = { mobileOpen }
                    onClose = { handleDrawerToggle }
                    ModalProps = {{ keepMounted: true }}
                    sx = 
                    {{ 
                        display: { xs: "block", sm: "none"},
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } 
                    }}
                >
                    { drawer }
                </Drawer>
            </nav>

            {/* Main Page Content */}

            <Box
                component = "main"
                sx = {{
                    flexGrow: 1,
                    paddingTop: { xs: "56px", sm: "64px" },
                    width: "100%", 
                    minHeight: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)" },
                    overflowY: "auto"
                }}
            >
                <Routes>
                    <Route path = "/" element = { <HomePage /> } />
                    <Route path = "/education" element = { <EducationPage /> } />
                    <Route path = "/experience" element = { <ExperiencePage /> } />
                    <Route path = "/projects" element = { <ProjectsPage /> } />
                </Routes>
            </Box>
                
        </Box>       
    );
}

export default Navigation;
