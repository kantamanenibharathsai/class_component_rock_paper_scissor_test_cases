const homePageStyles = {
  mainContainer: {
    height: "100vh",
    background: "#E7E5E4",
    width: "100%",
  },

  childContainer: {
    height: "inherit",
    background: "transparent",
    width: "100%",
    py: "20px",
    display: "flex",
    flexDirection: "column",
  },

  topContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "2px solid red",
    alignSelf: "center",
    width: { xs: "98%", sm: "96%" },
  },

  topMobileContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  iconButton: {
    background: "#52525B",
    // display: { xs: "none", sm: "inline" },
    width: "45px",
    height: "45px",
    "&: hover": {
      background: "#52525B",
    },
  },

  icon: {
    width: "30px",
    height: "30px",
    color: "#fff",
  },

  winEqualCardsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: { xs: 0, sm: 3, md: 3, lg: "100px" },
    // border: "2px solid red",
    flexGrow: { xs: 1, sm: 0 },
  },

  winEqualCard: {
    width: "95px",
    // border: "1px solid red"
  },

  winEqualText: {
    color: "#fff",
    font: "500 20px Roboto",
    background: "#3F3F46",
    textAlign: "center",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  numberText: {
    color: "black",
    font: "500 70px Roboto",
    textAlign: "center",
    background: "#FFFFFF",
    width: "100%",
  },

  roundsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-between", sm: "center" },
    mt: 3,
    width: { xs: "98%", sm: "96%" },
    alignSelf: "center",
  },

  iconSmallButton: {
    display: { xs: "inline", sm: "none" },
  },

  roundTextNumberContainer: {
    width: "95px",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  roundText: {
    color: "#000",
    font: "500 20px Roboto",
    textAlign: "center",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    width: "100%",
  },

  roundNumberText: {
    color: "#000",
    font: "500 70px Roboto",
    textAlign: "center",
    background: "transparent",
    width: "100%",
  },

  handsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: 2,
  },

  middleImage: {
    width: { xs: "150px", sm: "200px", md: "260px", lg: "400px" },
  },

  circlesParentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    // border: "4px solid green",
    marginTop: "auto",
  },

  circlesChildContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    gap: { xs: 0, sm: 3 },
  },

  IconCircleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  circleImage: {
    width: { xs: "90px", sm: "110px" },
    height: { xs: "90px", sm: "110px" },
  },
};

export default homePageStyles;
