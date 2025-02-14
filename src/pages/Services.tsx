import Development from "../components/Card/Devlopment";
import MainLayout from "../components/layouts/MainLayout";
import { tabTitle } from "../services/Services";

const Services = () => {
  tabTitle("Services");
  return (
    <div>
      <MainLayout>
        <div class="text-black md:pt-12">
          <div class="grid grid-cols-12 ">
            <div class="grid col-span-6 justify-center px-6 mt-4">
              <div class="block md:mt-48">
                <h1 class="  md:mt-10 text-xl md:text-4xl text-blue-600 font-extrabold">
                  {" "}
                  Our Services
                </h1>
                <p class="mt-2 md:mt-4 text-xs md:text-lg text-black dark:text-white py-6">
                  At Zattech, we offer a range of cutting-edge solutions
                  designed to help your business thrive in the digital age. From
                  innovative software development to seamless cloud integration,
                  our services are tailored to meet the unique needs of your
                  business. With a team of experts dedicated to delivering
                  excellence, we ensure that every solution is crafted with
                  precision, efficiency, and a commitment to your success.
                </p>
              </div>
              <div class="md:mb-28 ">
                <a
                  href="/contact"
                  class="text-sm font-bold text-white  bg-gradient-to-l from-cyan-600 to-blue-600  bg-blue-500 hover:bg-cyan-700 duration-1000 md:text-xl md:px-3 md:py-3 rounded-lg mt-6 hover:scale-125 px-6 py-2"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div class="grid col-span-6 justify-center">
              <img
                class=" bg-white dark:bg-transparent "
                src="OurServicesMain.png"
                alt="Loading...."
              />
            </div>
          </div>
          <div class="text-center">
            <h1>What We do for you </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ad
              veritatis voluptate praesentium perferendis maxime!
            </p>
          </div>
          <div class="">
            <Development />
          </div>
          1
        </div>
      </MainLayout>
    </div>
  );
};

export default Services;
