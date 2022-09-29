import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { BlogPosts } from './page/BlogPosts'
import { ContainerHome } from './page/ContainerHome'
import { Navbar } from './page/Navbar'

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Box sx={{width:'100vw', height:'100vw', backgroundColor:'#'}}>
        <Navbar />
        <ContainerHome/>
        <BlogPosts/>
    </Box>
    </>
  )
}
