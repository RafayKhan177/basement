import Hero from "components/Hero";
import Testimonial from "components/Testimonial";
import GetInspired from "components/GetInspired"
import BlogsListing from "components/BlogsListing";

export default function Page() {
  return (
    <>
      <Hero />
      <GetInspired />
      <BlogsListing />
      <Testimonial />
    </>
  );
}
