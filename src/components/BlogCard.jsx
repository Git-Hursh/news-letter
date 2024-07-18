import React from "react";
import { Box, Typography, Stack } from "@mui/material";
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
    <Box
      sx={{
        maxWidth: 360,
        height: "100%",
        margin: "20px",
        borderRadius: "18px",
        overflow: "hidden",
        // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Stack direction="column" spacing={2}>
        <Box
          component="img"
          sx={{
            height: 180,
            width: "100%",
            objectFit: "cover",
          }}
          alt={title}
          src={imageUrl}
        />
        <Stack direction="column" spacing={1} sx={{ padding: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author: {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Source: {source}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default BlogCard;