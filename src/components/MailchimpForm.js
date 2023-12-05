
import React, { useRef } from 'react'
import { Box,  Typography, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next"
import { useIntersection } from "../hooks/useIntersection"
import Swal from "sweetalert2"
import axios from "axios"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    "& .MuiFormLabel-root": {
      lineHeight: "140%",
      fontFamily: "HindVadodara",
      fontWeight: "400",
      fontSize: "14px",
      color: "#193173",
      fontStyle: "normal",
      [theme.breakpoints.up("lg")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px #D6D6D6 solid !important",
    },
    
    "& .MuiTypography-body1": {
      fontSize: "13px",
      fontStyle: "italic",
      color: "#193173",
      lineHeight: "140%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
      fontFamily: "HindVadodara",
      fontWeight: "400",
    },
    "& .MuiSvgIcon-root": {
      background: "transparent",
      borderRadius: "2px",
      color: "#797EF6",
      
    },
  },
  subTitleMail: {
    visibility: "hidden",
  },
  subTitleMail2: {
    animation: `$myEffectSubTitleMail 2000ms`,
    color: "#FFFFFF",
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontSize: "19px",
    fontWeight: "400",
    lineHeight: "18px",    
    marginBottom: "40px",
    textAlign: "center",
    padding: "10px 40px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      lineHeight: "20px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "16px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "14px",
      marginBottom: "10px",
    },
  },
  inputContainer: {
    display: "flex",
    gap: "20px",
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "30px",
    flexDirection: "column",
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      margin: "auto",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
      padding: "40px",
      margin: "auto",
      flexDirection: "column"
    },
    [theme.breakpoints.between(376, 450)]: {
      width: "auto",
      padding: "70px",
      flexDirection: "column",
      height: "370px"
    },
    [theme.breakpoints.between(326, 376)]: {
      width: "auto",
      padding: "50px",
      flexDirection: "column",
      height: "350px"
    },
    [theme.breakpoints.between(0, 325)]: {
      width: "auto",
      padding: "30px",
      flexDirection: "column",
      height: "320px"
    },
  },

  containerForm: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "50px 0",
    backgroundImage: `url('/background.svg')`,
    backgroundSize: "cover",
    backgroundRepeat: "norepeat",
    backgroundPosition: "center",
    overflow: "hidden",
    [theme.breakpoints.up("xl")]: {
      width: "auto",
      height: "auto",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
      flexDirection: "column",
    },
  },
  inputShort: {
    width: "250px",
    display: "flex",
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      flexDirection: "column"
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column"
    },
  },
  inputLong: {
    width: "520px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      flexDirection: "column"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column"
    },
  },
  dividerInputs: {
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sx")]: {
      width: "auto",
      flexDirection: "column",
    },
  },
  "@keyframes myEffectTitleMail": {
    "0%": {
      transform: "translateY(-200%)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  "@keyframes myEffectSubTitleMail": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}))

const MailchimpForm = () => {
    const ref = useRef()
    const isVisible = useIntersection(ref, "0px")
    const { t } = useTranslation();
    const classes = useStyles({})
    const schema = yup.object().shape({
        name: yup.string().required(t("home_contacSection_contactForm_schemaYup_name")),
        email: yup.string().email(t("home_contacSection_contactForm_schemaYup_email1")).required(t("home_contacSection_contactForm_schemaYup_email2")),
        lastName: yup.string().required(t("workWithUs_workForm_schemaYup_lastName")),
      })
      const {
        formState: { errors },
        handleSubmit,
        register, 
        reset,
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
      })
      
  
  const submit = async (e) => {
    const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
    await axios.post(`${domain}mailchimps`, {
      "data":{
        email: e.email,
        name:  e.name,
        lastname: e.lastName,
      }
    })
    .then(({ data }) => {

      Swal.fire(
        t("home_mailchimp_swalSuccess_title"),
        t("home_mailchimp_swalSuccess_text"),
        "success"
      
        )
    })
    .catch(error => {
      Swal.fire({
        icon: "error",
        title: t("home_contacSection_contactForm_swalError_title"),
        text: t("home_contacSection_contactForm_swalError_text"),
      })

    });
    reset()
  }

  return (
    <Box className={classes.containerForm}>
        <Typography className={'title-white'}>
          {t("home_mailChimp_title")}
        </Typography>
        <Typography className={isVisible ? classes.subTitleMail2 : classes.subTitleMail}>
          {t("home_mailChimp_subTitle")}
        </Typography>
      <form onSubmit={handleSubmit(submit)}>
        <Box className={classes.inputContainer}>
          <Box className={classes.dividerInputs}>
            <TextField
              id="name"
              name="name"
              required
              label={t("home_contacSection_contactForm_textField_label1")}
              className={`${classes.inputShort} ${classes.root} `}
              {...register("name")}
              error={errors.name}
              helperText={errors.name?.message}
              variant="standard"
            />
            <TextField
              id="lastName"
              name="lastName"
              required
              label={t("workWithUs_workForm_textField_label2")}
              className={`${classes.inputShort} ${classes.root} `}
              {...register("lastName")}
              error={errors.lastName}
              helperText={errors.lastName?.message}
              variant="standard"
            />
          </Box>
          <TextField
            id="email"
            type="email"
            name="email"
            required
            className={`${classes.inputLong} ${classes.root}`}
            label={t("home_contacSection_contactForm_textField_label3")}
            error={errors.email}
            {...register("email")}
            helperText={errors.email?.message}
            variant="standard"
          />
          <a style={{ textDecoration: "none", alignSelf: "center", marginBottom: "5px" }}>
          <Button
            type="submit"
            className={'button-component'}
          >
            <span>{t("home_mailChimp_button")}</span>
          </Button>
          </a>
        </Box>
      </form>
    </Box>
  )
}

export default MailchimpForm
