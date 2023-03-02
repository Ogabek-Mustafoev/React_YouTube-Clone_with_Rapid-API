import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { ApiService } from "../../services/api.service";
import { ChannelCard, Videos } from '../'

export default function Channel({ setLoader }) {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
    setLoader(true);
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`);
        setChannelDetail(dataChannelDetail.items[0]);
        const videosData = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(videosData?.items)
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    };
    getData();
    // eslint-disable-next-line
  }, [id])

  return (
    <Box minHeight={'95vh'} sx={{ mt: { xs: '.5rem', md: "1rem" } }} >
      <Box>
        <Box sx={{
          width: '100%',
          height: '300px',
          zIndex: 10,
          backgroundImage: `url(
            ${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} />
        <ChannelCard video={channelDetail} marginTop='-100px' />
      </Box>
      <Container maxWidth="90%" >
        <Videos videos={videos} />
      </Container>
    </Box>
  );
}
