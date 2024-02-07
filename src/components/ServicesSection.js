import React, { useState } from "react";
import { Box } from "@mui/material";
import { useTranslation } from 'next-i18next'
import { makeStyles } from "@mui/styles"
import CardService from "./CardService";
import ServiceCapabilities from "./ServiceCapabilities";
import fullStackImage from "../../public/laptop-purple.webp";
import qualitySupport from "../../public/quality-blue.webp";
import userExperience from "../../public/user_experience.webp";
import {
  faBagShopping,
  faChartBar,
  faCircleCheck,
  faMobile,
  faCode,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '20px',
      height: 'auto',
      paddingTop: 'auto',
      [theme.breakpoints.between(0, 767)]: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: 'center',
        width: "100%",
      },
    },
    card: {
      height: 'min-content !important'
    },
}));

const ServicesSection = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [card1Open, setCard1Open] = useState(false);
  const [card2Open, setCard2Open] = useState(false);
  const [card3Open, setCard3Open] = useState(false);


  return (
    <>
      <Box className={`${classes.container}`}>
        <ServiceCapabilities
          title={t("common_capabilities_title1")}
          desc={t("common_capabilities_description1")}
          img={fullStackImage}
        />
        <Box className={`${classes.cardContainer}`}>
          <CardService
            title={t("common_capabilities_capabilitiesCard_title1")}
            icon={faCode}
            contentList={[
              t("services_capabilities_capabilitiesCard_description1_item1"),
              t("services_capabilities_capabilitiesCard_description1_item2"),
              t("services_capabilities_capabilitiesCard_description1_item3"),
            ]}
            isOpen={card1Open} 
            onClick={() => setCard1Open(!card1Open)} 
          />
          <CardService
            className={`${classes.card}`}
            title={t("common_capabilities_capabilitiesCard_title2")}
            icon={faCircleCheck}
            contentList={[
              t("services_capabilities_capabilitiesCard_description2_item1"),
              t("services_capabilities_capabilitiesCard_description2_item2"),
              t("services_capabilities_capabilitiesCard_description2_item3"),
            ]}
            isOpen={card2Open} 
            onClick={() => setCard2Open(!card2Open)}
          />
          
        </Box>
      </Box>
      <Box className={`${classes.container}`}>
        <ServiceCapabilities
          title={t("common_capabilities_title2")}
          desc={t("common_capabilities_description2")}
          img={userExperience}
        />
        <Box className={`${classes.cardContainer}`}>
          <CardService 
            title={t("common_capabilities_capabilitiesCard_title3")}
            icon={faBagShopping}
            contentList={[
              t("services_capabilities_capabilitiesCard_description3_item1"),
              t("services_capabilities_capabilitiesCard_description3_item2"),
              t("services_capabilities_capabilitiesCard_description3_item3"),
            ]}
            isOpen={card3Open} 
            onClick={() => setCard3Open(!card3Open)} 
          />
          <CardService
            title={t("services_capabilities_capabilitiesCard_title4")}
            icon={faMobile}
            contentList={[
              t("services_capabilities_capabilitiesCard_description4_item1"),
              t("services_capabilities_capabilitiesCard_description4_item2"),
              t("services_capabilities_capabilitiesCard_description4_item3"),
            ]}
          />
        </Box>
      </Box>
      <Box className={`${classes.container} ${classes.bgWhite}`}>
        <ServiceCapabilities
          title={t("common_capabilities_title3")}
          desc={t("common_capabilities_description3")}
          img={qualitySupport}
        />
        <Box className={`${classes.cardContainer} ${classes.pMajor}`}>
          <CardService
            title={t("common_capabilities_capabilitiesCard_title5")}
            icon={faChartBar}
            contentList={[
              t("services_capabilities_capabilitiesCard_description5_item1"),
              t("services_capabilities_capabilitiesCard_description5_item2"),
              t("services_capabilities_capabilitiesCard_description5_item3"),
            ]}
          />
          <CardService
            title={t("common_capabilities_capabilitiesCard_title6")}
            icon={faUserTie}
            contentList={[
              t("services_capabilities_capabilitiesCard_description6_item1"),
              t("services_capabilities_capabilitiesCard_description6_item2"),
            ]}
          />
        </Box>
      </Box>
    </>
  )
}

export default ServicesSection
