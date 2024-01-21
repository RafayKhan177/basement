import blogsData from "app/blogsData";
import Body from "./Body";

export default function Post() {
  const blog = blogsData[0];

  return <Body props={blog} />;
}
