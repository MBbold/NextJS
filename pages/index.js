import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { ContainerHome } from './page/ContainerHome'
import { Navbar } from './page/Navbar'

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Box sx={{width:'100vw', height:'100vw', backgroundColor:'#000'}}>
        <Navbar />
        <ContainerHome/>
        
    </Box>
    </>
  )
}
