import { makeStyles } from "@material-ui/core";

const intentionStyles = makeStyles({
  heading: {
    fontWeight: "700",
    fontSize: "32px",
    color: "#323232",
    textAlign: "center",
  },

  subHeading: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#323232",
  },

  checkboxContainerChecked: {
    width: "320px",
    height: "55px",
    marginTop: "0.5rem",
    border: "1px solid #01E994",
    boxShadow: "none",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
  },

  checkboxContainerUnChecked: {
    width: "320px",
    height: "55px",
    marginTop: "0.5rem",
    border: "1px solid #D0D5DD",
    boxShadow: "none",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
  },

  checkbox: { display: "flex", alignItems: "center", paddingLeft: "1rem" },

  checkboxText: {
    fontWeight: "400",
    fontSize: "16px",
    color: "#323232",
    textAlign: "center",
  },

  detailContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    borderRadius: "30px",
    padding: "6px 24px 6px 24px",
    width: "197px",
    height: "32px",
    marginLeft: "2.5rem",
  },

  detailText: {
    fontWeight: "400",
    fontSize: "16px",
    color: "#7C7C7C",
    textAlign: "center",
  },
});

export { intentionStyles };
