import { Button, Card, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardComp } from "../components/CardComp";
import { PostData } from "../Data/PostData";

export const BlogPosts = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    const getUsersData = async () => {
      try {
        const res = await axios.get("https://dummyapi.io/data/v1/post", {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // use your own app-id of dummy api
            "app-id": "63104c3120f6e665ecf628ba",
          },
        });

        setUsersData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUsersData();
  }, []);
  return (
    <Box mt={10}>
      <Stack>
        <Typography sx={{ fontSize: 48 }}>Blog posts</Typography>
        <Typography sx={{ fontSize: 18, pb:10}}>
          Our latest updates and blogs about managing your team
        </Typography>
      </Stack>
      {/* <Button variant="contained" onClick={() => getData()}>
        Dar
      </Button> */}
      <Grid container spacing={2}>
        {usersData.map((data, index) => (
          <Grid item xs={6} md={4}>
            <CardComp key={index} data={data} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
