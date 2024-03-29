import React, { useRef, useState } from "react"
import Swal from "sweetalert2"
import { makeStyles } from "@mui/styles";
import { Box,  Grid, Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from 'next-i18next'
import { StyleComponent } from "./StyleComponent"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiFormLabel-root": {
      fontFamily: "HindVadodara",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "15px",
      lineHeight: "140%",
      color: "#193173", 
      [theme.breakpoints.up("xl")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px #D6D6D6 solid !important",
    },
    "& .MuiSvgIcon-root": {
      background: "transparent",
      color: "#797EF6",
      borderRadius: "2px",
    },
    "& .MuiTypography-body1": {
      fontFamily: "HindVadodara",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.up("xl")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "13px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  formControlLabel:{
    "& .MuiFormControl-root": {
      fontFamily: "HindVadodara",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "10px",
      },
    },
  },

  selectEmpty: {
    width: "100%",
    color: "#193173",
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "HindVadodara",
    letterSpacing: "0.1em",
    lineHeight: "140%",
    textAlign: "left",
    "& .MuiInput-underline:before": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      width: "100%",
    },
    "& svg": {
      backgroung: "transparent",
    },
  },

  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "30px",
    paddingBottom: "40px",
    width: "100%",
    maxWidth: "1000px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10px 20px 10px",
      marginTop: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px 0px 10px 0px",
      marginTop: "30px",
    },
  },
  item: {
    color: "#193173",
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "HindVadodara",
    letterSpacing: "0.1em",
    lineHeight: "140%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  formCheck: {
    background: "#E8E8E8",
    border: "1px solid #797EF6",
    boxSizing: "border-box",
    borderRadius: "2px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  snackColor: {
    fontSize: "bold",
    backgroundColor: "white !important",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
}))

const ContactForm = () => {
  const classes = useStyles({})
  const classesComponent = StyleComponent()
  const form = useRef();
  const { t } = useTranslation("common")
  const [typeProject, setTypeProject] = useState("")
  const [findUs, setFindUs] = useState("")
  const schema = yup.object().shape({
    name: yup.string().required(t("home_contacSection_contactForm_schemaYup_name")),
    email: yup.string().email(t("home_contacSection_contactForm_schemaYup_email1")).required(t("home_contacSection_contactForm_schemaYup_email2")),
    company: yup.string(),
    country: yup.string(),
    phone: yup
      .string()
      .matches(/^(?:[0-9+\-().\s]{10,20})?$/, t("workWithUs_workForm_schemaYup_phone2")),
    comments: yup.string().required(t("home_contacSection_contactForm_schemaYup_comments")),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const sendEmail = (e) => {
    const userEmail = {
      ...e,
      typeProject,
      findUs,
    };
    emailjs.send('service_idrfktg', 'template_d6gox3w', userEmail, 'barMeaEdxx4emnNzc')
      .then((result) => {
        Swal.fire(
          t("home_contacSection_contactForm_swalSuccess_title"),
          t("home_contacSection_contactForm_swalSuccess_text"),
          "success"
        )
        for (const formu of document.getElementsByTagName("form")) {
          formu.reset()
        }
        //reset()
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: t("home_contacSection_contactForm_swalError_title"),
          text: t("home_contacSection_contactForm_swalError_text"),
        })
      });
  };

  const handleChangeTypeProject = (event) => {
    setTypeProject(event.target.value);
  };
  const handleChangeFindUs = (event) => {
    setFindUs(event.target.value);
  };

  return (
    <>
    
    <Box className={classes.formContainer}>
      <form ref={form} noValidate autoComplete="off" onSubmit={handleSubmit(sendEmail)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              required
              label={t("home_contacSection_contactForm_textField_label1")}
              className={`${classes.root} `}
              {...register("name")}
              error={errors.name}
              helperText={errors.name?.message}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="company"
              name="company"
              label={t("home_contacSection_contactForm_textField_label2")}
              className={`${classes.root} `}
              {...register("company")}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="country"
              name="country"
              label={t("home_contacSection_contactForm_textField_label5")}
              className={`${classes.root} `}
              {...register("country")}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label={t("home_contacSection_contactForm_textField_label6")}
              className={`${classes.root} `}
              {...register("phone")}
              error={errors.phone}
              helperText={errors.phone?.message}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth 
              id="email"
              type="email"
              name="email"
              className={`${classes.root}`}
              required
              label={t("home_contacSection_contactForm_textField_label3")}
              error={errors.email}
              {...register("email")}
              helperText={errors.email?.message}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="comments"
              name="comments"
              label={t("home_contacSection_contactForm_textField_label4")}
              required
              className={`${classes.root}`}
              {...register("comments")}
              error={errors.comments}
              helperText={errors.comments?.message}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth className= {`${classes.formControlLabel} ${classes.root}`}>
              <InputLabel id="demo-simple-select-helper-label">{t("home_contacSection_contactForm_Select_label")}</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                className={classes.selectEmpty}
                value={typeProject}
                onChange={handleChangeTypeProject}
                variant="standard"
              >
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label_MenuItem")}>{t("home_contacSection_contactForm_Select_label_MenuItem")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label_MenuItem1")}>{t("home_contacSection_contactForm_Select_label_MenuItem1")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label_MenuItem2")}>{t("home_contacSection_contactForm_Select_label_MenuItem2")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label_MenuItem3")}>{t("home_contacSection_contactForm_Select_label_MenuItem3")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_MenuItem_Common")}>{t("home_contacSection_contactForm_Select_MenuItem_Common")}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth className= {`${classes.formControlLabel} ${classes.root}`}>
              <InputLabel>{t("home_contacSection_contactForm_Select_label1")}</InputLabel>
              <Select
                className={classes.selectEmpty}
                value={findUs}
                onChange={handleChangeFindUs}
                variant="standard"
              >
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem")}>{t("home_contacSection_contactForm_Select_label1_MenuItem")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem1")}>{t("home_contacSection_contactForm_Select_label1_MenuItem1")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem2")}>{t("home_contacSection_contactForm_Select_label1_MenuItem2")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem3")}>{t("home_contacSection_contactForm_Select_label1_MenuItem3")}</MenuItem>
                <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_MenuItem_Common")}>{t("home_contacSection_contactForm_Select_MenuItem_Common")}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label={t("home_contacSection_contactForm_formControlLabel_checkbox_label")}
              className={classes.root}
              labelPlacement="end"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classesComponent.buttonComponent}
              type="submit"
            >
            <span>{t("common_button_contact_SUBMIT")}</span>
            </Button>
          </Grid>
        </Grid>
      </form> 
    </Box>
    </>
    
  )
  
}

export default ContactForm
