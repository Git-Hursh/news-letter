import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, Box } from "@mui/material";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const url = "http://localhost:3000/news";
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  const text = "Taazaaa Khabarein";
  const [open, setOpen] = React.useState(false);
  const getNewsData = async (url) => {
    setOpen(true);
    console.log("Fetching news data...");
    const res = await fetch(url);
    const data = await res.json();
    if (data) {
      setOpen(false);
    }
    const filteredBlogs = data.articles.filter(
      (article) =>
        article.title !== "[Removed]" &&
        article.urlToImage !== null &&
        article.urlToImage !== ""
    );
    setBlogs(filteredBlogs);
    console.log("News data received", filteredBlogs);
  };

  useEffect(() => {
    getNewsData(url);
  }, []);

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
    setSelectedId(blog.id);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Container maxWidth="lg">
        <Box>
          <Typography fontSize={40} fontWeight={800}>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ color: "red" }}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                layoutId={index}
                onClick={() => handleBlogClick({ ...blog, id: index })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <BlogCard
                  id={index}
                  title={blog.title}
                  description={blog.description}
                  content={blog.content}
                  imageUrl={blog.urlToImage}
                  url={blog.url}
                  author={blog.author}
                  source={blog.source.name}
                  onClick={() => handleBlogClick({ ...blog, id: index })}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <AnimatePresence>
          {selectedId !== null && (
            <motion.div layoutId={selectedId} style={{ padding: 20 }}>
              <BlogCard
                id={selectedId}
                title={blogs[selectedId].title}
                description={blogs[selectedId].description}
                content={blogs[selectedId].content}
                imageUrl={blogs[selectedId].urlToImage}
                url={blogs[selectedId].url}
                author={blogs[selectedId].author}
                source={blogs[selectedId].source.name}
                onClick={() => setSelectedId(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default BlogGrid;
