const loginPageStyles = {
  mainContainer: {
    height: "100vh",
    width: "100%",
    display: "grid",
    placeItems: "center",
    background: "#E7E5E4",
  },

  childContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: { xs: "300px", sm: "430px" },
    height: { xs: "250px", sm: "350px" },
  },

  button: {
    background: "none",
    border: 0,
    width: "224px",
    px: 0,
    borderBottom: "1px solid #713F12",
    color: "#3C2010",
    font: "500 22px Roboto",
    "&:hover": {
      background: "none",
      border: 0,
      color: "#3C2010",
      borderBottom: "1px solid #713F12",
    },
  },
};

export default loginPageStyles;
