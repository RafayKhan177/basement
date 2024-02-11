"use client";

import Body from "./Body";
import { getDocById } from "api/functions/get";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Post({ link }) {
  const pathname = usePathname();
  const [blogs, setBlogs] = useState(null);

  console.log(blogs);

  useEffect(() => {
    const fetchblogs = async () => {
      try {
        const match = pathname && pathname.match(/\/([^/]+)$/);
        const id = match && match[1];

        if (id) {
          let data = await getDocById(id, "blogs");

          setBlogs(data);
        }
      } catch (error) {
        // Handle errors
        console.error("Error fetching blogs:", error);
      }
    };

    fetchblogs();
  }, [pathname]);

  return <Body props={blogs} link={link} />;
}
