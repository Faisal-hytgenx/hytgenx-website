import React from "react";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/Components/blogs/BlogCard";

const blogPosts = [
  {
    title: "How to Register for LEAP Saudi Arabia 2025: A Complete ...",
    description: "A brief description of the first blog post.",
    image: "/background/blogPage/blog-1.png",
    avatar: "/path-to-avatar1.jpg",
    author: "John Doe",
    designation: "Thinker and Designer",
  },
  {
    title: "How to Register for LEAP Saudi Arabia 2025: ",
    description: "A brief description of the second blog post.",
    image: "/background/blogPage/blog-2.png",
    avatar: "/path-to-avatar2.jpg",
    author: "Jane Smith",
    designation: "Creative Writer",
  },
  {
    title: "How to Register for LEAP Saudi Arabia 2025: A Complete ...",
    description: "A brief description of the third blog post.",
    image: "/background/blogPage/blog-3.png",
    avatar: "/path-to-avatar3.jpg",
    author: "Michael Lee",
    designation: "Developer and Architect",
  },
  {
    title: "Custom Web App Development: What You Need to Know",
    description: "A brief description of the blog post.",
    image: "/background/blogPage/blog-1.png",
    avatar: "/path-to-avatar3.jpg",
    author: "Michael Lee",
    designation: "Developer and Architect",
  },
  {
    title: "Custom Web App Development: What You Need to Know",
    description: "A brief description of the blog post.",
    image: "/background/blogPage/blog-3.png",
    avatar: "/path-to-avatar3.jpg",
    author: "Michael Lee",
    designation: "Developer and Architect",
  },
  {
    title: "Custom Web App Development: What You Need to Know",
    description: "A brief description of the blog post.",
    image: "/background/blogPage/blog-2.png",
    avatar: "/path-to-avatar3.jpg",
    author: "Michael Lee",
    designation: "Developer and Architect",
  },
  {
    title: "Custom Web App Development: What You Need to Know",
    description: "A brief description of the blog post.",
    image: "/background/blogPage/blog-4.png",
    avatar: "/path-to-avatar3.jpg",
    author: "Michael Lee",
    designation: "Developer and Architect",
  },
  {
    title: "Custom Web App Development: What You Need to Know",
    description: "A brief description of the blog post.",
    image: "/background/blogPage/blog-5.png",
    avatar: "/path-to-avatar3.jpg",
    author: "Michael Lee",
    designation: "Developer and Architect",
  },
  {
    title: "Custom Web App Development: What You Need to Know",
    description: "A brief description of the blog post.",
    image: "/background/blogPage/blog-6.png",
    avatar: "/path-to-avatar3.jpg",
    author: "Michael Lee",
    designation: "Developer and Architect",
  },
];

const BlogPage = () => {
  return (
    <LayoutWrapper>
      <div className="overflow-x-hidden relative">
        {/* Left Ellipse */}
        <div className="absolute top-[30%] -left-20 transform -translate-y-1/2 -translate-x-1/4 w-full z-0">
          <Image
            src="/background/effects/ellipse.png"
            alt="Left Ellipse"
            layout="responsive"
            width={500}
            height={500}
            className="opacity-50"
          />
        </div>

        {/* Right Ellipse */}
        <div className="absolute top-[10%] right-0 transform translate-x-1/4 w-[300px] z-0">
          <Image
            src="/background/effects/ellipse.png"
            alt="Right Ellipse"
            layout="responsive"
            width={500}
            height={500}
            className="opacity-50"
          />
        </div>

        {/* Top Section */}
        <div
          className="h-[80vh] rounded-md rounded-b-[50px] flex items-center relative"
          style={{
            backgroundImage:
              "url(/background/blogPage/blog-details/blog-detail-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60 rounded-md rounded-b-[50px]"></div>

          <div className="w-full max-w-5xl px-6 lg:px-20 text-white z-50">
            <button className="mt-4 px-6 py-1 bg-blue-600 rounded-md hover:bg-blue-600 transition duration-300 text-sm border border-blue-700">
              Blogs/ blog details
            </button>
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mt-4">
              The Future of Financial Security: Insights from Amazon Security
              Lake Webinar
            </h1>
            <p className="text-xs mt-2">
              Learn how Amazon Security Lake and hytGenx help financial
              institutions improve security, manage data, and{" "}
            </p>
          </div>
        </div>

        <section className="py-16 px-6 lg:px-20">
          {/* First Block */}
          <div className="flex flex-wrap items-center mb-16">
            <div className="w-full lg:w-2/5 px-6">
              <Image
                src="/background/blogPage/blog-details/image-1.png"
                alt="Your image description"
                width={500}
                height={500}
                className="w-full h-auto rounded-md"
              />
            </div>

            <div className="w-full lg:w-3/5 px-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Section Title 1
              </h2>
              <p className="text-white mb-4">
                This is the first paragraph. You can put some introductory text
                here about the topic of the section.
              </p>
              <p className="text-white mb-4">
                The second paragraph goes into more detail. You can explain
                specific features or attributes here.
              </p>
              <p className="text-white mb-4">
                Finally, this third paragraph wraps things up. You can summarize
                or provide additional context here.
              </p>
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-wrap items-center">
            {/* Content on the left (60%) */}
            <div className="w-full lg:w-3/5 px-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Section Title 2
              </h2>
              <p className="text-white mb-4">
                This is the first paragraph of the second section. You can
                include additional content here.
              </p>
              <p className="text-white mb-4">
                The second paragraph dives deeper into the subject matter,
                explaining more in-depth concepts.
              </p>
              <p className="text-white mb-4">
                The final paragraph here summarizes and may contain a call to
                action or next steps.
              </p>
            </div>

            {/* Image on the right (40%) */}
            <div className="w-full lg:w-2/5 px-6">
              <Image
                src="/background/blogPage/blog-details/image-2.png"
                alt="Your image description"
                width={500}
                height={500}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </section>

        {/* New Era of Tech Section */}
        <section className="py-16 text-white">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl mb-6">Related Topics</h2>
            <p className="text-xs mb-8">
              Discover the top software development companies of 2025. Learn how
              to select the right tech partner
              <br /> and explore services, expertise, and industry
              specialization.
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="w-full px-6 lg:px-20 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(6, 9).map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  avatar={post.avatar}
                  author={post.author}
                  designation={post.designation}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div
          className="px-6 lg:px-20 py-10"
          style={{
            backgroundImage: "url('/background/stars.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative bg-glass flex flex-col items-center justify-center text-center px-6 py-16 rounded-md mt-20">
            <div className="relative z-10 w-[80%]">
              <h1 className="text-2xl sm:text-5xl text-white font-bold">
                hytGenX helps you harness the power of DevOps to drive
                innovation.
              </h1>
              <p className="mt-4 sm:text-lg text-md text-gray-300">
                Trusted by 90% of the Fortune 100, GitHub helps millions of
                developers and companies collaborate, build, and deliver secure
                software faster. And with thousands of DevOps integrations,
                developers can build smarter from day one with the tools you
                know and love—or discover new ones.
              </p>
              <Link href={"/contact"}>
                <button className="mt-6 px-10 py-3 bg-blue-700 text-white font-medium text-md rounded-md shadow-lg hover:bg-blue-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default BlogPage;
