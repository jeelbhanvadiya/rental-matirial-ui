import { createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";

//https://colorhunt.co/palette/273174 Theme color1
//https://colorhunt.co/palette/22272 Theme color2

let theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#012f53",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#f5f6fa",
      contrastText: "#012f53",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  overrides: {
    MuiInput: {
      input: {
        "&::placeholder": {
          color: "#012f53"
        },
        // color: "black", // if you also want to change the color of the input, this is the prop you'd use
      }
    }
  },
  // typography: {
  //   "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
  //  }
});
theme = responsiveFontSizes(theme);


export default function ThemePalette(props) {
 
  return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
      );
}
