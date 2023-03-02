import { Box, } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Channel, Main, Navbar, Search, VideoDetail } from "..";

export default function App() {
  const [loader, setLoader] = useState(true);

  return (
    <Box>
      <Navbar loader={loader} />
      <Routes>
        <Route path="/" element={<Main setLoader={setLoader} />} />
        <Route path="/channel/:id" element={<Channel setLoader={setLoader} />} />
        <Route
          path="/video/:id"
          element={<VideoDetail setLoader={setLoader} />}
        />
        <Route path="/search/:id" element={<Search setLoader={setLoader} />} />
      </Routes>
    </Box>
  );
}
