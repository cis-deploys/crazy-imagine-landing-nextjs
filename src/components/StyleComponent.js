import { makeStyles } from "@mui/styles"

export const StyleComponent = makeStyles((theme) => ({

    "@keyframes myEffectCard-service": {
        "0%": {
          opacity: 0 ,
          transform: "translateY(200%)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
        }
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
        [theme.breakpoints.between(1951, 3000)]: {
          width: "500px",
          height: "fit-content",
          minHeight: "197px",
        },
        [theme.breakpoints.between(1281, 1950)]: {
          width: "350px" ,
          height: "fit-content",
          minHeight: "197px",
        },
        [theme.breakpoints.between(961, 1280)]: {
          width: "300px",
          height: "fit-content",
          minHeight: "170px",
        },
        [theme.breakpoints.between(451, 960)]: {
          width: "270px",
          height: "fit-content",
          minHeight: "150px",
        },
        [theme.breakpoints.between(0, 450)]: {
          width: "240px",
          height: "fit-content",
          minHeight: "100px",
        }
      },
      "@keyframes myEffectosCard-container": {
        "0%": {
          opacity: 0 ,
        },
        "50%": {
          opacity: 0.5 ,
        },
        "100%": {
          opacity: 1 ,
        }
      },
        cardContainerHome2: {
        animation: `myEffectosCard-container 2000ms`,
        backgroundColor: "#FFFFFF",
        boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
        borderRadius: "14px",
        display: "flex" ,
        flexDirection: "column",
        height: "185px",
        width: "314px",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        [theme.breakpoints.between(1951, 3000)]: {
          width: "500px",
          height: "auto",
          paddingLeft: "10px",
          paddingRight: "10px",
        },
        [theme.breakpoints.between(1281, 1950)]: {
          width: "350px",
          height: "auto",
        },
        [theme.breakpoints.between(376, 1280)]: {
          width: "270px",
          height: "150px",
          paddingLeft: "10px",
          paddingRight: "10px",
        },
        [theme.breakpoints.between(0, 375)]: {
          width: "240px",
          height: "130px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }
      },
      cardContentHome: {
        width: "314px",
        height: "185px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        [theme.breakpoints.between(1281, 3000)]: {
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
        }
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
      textContainerWhiteComponent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "20px",
        width: "45%",
        whiteSpace: "pre-line",
        marginLeft: "20px",
        [theme.breakpoints.between(1920, 3000)]: {
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
        }
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
        [theme.breakpoints.between(1920, 3000)]: {
          width: "220px",
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
        }
      },
      "@keyframes myEffect-title": {
       "0%": {
          opacity: 0 ,
          transform: "translateY(-200%)",
        },
        "100%": {
          opacity: 1 ,
          transform: "translateY(0)",
        }
      },
    titleBlue: {
        animation: `myEffect-title 2000ms`,
        fontFamily: "Nexa Bold",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "40px",
        lineHeight: "40px",
        marginTop: "20px",
        textAlign: "center",
        color: "#193173",
        [theme.breakpoints.between(1920, 3000)]: {
          fontSize: "40px",
          lineHeight: "38px",
        },
        [theme.breakpoints.between(960, 1919)]: {
          fontSize: "35px",
          lineHeight: "32px",
        },
        [theme.breakpoints.between(0, 959)]: {
          fontSize: "25px",
          lineHeight: "28px",
        }
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
        [theme.breakpoints.between(1920, 3000)]: {
            fontSize: "40px",
            lineHeight: "38px",
        },
        [theme.breakpoints.between(960, 1919)]: {
            fontSize: "35px",
            lineHeight: "32px",
        },
        [theme.breakpoints.between(0, 959)]: {
            fontSize: "25px",
            lineHeight: "28px",
        }
      },
      
      "@keyframes myEffectbutton": {
        "0%": {
          opacity: 0 ,
          transform: "translateY(200%)",
        },
        "100%": {
          opacity: 1 ,
          transform: "translateY(0)",
        }
      },
      
      buttonComponent: {
        animation: `myEffectbutton 2000ms`,
        background: "#797EF6",
        borderRadius: "100px",
        marginBottom: "87px",
        marginTop: "48px",
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
        [theme.breakpoints.between(1920, 3000)]: {
          marginBottom: "61px",
          marginTop: "10px",
          borderRadius: "100px",
          "& > span":  {
              fontSize: "25px",
              lineHeight: "20px",
              padding: "20px 25px 20px 25px",
            }
        },
        [theme.breakpoints.between(960, 1919)]: {
            marginBottom: "61px",
            marginTop: "34px",
            borderRadius: "100px",
            "& > span": {
              fontSize: "15px",
              lineHeight: "14px",
              padding: "10px 14px 8px 14px",
            }
        },
        [theme.breakpoints.between(0, 959)]: {
          marginBottom: "20px",
          marginTop: "24px",
          borderRadius: "100px",
          "& > span": {
            fontSize: "10px",
            lineHeight: "14px",
            padding: "10px 14px 8px 14px",
          }
        }
      },
      
      "@keyframes myEffect-image-component": {
        "0%": {
          opacity: 0 ,
          transform: "translateX(-200%)",
        },
        "100%": {
          opacity: 1 ,
          transform: "translateX(0)",
        }
      },
      
      image: {
        display: "none"
      },
      imageComponent: {
        animation: `myEffect-image-component 2000ms`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.between(1920, 3000)]: {
          width: "100%",
        },
        [theme.breakpoints.between(960, 1919)]: {
          width: "80%",
        },
        [theme.breakpoints.between(0, 959)]: {
          width: "60%",
        }
      }
}));
