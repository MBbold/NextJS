import {
    AppBar,
  Button,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { Logo } from "./icons/logo";

export const Navbar = () => {
  const buttons = ["Products", "Services", "Contact", "Log in"];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Logo/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: 'flex-end', gap: 5 } }}>
            <List sx={{ display: 'flex' }}>
              {buttons.map((element, index) => <ListItemButton variant="contained" sx={{ color: '#FFF' }} key={index}>{element}</ListItemButton>)}
            </List>
            <Button variant="" sx={{ color: 'grey' }}>Get Access</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
