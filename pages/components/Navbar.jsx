import {
    AppBar,
  Button,
  Container,
  Stack,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import { Logo } from "../icons/logo";
import  _  from 'lodash';
import { useEffect, useState } from "react";
import { Box } from "@mui/system";

export const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);
  let buttons = [
    { title: "Products", href: "products"},
    { title: "Services", href: "services"  },
    { title: "Contact", href: "contact"  },
    { title: "Log in", href: "login" },
  ];
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const changeEventListener = ()=>{
    // console.log(window.scrollY);
    if(window.scrollY <= 0 ){
      setIsScroll(true)
    } else {
      setIsScroll(false);
    }
  };
  useEffect(()=>{
    changeEventListener();
    if(typeof window !== "undefined"){
    window.addEventListener('scroll', changeEventListener)
    }
  },[]);
  
  return (
    <AppBar position="fixed" elevation={0} sx={{ top:0, backgroundColor: isScroll ? 'transparent' : '#000'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent:"space-between"}}>
          <Stack direction={"row"} alignItems="baseline">
            <Logo/>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Tabs value={value} onChange={handleChange}>
              {_.map(buttons, (buttonEl, index)=>(
                <Tab key={index} label={buttonEl.title} sx={{color:'#fff', fontSize:14}}/>
              ))}
            </Tabs>
            <Button variant="" sx={{ color: '#fff' }}>Get Access</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
