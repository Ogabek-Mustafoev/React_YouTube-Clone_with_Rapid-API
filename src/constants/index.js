import {
  Checkroom,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  School,
  SportsBasketballOutlined,
  SportsEsports,
  TheaterComedy,
} from "@mui/icons-material";

export { default as logo } from "../assets/img/logo.webp";

export const colors = {
  primary: "#fcfaf5",
  secondary: "#76323f",
};

export const category = [
  { name: "New", icon: <Home /> },
  { name: "Movie", icon: <OndemandVideo /> },
  { name: "Live", icon: <LiveTv /> },
  { name: "Gaming", icon: <SportsEsports /> },
  { name: "Education", icon: <School /> },
  { name: "Sport", icon: <SportsBasketballOutlined /> },
  { name: "Comedy", icon: <TheaterComedy /> },
  { name: "Podcast", icon: <GraphicEq /> },
  { name: "Fashion", icon: <Checkroom /> },
  { name: "Crypto", icon: <DeveloperMode /> },
  { name: "Gym", icon: <FitnessCenter /> },
  { name: "Beauty", icon: <FaceRetouchingNatural /> },
  { name: "Music", icon: <MusicNote /> },
];
