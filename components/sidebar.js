import SearchInput from "@/components/ui/search";
import Image from "next/image";
import Link from "next/link";
import Label from "@/components/ui/label";
import DateTime from "@/components/ui/time";

export default function Sidebar() {
  const hardcodedRelatedPosts = [
    {
      title: "Related Post 1",
      slug: { current: "related-post-1" },
      date: "2024-01-21",
    },
    {
      title: "Related Post 2",
      slug: { current: "related-post-2" },
      date: "2024-01-22",
    },
    {
      title: "Related Post 3",
      slug: { current: "related-post-3" },
      date: "2024-01-23",
    },
  ];

  const hardcodedCategories = [
    {
      _id: 1,
      title: "Category 1",
      slug: { current: "category-1" },
      color: "blue",
      count: 10,
    },
    {
      _id: 2,
      title: "Category 2",
      slug: { current: "category-2" },
      color: "green",
      count: 15,
    },
    {
      _id: 3,
      title: "Category 3",
      slug: { current: "category-3" },
      color: "red",
      count: 8,
    },
  ];

  return (
    <div className="mt-5 font-sans">
      <Searchbar />

      <RelatedPosts related={hardcodedRelatedPosts} pathPrefix="posts" />
      <Categories categories={hardcodedCategories} />
    </div>
  );
}

function Searchbar() {
  return (
    <div>
      <h3 className="text-2xl font-bold dark:text-white">Search Posts</h3>
      <form action="/search" method="GET" className="mt-4">
        <SearchInput placeholder="Search" />
      </form>
    </div>
  );
}

function RelatedPosts({ related, pathPrefix }) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold dark:text-white">Related</h3>
      <div className="mt-6 grid gap-6">
        {related.slice(0, 3).map((item, index) => {
          return (
            <Link
              key={index}
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                item.slug.current
              }`}
            >
              <div className="flex gap-5">
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={""}
                    alt={item.title || "Thumbnail"}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    <DateTime date={item.date} />
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Categories({ categories }) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold dark:text-white">Categories</h3>
      <ul className="mt-4 grid">
        {categories.map((item, index) => (
          <li key={item._id}>
            <Link
              href={`/category/${item.slug.current}`}
              className="flex items-center justify-between py-2"
            >
              <h4 className="text-gray-800 dark:text-gray-400">{item.title}</h4>
              <Label pill={true} color={item.color}>
                {item.count}
              </Label>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
