import { HiArrowNarrowRight } from "react-icons/hi";
export default function Home() {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-3xl sm:text-5xl font-bold">Seetaram Vannemreddi</h1>
        <h2 className="text-xl sm:text-4xl font-bold">
          I'm a Full Stack Developer
        </h2>
        <p className="py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="group border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
