import { makeStyles } from "@material-ui/core";

const homeConfigurationStyles = makeStyles({
  heading: {
    fontWeight: "700",
    fontSize: "32px",
    color: "#323232",
    textAlign: "center",
  },

  subheading: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#323232",
  },

  select: {
    width: "320px",
    mt: "0.5rem",
    border: "1px solid #D0D5DD",
    boxShadow: "none",
    borderRadius: "30px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "30px",
        border: "1px solid #D0D5DD",
      },
    },
  },

  renderText: {
    fontWeight: "400",
    fontSize: "16px",
    color: "#323232",
    ml: "0.5rem",
  },
});

export { homeConfigurationStyles };
