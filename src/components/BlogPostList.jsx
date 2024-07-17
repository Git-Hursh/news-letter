import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const url = "http://localhost:3000/news";
  const navigate = useNavigate();

  const getNewsData = async (url) => {
    console.log("Fetching news data..."); // Debugging log
    const res = await fetch(url);
    const data = await res.json();
    // Filter out articles with removed titles
    const filteredBlogs = data.articles.filter(
      (article) => article.title !== "[Removed]"
    );
    setBlogs(filteredBlogs);
    console.log("News data received", filteredBlogs); // Debugging log
  };

  useEffect(() => {
    getNewsData(url);
  }, []);

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h3">Tazaa International Khabar</Typography>
      </Box>
      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogCard
              id={index}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.urlToImage}
              url={blog.url}
              author={blog.author}
              source={blog.source.name}
              onClick={() => handleBlogClick({ ...blog, id: index })}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogGrid;
