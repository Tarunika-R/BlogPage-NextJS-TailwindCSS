import Format from "@/app/layout/format"; // Import Format to wrap the page content

export default function Blog() {
  return (
    <Format>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Blog Page</h1>
        <p className="mt-4 text-lg">
          Welcome to the blog page. Here you'll find all the latest posts.
        </p>
      </section>
    </Format>
  );
}
