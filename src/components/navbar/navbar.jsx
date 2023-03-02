import { LinearProgress, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../constants";
import { SearchBar } from "..";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from "react";


export default function Navbar({ loader }) {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (isDarkMode) => {
    setDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  };

  return (
    <Stack
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
      className='bg'
    >

      <Stack style={{ color: "#952036", position: 'sticky' }}>
        <LinearProgress
          color="inherit"
          sx={{ opacity: loader ? 1 : 0, transition: "all .3s ease" }}
        />
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        textAlign='center'
        justifyContent={"space-between"}
        sx={{ p: { xs: "5px 8px 8px 8px", md: "5px 20px 8px 20px" } }}
      >
        <Link to="/">
          <div className="flex">
            <span>
              VIDE <img src={logo} alt="logo" height={35} />S
            </span>
            <small> tube</small>
          </div>
        </Link>
        <SearchBar />
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={() => toggleDarkMode(isDarkMode)}
          size={window.innerWidth < 900 ? "30px" : '40px'}
          moonColor='black'
          sunColor="white"
        />
      </Stack>
    </Stack>
  );
}
