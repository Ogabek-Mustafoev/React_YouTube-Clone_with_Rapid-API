import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Category, Videos } from "..";
import { ApiService } from "../../services/api.service";

export default function Main({ setLoader }) {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth', });
    setLoader(true);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box sx={{ height: "90vh", p: { xs: "0px 5px", sm: "0 .5rem" } }}>
        <Container
          maxWidth={"90%"}
          sx={{ p: { xs: 0, sm: 0, md: "0 1rem 1rem 1rem" } }}
        >
          <Typography
            variant={window.innerWidth < 600 ? 'h5' : 'h4'}
            sx={{ fontWeight: "bold", m: ".5rem", mb: { md: "1rem" }, }}
          >
            {selectedCategory}
            <span style={{ color: 'var(--sp-color)' }}> videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}
