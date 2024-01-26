import { makeStyles } from "@mui/styles"

export const StyleComponent = makeStyles(theme => ({
  "@keyframes myEffectCard-service": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  containerServices2: {
    animation: `$myEffectCard-service 2000ms`,
    width: "314px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    borderRadius: "14px",
    [theme.breakpoints.between(1951, 4000)]: {
      width: "500px",
      height: "fit-content",
      minHeight: "197px",
    },
    [theme.breakpoints.between(1281, 1950)]: {
      width: "350px",
      height: "fit-content",
      minHeight: "197px",
    },
    [theme.breakpoints.between(961, 1280)]: {
      width: "300px",
      height: "fit-content",
      minHeight: "170px",
    },
    [theme.breakpoints.between(377, 960)]: {
      width: "270px",
      height: "fit-content",
      minHeight: "150px",
    },
    [theme.breakpoints.between(0, 376)]: {
      width: "240px",
      height: "fit-content",
      minHeight: "100px",
    },
  },
  "@keyframes myEffectosCard-container": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
  cardContainerHome2: {
    animation: `myEffectosCard-container 2000ms`,
    backgroundColor: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    borderRadius: "14px",
    display: "flex",
    flexDirection: "column",
    height: "185px",
    width: "314px",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
    [theme.breakpoints.between(1951, 4000)]: {
      width: "500px",
      height: "auto",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    [theme.breakpoints.between(1281, 1950)]: {
      width: "350px",
      height: "auto",
    },
    [theme.breakpoints.between(377, 1280)]: {
      width: "270px",
      height: "150px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    [theme.breakpoints.between(0, 376)]: {
      width: "240px",
      height: "130px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  cardContentHome: {
    width: "314px",
    height: "185px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    [theme.breakpoints.between(1281, 4000)]: {
      width: "314px",
      height: "185px",
    },
    [theme.breakpoints.between(376, 1280)]: {
      width: "250px",
      height: "150px",
    },
    [theme.breakpoints.between(0, 375)]: {
      width: "240px",
      height: "130px",
    },
  },
  containerWhiteComponent: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: "10px",
    [theme.breakpoints.between(601, 959)]: {
      height: "auto",
      marginTop: "30px",
      width: "80%",
    },
    [theme.breakpoints.between(0, 600)]: {
      flexDirection: "row",
      width: "80%",
      marginTop: "10px",
    },
  },
  containerWhiteComponentRoadMap: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",

    [theme.breakpoints.between("lg", "xl")]: {
      paddingTop: "50px",
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: "32px",
    },
    [theme.breakpoints.up("xxl")]: {
      paddingTop: "60px",
    },
  },
  textContainerWhiteComponentRoadMap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "58%",
    whiteSpace: "pre-line",
    marginLeft: "20px",
    [theme.breakpoints.between("lg", "xl")]: {
      width: "55%",
    },
  },
  textContainerWhiteComponent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "45%",
    whiteSpace: "pre-line",
    marginLeft: "20px",
    [theme.breakpoints.between(1920, 4000)]: {
      marginTop: "9px",
      marginBottom: "9px",
      width: "40%",
    },
    [theme.breakpoints.between(0, 960)]: {
      marginTop: "9px",
      marginBottom: "9px",
      marginLeft: "10px",
      width: "40%",
      gap: "14px",
    },
  },
  titleCard: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    width: "150px",
    fontSize: "28px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#193174",
    marginTop: "10px",
    [theme.breakpoints.between(1920, 4000)]: {
      width: "100%",
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(960, 1919)]: {
      width: "220px",
      fontSize: "20px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(0, 959)]: {
      width: "220px",
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  "@keyframes myEffect-title": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  titleCard2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    width: "150px",
    fontSize: "28px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#193174",
    marginTop: "10px",
    [theme.breakpoints.between(1920, 4000)]: {
      width: "100%",
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(960, 1919)]: {
      width: "100%",
      fontSize: "20px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(0, 959)]: {
      width: "220px",
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  "@keyframes myEffect-title": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  titleBlue: {
    animation: `myEffect-title 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "45px",
    textAlign: "center",
    color: "#193173",
    [theme.breakpoints.between(1920, 4000)]: {
      fontSize: "40px",
      lineHeight: "45px",
    },
    [theme.breakpoints.between(960, 1919)]: {
      fontSize: "35px",
      lineHeight: "38px",
    },
    [theme.breakpoints.between(0, 959)]: {
      fontSize: "25px",
      lineHeight: "28px",
    },
  },

  titleWhite: {
    animation: `myEffect-title 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.between(1920, 4000)]: {
      fontSize: "40px",
      lineHeight: "38px",
    },
    [theme.breakpoints.between(960, 1919)]: {
      fontSize: "35px",
      lineHeight: "32px",
    },
    [theme.breakpoints.between(0, 959)]: {
      fontSize: "22px",
      lineHeight: "22px",
    },
  },

  "@keyframes myEffectbutton": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },

  buttonComponent: {
    animation: `myEffectbutton 2000ms`,
    background: "#797EF6",
    borderRadius: "100px",
    "&:hover": {
      backgroundColor: "#27AAE1",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.between(1920, 4000)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "17px",
        lineHeight: "10px",
        padding: "15px 17px 15px 17px",
      },
    },
    [theme.breakpoints.between(960, 1919)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "15px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
    [theme.breakpoints.between(0, 959)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
  },

  buttonComponentContinueReading: {
    animation: `myEffectbutton 2000ms`,
    background: "#797EF6",
    borderRadius: "100px",
    "&:hover": {
      backgroundColor: "#27AAE1",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.between(1920, 4000)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "17px",
        lineHeight: "10px",
        padding: "15px 17px 15px 17px",
      },
    },
    [theme.breakpoints.between(960, 1919)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "15px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
    [theme.breakpoints.between(0, 959)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
  },

  "@keyframes myEffect-image-component": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  buttonComponentUserExperience: {
    animation: `myEffectbutton 2000ms`,
    background: "#797EF6",
    borderRadius: "100px",
    "&:hover": {
      backgroundColor: "#27AAE1",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.between(1920, 4000)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "17px",
        lineHeight: "10px",
        padding: "15px 17px 15px 17px",
      },
    },
    [theme.breakpoints.between(960, 1919)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "15px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
    [theme.breakpoints.between(0, 959)]: {
      borderRadius: "100px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
  },

  "@keyframes myEffect-image-component": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },

  image: {
    display: "none",
  },
  imageComponent: {
    animation: `myEffect-image-component 2000ms`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between(1920, 4000)]: {
      width: "100%",
    },
    [theme.breakpoints.between(960, 1919)]: {
      width: "80%",
    },
    [theme.breakpoints.between(0, 959)]: {
      width: "60%",
    },
  },
  TypographyTitleFilter: {
    fontFamily: "Nexa",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#696969",
    padding: "2px 0px",
    textTransform: "capitalize",
  },
  ButtonFilter: {
    backgroundColor: "#FFFFFF",
    gap: "10px",
    borderRadius: "100px",
    [theme.breakpoints.between(481, 1280)]: {
      width: "500px",
    },
    [theme.breakpoints.between(381, 480)]: {
      width: "350px",
    },
    [theme.breakpoints.between(351, 380)]: {
      width: "300px",
    },
    [theme.breakpoints.between(0, 350)]: {
      width: "250px",
    },
  },
  labelSelect: {
    fontFamily: "Nexa Bold",
    fontSize: "18px",
    color: "#27AAE1",
    paddingLeft: "20px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
    },
  },
  buttonClose: {
    display: "flex",
    justifyContent: "flex-end",
  },
  IconButtonFilter: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
  },
  containerFilterDrawer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TypographyFilter: {
    fontFamily: "Nexa Bold",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#696969",
    padding: "2px 0px",
    textTransform: "capitalize",
    margin: "20px",
  },
  buttonShowFilter: {
    backgroundColor: "#797EF6",
    width: "140px",
    height: "45px",
    color: "#FFFFFF",
    fontFamily: "Nexa Bold",
    fontSize: "12px",
    borderRadius: "100px",
  },
  containerGridSwiper: {
    display: "flex",
    width: "100%",
    position: "relative",
    flexDirection: "row",
    height: "auto",
  },
  containerCardSwiper: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    flex: "1 0 40%",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    height: "fit-content",
    maxWidth: "400px",
    [theme.breakpoints.between(2550, 4000)]: {
      gap: "18px",
      maxWidth: "400px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      maxWidth: "380px",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: "auto",
      padding: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "13px",
      maxWidth: "300px",
    },
  },
  imagenContent: {
    objectFit: "contain",
    objectPosition: "center",
  },
}))
