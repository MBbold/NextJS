import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";

export const CardComp = ({ data }) => {
  const { image, tags, id, text, owner, publishDate } = data;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image || ""}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {(tags || "") + ""}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text + ""}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box sx={{ display: "flex", alignItems: "center",  gap: 3 }}>
            <Avatar alt="Remy Sharp" src={owner.picture} />
            <Typography variant="body2" color="text.secondary">
              {owner.firstName} {owner.lastName}
            </Typography>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant="body2" color="text.secondary">
              {publishDate.slice(0, 10)}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};
