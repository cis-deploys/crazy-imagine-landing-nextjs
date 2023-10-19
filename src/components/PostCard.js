import React from "react"
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material"
import FiberManualRecordIcon from "@mui/icons-material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
  blockImage: {
    width: "100%",
    height: 250,
  },
  cardContainer: {
    width: 360,
    height: 545,
    backgroundColor: "#ffffff",
    transition: "linear 300ms",
    "&:hover": {
      boxShadow: "1px 4px 30px 0px rgba(0,0,0,0.15)",
      backgroundColor: "#F9F9F9",
    },
  },
  content: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 20,
  },
  colorPostBy: {
    color: "#989898",
  },
  colorAuthor: {
    color: "#272727",
    fontWeight: 600,
  },
  tag: {
    height: 25,
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: 500,
    color: "white",
    backgroundColor: "#23aae1",
    padding: 8,
    display: "flex",
    alignItems: "center",
  },
  postDecorate: {
    backgroundColor: "#b21e1e",
  },
  title: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 18,
    color: "#272727",
    marginBottom: 15,
  },
  postDescription: {
    fontFamily: "Hind",
    fontSize: 18,
    color: "#464646",
    marginBottom: 20,
    height: 63,
  },
  cardDivider: {
    color: "#ededed",
    marginBottom: 10,
  },
  footerNumber: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: 600,
  },
  footerShare: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: 600,
    color: "#272727",
  },
  footerIcons: {
    fontSize: 8,
    marginRight: 4,
    color: "#dcdcdc",
  },
})

const textOverflow = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length) + "..."
  }
  return text
}

const PostCard = ({
  image,
  author,
  tags,
  title,
  description,
  footerNumber,
  share,
  variant = "default",
}) => {
  const classes = useStyles({
    variant,
  })
  const content = textOverflow(description, 75)
  return (
    <Box>
      <Card className={classes.cardContainer}>
        <CardMedia image={image} title={title} className={classes.blockImage} />
        <Box
          paddingTop="37px"
          paddingRight="33px"
          paddingBottom="31px"
          paddingLeft="29px"
        >
          <CardContent>
            <Typography component={"div"} className={classes.content}>
              <Box display="flex" gridGap="8px" alignItems="center">
                <Typography className={classes.colorPostBy}>Post by</Typography>
                <Typography variant="subtitle2" className={classes.colorAuthor}>
                  {author}
                </Typography>
                <Typography className={classes.tag}>{tags}</Typography>
              </Box>
            </Typography>
            <Grid container>
              <Grid item>
                <Box
                  width="10px"
                  height="3px"
                  marginRight="14px"
                  marginTop="9px"
                  className={classes.postDecorate}
                ></Box>
              </Grid>
              <Grid item xs>
                <Typography variant="h3" className={classes.title}>
                  {textOverflow(title, 35)}
                </Typography>
                <Typography className={classes.postDescription}>
                  {content}
                </Typography>
              </Grid>
            </Grid>
            <Divider className={classes.cardDivider} />
            <CardActions>
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography className={classes.footerShare}>
                  {share ? (
                    share
                  ) : (
                    <>
                      {" "}
                      <FiberManualRecordIcon className={classes.footerIcons} />
                      <FiberManualRecordIcon className={classes.footerIcons} />
                      <FiberManualRecordIcon
                        className={classes.footerIcons}
                      />{" "}
                    </>
                  )}
                </Typography>
                <Typography className={classes.footerNumber}>
                  {footerNumber}
                </Typography>
              </Box>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </Box>
  )
}

export default PostCard
