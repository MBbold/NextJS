import { Button, Input, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import image from "../backgroundImage.jpg";
import { PostData } from "../Data/PostData";

export const ContainerHome = () => {
  return (
    <Box sx={{ width: "100vw", backgroundColor: "#fff", position: "relative" }}>
      <Box
        sx={{ position: "absolute", zIndex: 10, color: "#fff", mt: 30, ml: 20 }}
      >
        <Typography sx={{ width: "514px", fontSize: 48 }}>
          Instant collaborations for remote teams
        </Typography>
        <Typography
          sx={{
            width: "323.85px",
            fontSize: 18,
            fontFamily: "Mulish",
            fontStyle: "normal",
          }}
        >
          All in one for your remote team chats, collaboration and track
          projects
        </Typography>
        <Stack direction="row" spacing={2} mt={3}>
          <TextField
            color="primary"
            placeholder="Email"
            size="small"
            sx={{ backgroundColor: "#fff" }}
          ></TextField>
          <Button onClick={() => PostData()} variant="contained" size="medium">
            Get early access{" "}
          </Button>
        </Stack>
      </Box>
      <Image layout="responsive" src={image} />
    </Box>
  );
}; 
