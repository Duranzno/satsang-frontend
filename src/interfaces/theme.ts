import { colors, createMuiTheme } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

export const theme = createMuiTheme({
  palette: {
    primary: {
      // #36ab9c
      main: "#FFBD12",
      "100": "#FFD465"
    },
    text: {
      secondary: "#FFF",
      hint: grey[500]
    },
    secondary: {
      main: "#18191F",
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  spacing: factor => `${0.25 * factor}rem`,
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 16,
        boxShadow: "0px 4px 0px #18191F"
      }
    },
    MuiDrawer: {
      paperAnchorRight: {
        borderLeft: "2px solid #000000",
        boxSizing: "border-box",
        borderRadius: "18px 0px  0px 18px",
      },
      paperAnchorDockedLeft: {

        borderRight: "2px solid #000000",
        boxSizing: "border-box",
        borderRadius: "0px 18px 18px 0px",
      }
    }
  }
})
export default theme