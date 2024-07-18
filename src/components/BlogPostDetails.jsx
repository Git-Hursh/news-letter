import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

const BlogPostDetail = () => {
  const { state } = useLocation();
  const { blog } = state || {};

  console.log("BLOGGGGG", blog)
  console.log("BLOGGGGG")

  if (!blog) {
    return <div>No blog post found.</div>;
  }

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h3" gutterBottom>{blog.title}</Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Author: {blog.author}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Source: {blog.source.name}
        </Typography>
        <img
          src={blog.urlToImage}
          alt={blog.title}
          style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
        />
        <Typography variant="body1">{blog.description}</Typography>
        <Typography variant="body2">{blog.content}</Typography>
      </Box>
    </Container>
  );
};

export default BlogPostDetail;
