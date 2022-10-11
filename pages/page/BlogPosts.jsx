import { Button, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { PostData } from "../Data/PostData"

export const BlogPosts = ()=>{
    const [usersData, setUsersData] = useState([])
    useEffect(() => {
        const getUsersData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/users');
            setUsersData(res.data)
            console.log(res);
        } catch (error) {
            console.log("error", error);
        }
        };
        getUsersData();
    }, []);
    return(
        <Box mt={10}>
            <Stack>
                <Typography sx={{fontSize:48}}>Blog posts</Typography>
                <Typography sx={{fontSize:18}}>Our latest updates and blogs about managing your team</Typography>
            </Stack>
            <Button variant="contained" onClick={()=>getData()}>
                Dar
            </Button>
            {console.log(usersData)}
            {usersData.map((el, index)=><Typography sx={{color:'#fff'}} key={index}>{el.firstName}</Typography>)}
        </Box>
    )
}