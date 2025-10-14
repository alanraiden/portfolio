import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "29 jun, 2025",
    comments: 23,
    title: "Getting Started with AWS for Beginners",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "2 jul, 2025",
    comments: 4,
    title: "Automating Deployments with Jenkins",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "7 aug, 2025",
    comments: 6,
    title: "Monitoring EC2 with Prometheus and Grafana",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "14 aug, 2025",
    comments: 4,
    title: "AWS S3 Lifecycle and Versioning Explained",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "22 aug, 2025",
    comments: 9,
    title: "EC2 instance, S3 bucket, and IAM user step-by-step",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "24 aug, 2025",
    comments: 11,
    title: "Understand how to manage data storage",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Check out my recent posts on Cloud, DevOps, and Automation.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
