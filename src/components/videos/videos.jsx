import { Box, Stack } from "@mui/material";
import { ChannelCard, VideoCard } from "../";

export default function Videos({ videos }) {
  return (
    <Stack
      width={"100%"}
      direction="row"
      flexWrap={"wrap"}
      justifyContent="space-evenly"
      alignItems={"center"}
      gap={2}
    >
      {videos.map((item) => (
        <Box key={item?.id?.videoId || item?.snippet?.publishTime}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}
