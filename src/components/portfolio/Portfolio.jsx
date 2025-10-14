import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "cloud",
    title: "AWS EC2 + IAM + EBS Project",
    description:
      "Deployed secure AWS EC2 instance integrated with IAM role and EBS volumes.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "cloud",
    title: "Nagios + Prometheus + Grafana Setup",
    description:
      "Built a centralized monitoring setup with EC2 instances to visualize and alert on system metrics.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "cloud",
    title: "CI/CD Pipeline using Jenkins & GitHub",
    description:
      "Developed a continuous integration and deployment workflow for automated application delivery.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "cloud",
    title: "Dockerized Web Application on AWS",
    description:
      "Containerized and deployed a web app with Docker on AWS, optimizing performance and scalability.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "cloud",
    title: "AWS S3 + EC2 Integration",
    description:
      "Connected S3 with EC2 for file operations, hosted a static website using versioning and lifecycle policies.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "cloud",
    title: "Portfolio Website",
    description:
      "Built and customized my personal portfolio site to showcase my DevOps projects and blogs.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a selection of my recent projects showcasing my cloud & DevOps skills.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
