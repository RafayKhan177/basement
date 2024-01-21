import blogsData  from "app/blogsData";
import SectionHeader from "../common/SectionHeader";
import { SingleCard } from "./SingleCard";

const BlogsListing = () => {
  return (
    <div className="container mx-auto">
      <SectionHeader
        headerInfo={{
          title: "INFORMATION REGARDING THE COMPANY",
          subtitle: "ABOUT THE ORGANIZATION",
          description: "DETAILS ABOUT THE COMPANY",
        }}
      />

      <div className="gap-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((item, index) => (
          <SingleCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogsListing;
