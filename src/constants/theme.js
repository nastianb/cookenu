import { primaryColor, neutralColor } from "./colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    text: {
      primary: neutralColor,
    },
  },
});

export default theme;
