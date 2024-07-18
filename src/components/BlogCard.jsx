import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const styles = {
  card: {
    maxWidth: 345,
    height: "100%",
    margin: "20px",
  },
  media: {
    height: 140,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  title: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

const BlogCard = ({
  id,
  title,
  description,
  imageUrl,
  url,
  author,
  source,
  onClick,
}) => {
  return (
    <Card style={styles.card} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          alt={title}
          style={styles.media}
          image={imageUrl}
          title={title}
        />
        <CardContent style={styles.content}>
          <Typography gutterBottom variant="h5" style={styles.title}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            style={styles.description}
          >
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author: {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Source: {source}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
