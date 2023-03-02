import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const ref = useRef(null)

  const submitHandler = (e) => {
    window.scrollTo({ top: 0, behavior: 'smooth', })
    ref.current.blur()
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
      setValue("");
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      className='bgd'
      sx={{
        border: '1px solid #76323f',
        pl: 2,
        boxShadow: "none",
        mr: { xs: 0, sm: 5 },
      }}
    >
      <input
        type="text"
        placeholder="Search.."
        className="search-bar"
        value={value}
        ref={ref}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search sx={{ color: 'var(--gray-dark)' }} />
      </IconButton>
    </Paper>
  );
}
