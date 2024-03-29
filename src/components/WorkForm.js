import * as React from "react"
import { useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import axios from "axios"
import * as yup from "yup"
import Swal from "sweetalert2"
import { Box,  Input, Typography, Select, MenuItem, InputLabel, Alert, Button } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useTranslation } from 'next-i18next'
import TextField from "@mui/material/TextField"
import { yupResolver } from "@hookform/resolvers/yup"
import WorkInfo from "../components/WorkInfo"
import emailjs from '@emailjs/browser';
import { StyleComponent } from "./StyleComponent"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTypography-root": {
      fontFamily: "HindVadodara",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.up("xl")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
     "& .MuiTypography-body1": {
      fontFamily: "HindVadodara",
      fontStyle: "italic",
      fontWeight: "400",
      fontSize: "13px",
      lineHeight: "140%",
      color: "#193173",
      [theme.breakpoints.up("xl")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },
    "& .MuiFormLabel-root": {
      fontFamily: "HindVadodara",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "140%",
      color: "#193173",
        [theme.breakpoints.up("xl")]: {
          fontSize: "18px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "12px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "10px",
        },
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px #D6D6D6 solid !important",
    },
    "& .MuiSvgIcon-root": {
      background: "#E8E8E8",
      color: "#797EF6",
      borderRadius: "2px",
    },
    "& .MuiInputBase-input": {
      [theme.breakpoints.between(0, 600)]: {
        margin: "3px",
      },
    },
    "& .MuiFormHelperText-root.Mui-error": {
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "8px",
      },
    },
  },
  limitMessage: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    color: "#193173",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
  },
  selectEmpty: {
    width: "520px",
    marginLeft: 40,
    marginRight: 40,
    marginBottom: "40px",
    "& .MuiSelect-select": {
    fontSize: "16px", 
  },
    [theme.breakpoints.down("md")]: {
      "& .MuiSelect-select": {      
          fontSize: "12px",
        },
      width: "364px",
      margin: "30px 30px 30px 30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "226px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "189px",
    },
    color: "#193173",
    fontWeight: "400",
    fontFamily: "HindVadodara",
    "& .MuiInput-underline:before": {
      backgroundColor: "transparent",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
    "& svg": {
      //display: "none",
      backgroung: "transparent",
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
  curriculumAlert: {
    paddingLeft: "30px",
    backgroundColor: "transparent",
    color: "#F44336",
    marginTop: "5px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    alignSelf: "flex-start",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "140%",
    [theme.breakpoints.down("md")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
    },
    "& .MuiAlert-icon": {
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: "auto",
    alignItems: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    gap: "93px",
    [theme.breakpoints.down("md")]: {
      gap: "25px",
      flexDirection: "row",
      alignItems: "flex-start",
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      gap: "40px",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  formContainer2: {
    animation: `$myEffect 2000ms`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "rgba(235, 235, 235, 0.6)",
    marginTop: "94px",
    marginBottom: "94px",
    borderRadius: "14px 14px 14px 14px",
    [theme.breakpoints.down("md")]: {
      marginTop: "66px",
      padding: "5px",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
      marginTop: "0px",
      padding: "4px",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  containerInfo: {
    width: "fit-content",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  containerImage: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  container1: {
    //overflow: "hidden",
  },
  attachContainer: {
    width: "87%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "78%",
    },
  },
  attach: {
    display: "flex",
    height: "180px",
    width: "300px",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: "14px",
    marginTop: "20px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
      height: "90px",
      width: "100px",
    },
  },
  attachLabel: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    marginTop: "43px",
    marginBottom: "5px",
    color: "#193173",
    [theme.breakpoints.down("md")]: {
      marginTop: "15px",
      fontSize: "10px",
      marginBottom: "10px",
    },
  },
  attachButton: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "140%",
    color: "#193173",
    cursor: "pointer",
    marginBottom: "5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "100%",
    },
  },
  selectLabel: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "140%",
    marginTop: "43px",
    marginBottom: "15px",
    textAlign: "left",
    color: "#193173",
    [theme.breakpoints.down("md")]: {
      marginTop: "15px",
      fontSize: "10px",
      marginBottom: "10px",
    },
  },
  formInput: {
    height: 1,
    width: "520px",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 35,
    marginBottom: 40,
    [theme.breakpoints.down("md")]: {
      width: "364px",
      margin: "30px 30px 30px 30px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "226px",
    },
  },
  shortInput: {
    display: "fit-content",
    height: 1,
    width: "250px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "170px",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "104px",
      alignItems: "center",
    },
  },
  shortContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginTop: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "30px",
    },
  },
  formButton: {
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    marginTop: "18px",
    marginBottom: "37px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "16px",
      marginBottom: "25px",
      padding: "10px 14px 8px 14px",
      "& > span": {
        fontSize: "15px",
        lineHeight: "10px",
      },
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "16px",
      marginBottom: "25px",
      padding: "10px 14px 8px 14px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
  },
  actionPadding: {
    padding: 4,
  },
  formAnimation: {
    //animation: `$fadeIn ease 3000ms`,
  },
  successfullAlert: {
    backgroundColor: "transparent",
    width: "80%",
    marginTop: "5px",
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  uploadAlert: {
    backgroundColor: "transparent",
    padding: "0px",
    marginTop: "5px",
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  }
}))

const WorkForm = () => {
  const classes = useStyles()
  const classesComponent = StyleComponent()
  const { t } = useTranslation("common")
  const [fileIsLoaded, setFileIsLoaded] = useState(false)
  const [formStatus, setFormStatus] = useState("")
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formStatus === "well") {
        setFormStatus("")
      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [formStatus])  

  const schema = yup.object().shape({
    firstName: yup.string().required(t("workWithUs_workForm_schemaYup_firstName")),
    lastName: yup.string().required(t("workWithUs_workForm_schemaYup_lastName")),
    email: yup.string().email(t("home_contacSection_contactForm_schemaYup_email1")).required(t("home_contacSection_contactForm_schemaYup_email2")),
    phone: yup.string().matches(/^[a-zA-Z0-9\-().\s]{10,15}$/, t("workWithUs_workForm_schemaYup_phone2")).required(t("workWithUs_workForm_schemaYup_phone")),
    linkedin: yup.string(),
    website: yup.string().url(),
    curriculum: yup.mixed().test('fileSize', (t("workWithUs_workForm_schemaYup_curriculum5")), (value) => {
      if (!value) return true;
      return value && value[0] && value[0].size <= 2097152;
    }).test('type', t("workWithUs_workForm_schemaYup_curriculum3"), (value) => {
      if (!value) return true;
      const allowedTypes = ['image/jpg', 'image/jpeg', 'application/pdf', 'application/msword'];
      return typeof value === 'object' && value[0]?.type && ('application/pdf' === value[0].type || 'application/msword' === value[0].type || 'image/jpeg' === value[0].type || 'image/jpg' === value[0].type);
    }),
    reference: yup.string(),
  });
              
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const watchCurriculum = watch("curriculum");

  useEffect(() => {
    if (watchCurriculum?.length > 0 && ('application/pdf' === watchCurriculum[0].type || 'application/msword' === watchCurriculum[0].type || 'image/jpeg' === watchCurriculum[0].type || 'image/jpg' === watchCurriculum[0].type) && watchCurriculum[0].size <= 2097152) {
      setFileIsLoaded(true)
    } else {
      setFileIsLoaded(false)
    }
  }, [watchCurriculum])

  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL;
  const domainurl = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

  const onSubmitHandler = async(formData) => {
    const { firstName, lastName, email, phone, linkedin, website, reference, curriculum } = formData;
    // const cvurl = curriculum.url;

    if (curriculum?.length === 1) {
      setShowButton(true)

      const formData = new FormData()
      formData.append("files", curriculum[0])
      axios
        .post(`${domain}upload`, formData, { headers: '*' })
        .then(async response => {
          const file = response.data[0].id;
          const cvurl = response.data[0].url;
          
          const sendData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            linkedin: linkedin,
            website: website,
            reference: reference,
            curriculum: file,
          }
          const res = await axios.post(`${domain}curriculums`, { data: sendData })
        
          if (res.status === 200) {
            setFormStatus("well")
            setShowButton(false)
            setFileIsLoaded(false)

            const userEmail = {
              name: firstName,
              lastname: lastName,
              email: email,
              phone: phone,
              linkedin: linkedin,
              website: website,
              reference: reference,
              file: cvurl,//`${domainurl}${cvurl}`,
            }

            emailjs.send('service_idrfktg', 'template_96fwtyn', userEmail, 'barMeaEdxx4emnNzc')
            .then((result) => {

            }, (error) => {

            });

            Swal.fire(
            t("home_contacSection_contactForm_swalSuccess_title"),
            t("workWithUs_workForm_submit_success"),
            "success"
            )
            reset()
          }
        })
        .catch(error => {
          setFormStatus("bad")
          setShowButton(false)
          Swal.fire({
          icon: "error",
          title: t("home_contacSection_contactForm_swalError_title"),
          text: t("workWithUs_workForm_submit_error"),
        })
        })
    } else {
      if (data.website !== "") {
        const sendData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          linkedin: data.linkedin,
          website: data.website,
          reference: data.reference,
        }
        const res = await axios.post(`${domain}curriculums`, { data: sendData });

        if (res.status === 200) {
          setFormStatus("well")
          setFileIsLoaded(false)
          setShowButton(false)

          const userEmail = {
            name: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            linkedin: linkedin,
            website: website,
            reference: reference,
            file: '',
          }

          emailjs.send('service_idrfktg', 'template_96fwtyn', userEmail, 'barMeaEdxx4emnNzc')
          .then((result) => {

          }, (error) => {

          });

          Swal.fire(
          t("home_contacSection_contactForm_swalSuccess_title"),
          t("workWithUs_workForm_submit_success"),
          "success"
          )
          reset()
        } else {
          setFormStatus("bad")
          setShowButton(false)
          Swal.fire({
          icon: "error",
          title: t("home_contacSection_contactForm_swalError_title"),
          text: t("workWithUs_workForm_submit_error"),
        })
        }
      }
    }
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.containerInfo}>
        <WorkInfo />
      </Box>
      <Box className={classes.container1}>
        <Box
          style={{
            width: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          alignSelf="center"
        ></Box>
        <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
          <Box
            className={classes.formContainer2}
          >
            <Box className={classes.shortContainer}>
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                {...register("firstName")}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label1")}
                name="firstName"
                variant="standard"
              />
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                {...register("lastName")}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label2")}
                name="lastName"
                variant="standard"
              />
            </Box>
            <Box className={classes.shortContainer}>
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                error={!!errors.email}
                {...register("email")}
                helperText={errors.email?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label3")}
                name="email"
                variant="standard"
              />
              <TextField
                required
                className={`${classes.shortInput} ${classes.root}`}
                error={!!errors.phone}
                {...register("phone")}
                helperText={errors.phone?.message}
                type="text"
                id="outlined-basic"
                label={t("workWithUs_workForm_textField_label4")}
                name="phone"
                variant="standard"
              />
            </Box>
            <TextField
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.linkedin?.message}
              error={!!errors.linkedin}
              {...register("linkedin")}
              type="text"
              id="outlined-basic"
              label={t("workWithUs_workForm_textField_label5")}
              name="linkedin"
              variant="standard"
            />
            <TextField
              className={`${classes.formInput} ${classes.root}`}
              helperText={errors.website?.message}
              error={!!errors.website}
              {...register("website")}
              type="text"
              id="outlined-basic"
              label={t("workWithUs_workForm_textField_label6")}
              name="website"
              variant="standard"
            />
            <Box className={classes.attachContainer}>
              <Box className={classes.attach}>
                <span className={classes.attachLabel}>
                  {t("workWithUs_workForm_textField_label7")}</span>
                <label className={classes.attachButton} htmlFor="resume-btn">
                  {t("workWithUs_workForm_textField_button1")}
                </label>
                <Typography className={classes.limitMessage}>Max 2 mb</Typography>
                <Alert
              severity="success" 
              className={classes.uploadAlert}
              style={{
                visibility: fileIsLoaded ? "visible" : "hidden",
                color: "#4caf50"
              }}
            >
              {t("workWithUs_workForm_schemaYup_curriculum4")}
            </Alert>
              </Box>
              <Input
                type="file"
                id="resume-btn"
                name="curriculum"
                style={{ display: "none" }}
                {...register("curriculum", {
                  minLength: {
                    value: 1,
                    message: "Load a file",
                  }
                })} />
             </Box>
             <Alert
              severity={(errors.curriculum?.message === t("workWithUs_workForm_schemaYup_curriculum4")) ? "success" : "error"}
              className={classes.curriculumAlert}
              style={{
                display: errors.curriculum !== undefined ? "inherit" : "none",
                color: (errors.curriculum?.message === t("workWithUs_workForm_schemaYup_curriculum4")) ? "green" : "red"
              }}
            >
              {errors.curriculum?.message}
            </Alert>
            <InputLabel id="demo-simple-select-label" className={classes.selectLabel}>How did you hear about us?</InputLabel>
            <Controller
              name="reference"
              control={control}
              defaultValue="Google"
              render={({ field }) =>
              <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" {...field} className={classes.selectEmpty} variant="standard">
              <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem")}>{t("home_contacSection_contactForm_Select_label1_MenuItem")}</MenuItem>
              <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem1")}>{t("home_contacSection_contactForm_Select_label1_MenuItem1")}</MenuItem>
              <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem2")}>{t("home_contacSection_contactForm_Select_label1_MenuItem2")}</MenuItem>
              <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_label1_MenuItem3")}>{t("home_contacSection_contactForm_Select_label1_MenuItem3")}</MenuItem>
              <MenuItem className={classes.item} value={t("home_contacSection_contactForm_Select_MenuItem_Common")}>{t("home_contacSection_contactForm_Select_MenuItem_Common")}</MenuItem>
               </Select> 
              }
            /> 
            <Button className={classesComponent.buttonComponent} type="submit" disabled={showButton} style={{ marginBottom: "30px" }}>
              <span>{t("workWithUs_workForm_textField_button2")}</span>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default WorkForm