import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../../constants";
import { ApiService } from "../../services/api.service";
import { Videos } from "..";

export default function Search({ setLoader }) {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
    setLoader(true)
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    };
    getData();
    // eslint-disable-next-line
  }, [id]);

  return (
    <Box sx={{ height: "90vh", p: { xs: "0px 5px", sm: "0 .5rem" } }}>
      <Container maxWidth={"90%"} sx={{ p: { xs: 0, sm: 0, md: "0 1rem" } }}>
        <Typography
          variant={window.innerWidth < 600 ? 'h5' : 'h4'}
          sx={{ fontWeight: "bold", m: ".5rem", mb: { md: "1rem" } }}
        >
          Results for <span style={{ color: colors.secondary }}>"{id}"</span>
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Box>
  );
}
