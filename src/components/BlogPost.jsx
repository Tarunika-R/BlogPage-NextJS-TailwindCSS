import Image from "next/image";

export default function BlogPost({ blog }) {
  return (
    <article className="container mx-auto py-16 px-4 md:px-20">
      {/* Blog Header */}
      <header className="mb-8">
        <div className="category text-orange-600">{blog.category}</div>
        <h1 className="text-4xl font-bold text-gray-800 my-4">{blog.title}</h1>
        <p className="text-gray-600 text-sm">Published on {blog.date}</p>
      </header>

      {/* Blog Image */}
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="content text-gray-800 leading-7">
        {blog.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
