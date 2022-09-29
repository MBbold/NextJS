import { Button, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { PostData } from "../Data/PostData"

export const BlogPosts = ()=>{
    return(
        <Box mt={10}>
            <Stack>
                <Typography sx={{fontSize:48}}>Blog posts</Typography>
                <Typography sx={{fontSize:18}}>Our latest updates and blogs about managing your team</Typography>
            </Stack>
            <Button variant="contained" onClick={()=>getData()}>
                Dar
            </Button>
        </Box>
    )
}