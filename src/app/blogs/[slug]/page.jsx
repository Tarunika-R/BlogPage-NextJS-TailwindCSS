import BlogPost from "@/components/BlogPost";

export default function BlogPage({ params }) {
  const blogs = [
    {
      slug: "your-unhappy-customers",
      title: "Your most unhappy customers are your greatest source of learning",
      date: "July 3, 2022",
      category: "Business, Travel",
      image: "/images/image1.jpg",
      content:
        "Even the all-powerful Pointing has no control about the blind texts...\nOne day, however, a small line of blind text decided to leave for the World of Grammar.",
    },
    {
      slug: "modern-world-technology",
      title: "Technology is the heart of the modern world",
      date: "July 10, 2022",
      category: "Technology, Innovation",
      image: "/images/image2.jpg",
      content:
        "Blind texts are meaningless, but meaningful technology can change the world...\nDive into the future of innovation and its impact on our lives.",
    },
    {
      slug: "healthy-lifestyle-steps",
      title: "A healthy lifestyle begins with small steps",
      date: "July 15, 2022",
      category: "Lifestyle, Health",
      image: "/images/image3.jpg",
      content:
        "Explore the power of small, daily habits in transforming your lifestyle for a healthier, happier you.\nTake one step at a time for meaningful change.",
    },
  ];

  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogPost blog={blog} />;
}
