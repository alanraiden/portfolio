import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Cloud Architecture Design (AWS)",
    description:
      "Plan and deploy secure and scalable cloud systems.",
  },
  {
    id: 2,
    title: "CI/CD Pipeline Setup",
    description:
      "Automate build, test, and deployment workflows using Jenkins or GitHub Actions.",
  },
  {
    id: 3,
    title: "Web DeContainerization (Docker)velopment",
    description:
      "Simplify deployments and ensure consistency across environments.",
  },
  
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in cloud infrastructure, automation, and DevOps pipelines to ensure reliability, scalability, and performance.
          </p>
          
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
