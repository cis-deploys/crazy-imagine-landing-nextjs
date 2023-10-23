import React from "react"
import ReactMarkdown from "react-markdown"
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import rehypeRaw from "rehype-raw"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  content: {
    textAlign: "left",
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#787878",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  },
  container: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}))

const PostContent = ({ articles }) => {
  const classes = useStyles()
  const { i18n, t } = useTranslation()
  const lang = i18n.language 

  return (
    <>
      <Box className={classes.container}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} className={classes.content}>
          {articles?.content}
        </ReactMarkdown>
      </Box>
    </>
  )
}

export default PostContent
