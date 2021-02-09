import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#51BFB4",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FF724C",
    },
    info: {
      main: "#FEF6E9",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 8,
  overrides: {
    MuiButton: {
      contained: {
        textTransform: "none",
        boxShadow: "none",
        borderRadius: 10,
        fontWeight: 800,
        height: 42,
        maxWidth: 200,
        width: "100%",
      },
    },
  },
});

const appFeatures = [ "Create", "Collect", "Organise", "Plan" ];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export {
  theme,
  appFeatures,
  capitalizeFirstLetter
};