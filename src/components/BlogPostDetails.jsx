import React, { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogPostDetail = () => {
  const { state } = useLocation();
  const { blog } = state || {};
  const [otherBlogs, setOtherBlogs] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
  useEffect(() => {
    const fetchOtherBlogs = async () => {
      const url = "http://localhost:3000/news";
      const res = await fetch(url);
      const data = await res.json();
      const filteredBlogs = data.articles.filter(
        (article) =>
          article.title &&
          article.description !== "[Removed]" &&
          article.urlToImage !== null &&
          article.urlToImage !== ""
      );
      setOtherBlogs(filteredBlogs);

      console.log("News data received", filteredBlogs);
    };

    fetchOtherBlogs();
  }, []);

  if (!blog) {
    return <div>No blog post found.</div>;
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={goBack}
          startIcon={<ArrowBackIcon />}
        >
          Back to List
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography variant="h3" gutterBottom>
              {blog.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Author: {blog.author}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Source: {blog.source.name}
            </Typography>
            <img
              src={blog.urlToImage}
              alt={blog.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />
            <Typography variant="body1">{blog.description}</Typography>
            <Typography variant="body2">{blog.content}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Other Blogs
          </Typography>
          {otherBlogs.slice(0, 3).map((otherBlog, index) => (
            <Box key={index} mb={2}>
              <img
                src={otherBlog.urlToImage}
                alt={otherBlog.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              />
              <Typography variant="h6">{otherBlog.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                Author: {otherBlog.author}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Source: {otherBlog.source.name}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPostDetail;
