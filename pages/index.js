import { AppBar, Button, Container, CssBaseline, List, ListItemButton, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Logo } from './icons/logo'
import { Navbar } from './Navbar'

export default function Home() {
  const router = useRouter()
  const buttons = ['Products', 'Services', 'Contact', 'Log in'];
  return (
    <>
      <CssBaseline />
      <Container sx={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
        
        <Navbar />

      </Container>
    </>

  )
}
