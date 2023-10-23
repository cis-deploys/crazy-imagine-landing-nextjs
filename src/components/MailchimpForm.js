
import React, { useRef } from 'react'
import { Box,  Typography, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next"
import { useIntersection } from "../hooks/useIntersection"
import Swal from "sweetalert2"

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
      [theme.breakpoints.down("xs")]: {
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
      [theme.breakpoints.down("xs")]: {
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
  titleMail: {
    visibility: "hidden",
  },
  titleMail2: {
    animation: `$myEffectTitleMail 2000ms`,
    lineHeight: "40px",    
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "50px",
    marginBottom: "30px",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Nexa Bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      marginBottom: "10px",
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
    marginBottom: "50px",
    textAlign: "center",
    padding: "0 50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      lineHeight: "16px",
      marginBottom: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      lineHeight: "14px",
      marginBottom: "30px",
      padding: "0 15px",
    },
  },
  inputContainer: {
    display: "flex",
    gap: "20px",
    backgroundColor: "white",
    padding: "50px",
    borderRadius: "30px",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      padding: "40px",
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      padding: "30px",
    },
  },
  formButton: {
    padding: "14px 20px 12px 20px",
    margin: "auto",
    marginTop: "23px",
    alignSelf: "flex-start",
    borderRadius: "100px",
    backgroundColor: "#797EF6",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      display: "flex",
      letterSpacing: "0.05em",
      textAlign: "center",
      alignItems: "center",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      color: "#FFFFFF",
      fontFamily: "Nexa Bold",
      lineHeight: "14px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
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
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
    },
  },
  inputShort: {
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  inputLong: {
    width: "520px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  dividerInputs: {
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
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
    const result = await addToMailchimp(e.email, {
      FNAME: e.name,
      LNAME: e.lastName,
    })
    reset()

    if(result.result === "success"){
      Swal.fire(
        t("home_mailchimp_swalSuccess_title"),
        t("home_mailchimp_swalSuccess_text"),
        "success"
      )
    }else{
      Swal.fire({
        icon: "error",
        title: t("home_contacSection_contactForm_swalError_title"),
        text: t("home_contacSection_contactForm_swalError_text"),
      })
    }
  }

  return (
    <Box ref={ref} className={classes.containerForm}>
        <Typography className={isVisible ? classes.titleMail2 : classes.titleMail}>
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
          />
          <Button
            type="submit"
            className={classes.formButton}
          >
            <span>{t("home_mailChimp_button")}</span>
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default MailchimpForm