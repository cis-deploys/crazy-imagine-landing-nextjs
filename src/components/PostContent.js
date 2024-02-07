import React from "react"
import ReactMarkdown from "react-markdown"
import { Box } from "@mui/material"
import { useTranslation } from 'next-i18next'
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  },
  container: {
    width: "60%",
    [theme.breakpoints.up("xl")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      order: 1,
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
          {articles[0]?.content}
        </ReactMarkdown>
      </Box>
    </>
  )
}

export default PostContent
