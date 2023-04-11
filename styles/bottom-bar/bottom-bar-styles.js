import { makeStyles } from "@material-ui/core";
const BottomBarStyles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "white",
    padding: "1rem",
  },

  subContainer: {
    display: "flex",
    gap: "1rem",
    marginLeft: "2rem",
  },

  text1: {
    fontWeight: "700",
    fontSize: "18px",
    color: "#122C44",
    fontFamily: "Mulish",
  },

  text2: {
    fontWeight: "400",
    fontSize: "12px",
    color: "#AFAFAF",
    fontFamily: "Mulish",
  },

  text3: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#9EA7B7",
    textDecoration: "line-through",
    fontFamily: "Mulish",
  },

  text4: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#122C44",
    fontFamily: "Mulish",
  },

  btnContainer: {
    display: "flex",
    gap: "1rem",
    marginRight: "2rem",
  },

  btn1: {
    marginTop: "1rem",
    width: "320px",
    height: "55px",
    backgroundColor: "white",
    textTransform: "none",
    borderRadius: "35px",
    color: "#323232",
    fontWeight: "700",
    fontSize: "18px",
    border: "1px solid #122C44",
    "&:hover": {
      backgroundColor: "white",
    },
    fontFamily: "Mulish",
  },

  btn2: {
    marginTop: "1rem",
    width: "320px",
    height: "55px",
    backgroundColor: "#01E994",
    textTransform: "none",
    borderRadius: "35px",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#01E994",
    },
    fontFamily: "Mulish",
  },
});
export default BottomBarStyles;
