import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { BlogPosts } from './page/BlogPosts'
import { ContainerHome } from './products'
// import { Footer } from './page/Footer'

export default function Home() {
  const router = useRouter()
  return (
    <>
    <Box sx={{width:'100vw', height:'auto'}}>
        <ContainerHome/>
        <BlogPosts/>
    </Box>
    </>
  )
}
