import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: "20px",
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: "100%", sm: "360px", md: "320px" },
            height: { xs: "250px", sm: "200px", md: "180px" },
          }}
        />
      </Link>
      <CardContent
        sx={{
          height: "200px",
          position: "relative",
        }} className='bgd'
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".7" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.length > 50
              ? `${video?.snippet?.title.slice(0, 50)}...`
              : video?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".8" }}>
            {video?.snippet?.description.length > 70
              ? `${video?.snippet?.description.slice(0, 60)}...`
              : video?.snippet?.description}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position="absolute"
            bottom={"10px"}
            alignItems="center"
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography marginLeft={"7px"} variant="subtitle2" color={"gray"}>
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "7px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}
