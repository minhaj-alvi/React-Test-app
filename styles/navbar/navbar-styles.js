import { makeStyles } from "@material-ui/core";

const navBarStyles = makeStyles({
  appBar: {
    background: "white",
    boxShadow: "none",
    border: "1px solid #EFEFEF",
  },

  toolBar: {
    display: "flex",
    justifyContent: "flex-end",
    margin: 1,
  },

  btnContainer: {
    display: "flex",
    gap: "3rem",
  },

  helpBtn: {
    backgroundColor: "white",
    width: "125px",
    padding: "1rem",
    borderRadius: "8px",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "500",
    color: "#323232",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#323232",
    },
    gap: "1rem",
  },
});

const contactInfoStyles = makeStyles({
  contactBtnContainer: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "8px",
    textTransform: "none",
    fontSize: "16px",
    color: "#323232",
    "&:hover": {
      backgroundColor: "white",
      color: "#323232",
    },
    gap: "1rem",
  },

  contactBtn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  contactUs: {
    fontWeight: "400",
    fontSize: "13px",
    color: "#323232",
  },

  number: {
    fontWeight: "400",
    fontSize: "14px",
    color: "#475467",
  },

  menuItemContainer: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },

  menuItemHeading: {
    fontWeight: "500",
    fontSize: "16px",
    color: "#323232",
  },

  menuItemSubHeading: {
    fontWeight: "500",
    fontSize: "12px",
    color: "#7C7C7C",
  },
});

export { navBarStyles, contactInfoStyles };
