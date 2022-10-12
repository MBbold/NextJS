import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { ContainerHome } from './page/ContainerHome'
// import { Footer } from './page/Footer'

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Box sx={{width:'100vw', height:'100vw'}}>
        <ContainerHome/>
    </Box>
    </>
  )
}
