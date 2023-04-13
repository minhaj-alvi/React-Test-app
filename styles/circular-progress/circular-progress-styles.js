import { makeStyles } from "@material-ui/core";
const CircularProgressBarStyles = makeStyles({
  mainContainer: {
    display: "flex",
    gap: "1rem",
  },
  subContainer: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #EFEFEF",
    borderRadius: "50%",
    marginTop: "1rem",
    backgroundColor: "#F8F8F8",
  },
  svgContainer: {
    position: "absolute",
    top: 22,
    left: 30,
    zIndex: 1,
  },
  text1: {
    fontWeight: "700",
    fontSize: "12px",
    color: "#323232",
    textAlign: "center",
  },
  text2: {
    fontWeight: "400",
    fontSize: "14px",
    color: "#323232",
    textAlign: "center",
  },
  text3: {
    fontWeight: "700",
    fontSize: "10px",
    color: "#AFAFAF",
    textAlign: "center",
  },
  svgsContainer: {
    position: "absolute",
    top: 15,
    left: 26,
    zIndex: 1,
  },
});
export default CircularProgressBarStyles;
