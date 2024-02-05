"use client";

import blogsData from "app/blogsData";
import SectionHeader from "../common/SectionHeader";
import { SingleCard } from "./SingleCard";
import { Container, Flex } from "@mantine/core";
import { Spinner } from "@nextui-org/react";
import { useState } from "react";

const BlogsListing = ({ all, selectedCategory }) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState(blogsData);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedBlogData = await getBlogs();
  //     setBlogs(fetchedBlogData);
  //   };
  //   setLoading(false);
  //   fetchData();
  // }, [all]);

  // const filteredBlogData = blogs.filter(
  //   (blog) => blog.category === selectedCategory
  // );
  const sliceBlogData = all ? blogs : blogs.slice(0, 3);
  return (
    <Container size={"lg"}>
      <SectionHeader
        headerInfo={{
          title: "OUR PROJECTS",
          subtitle: "Renovations by [Campany Name]",
          description:
            " Explore some of our recent renovation projects and see why homeowners choose [Campany Name] for their home improvement needs.",
        }}
      />

      {loading ? ( // Show loader if loading is true
        <Flex height="20vh" align="center" justify="center">
          <Spinner size="xl" color="default" />
        </Flex>
      ) : (
        <div className="gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sliceBlogData.map((item, index) => (
            <SingleCard key={index} item={item} />
          ))}
        </div>
      )}
      <br />
    </Container>
  );
};

export default BlogsListing;
