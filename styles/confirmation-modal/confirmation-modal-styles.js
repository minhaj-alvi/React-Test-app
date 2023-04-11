import { makeStyles } from "@material-ui/core";
const ConfirmationModalStyles = makeStyles({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "542px",
    height: "531px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: 4,
  },

  text1: {
    fontWeight: "700",
    fontSize: "24px",
    color: "#323232",
    textAlign: "center",
    marginTop: "1rem",
  },

  crossIcon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "-2.5rem",
  },

  subContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
  },

  text2: {
    fontWeight: "400",
    fontSize: "18px",
    color: "#7C7C7C",
    width: "70%",
  },

  textFieldContainer: {
    mt: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
    flexDirection: "column",
    gap: "1rem",
  },

  textField: {
    width: "382px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },

  submitBtn: {
    marginTop: "1rem",
    width: "142px",
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
  },
});
export default ConfirmationModalStyles;
