import { CheckCircle, FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { ApiService } from "./../../services/api.service";
import { Videos } from '../'

export default function VideoDetail({ setLoader }) {
  const [videoDetail, setVidoDetail] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth', })
    setLoader(true);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
        setVidoDetail(data.items[0]);
        const relatedData = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`);
        setRelatedVideos(relatedData.items)
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    };
    getData();
    // eslint-disable-next-line
  }, [id]);
  if (videoDetail?.length && relatedVideos?.length) {
    setLoader(true);
    return;
  }

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }} >
        <Box width={{ xs: '100%', md: '75%' }} padding={{ xs: '.5rem', md: '1rem' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react_player"
            controls
          />
          <Stack direction={{ xs: 'column', md: 'row' }} sx={{
            gap: { xs: '10px', sm: '20px' },
            alignItems: "center",
            p: { xs: '4px 8px', sm: '8px 16px' },
            justifyContent: 'space-between'
          }}>
            <Stack direction={'row'} sx={{ padding: { xs: '4px 8px', md: '8px 16px' } }} overflowX='scroll'>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Stack direction={'row'} sx={{ alignItems: 'center', gap: '5px', marginTop: '5px' }}   >
                  <Avatar
                    alt={videoDetail?.snippet?.channelTitle}
                    src={videoDetail?.snippet?.thumbnails?.default?.url}
                  />
                  <Typography variant="subtitle2" sx={{ color: 'var(--dark)' }} >
                    {videoDetail?.snippet?.channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'inherit', ml: '5px' }} />
                  </Typography>
                </Stack>
              </Link>
            </Stack>
            <Stack direction={'row'} sx={{ gap: { xs: '10vw', sm: '20px' }, alignItems: "center", p: "8px 16px", }}>
              <Stack sx={{ opacity: 0.7, alignItems: "center", gap: "3px", }}>
                <Visibility />
                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ textAlign: 'center', gap: '3px' }} >
                  <span>{parseFloat(videoDetail?.statistics?.viewCount).toLocaleString('en-US')}</span>
                  <span>views</span>
                </Stack>
              </Stack>
              <Stack sx={{ opacity: 0.7, alignItems: "center", gap: "3px", }}>
                <FavoriteOutlined sx={{ color: 'red' }} />
                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ textAlign: 'center', gap: '3px' }} >
                  <span>{parseFloat(videoDetail?.statistics?.likeCount).toLocaleString('en-US')}</span>
                  <span>likes</span>
                </Stack>
              </Stack>
              <Stack sx={{ opacity: 0.7, alignItems: "center", gap: "3px", }}>
                <MarkChatRead />
                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ textAlign: 'center', gap: '3px' }} >
                  <span>{parseFloat(videoDetail?.statistics?.commentCount).toLocaleString('en-US')}</span>
                  <span>comments</span>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          {videoDetail?.snippet?.tags?.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ mt: { xs: '6px', sm: "10px" }, cursor: "pointer", color: 'var(--gray-dark)' }}
              deleteIcon={<Tag sx={{ color: 'var(--gray-dark) !important' }} />}
              onDelete={() => { }}
              variant="outlined"
            />
          ))}
          <Typography variant="h5" fontWeight={"bold"} p={{ xs: '.9rem .5rem 0 .5rem', sm: 2 }}>
            {videoDetail?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" p={{ xs: 1, sm: 2 }} sx={{ opacity: ".8" }}>
            {videoDetail?.snippet?.description}
          </Typography>

        </Box>
        <Box
          width={{ xs: '100%', md: '25%' }}
          padding={{ xs: '.5rem', md: '1rem 1rem 1rem 0' }}
          justifyContent="center"
          alignItems={'center'}
          overflow='scroll'
          maxHeight={'120vh'}
        >
          <Videos videos={relatedVideos} />
        </Box>
      </Box>
    </Box >
  );
}
