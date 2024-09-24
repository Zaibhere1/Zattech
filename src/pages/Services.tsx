import Development from "../components/Card/Devlopment";
import MainLayout from "../components/layouts/MainLayout";

const Services = () => {
  return (
    <div class="container">
      <MainLayout>
        <div class="text-black">
          <div class="grid grid-cols-12 ">
            <div class="grid col-span-6 justify-center px-6 mt-4">
              <div class="block md:mt-48">
                <h1 class=" md:mt-10 text-xl md:text-4xl text-blue-600 font-extrabold">
                  {" "}
                  Our Services
                </h1>
                <p class="mt-2 md:mt-4 text-xs md:text-lg text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, fugiat!
                </p>
              </div>
              <div class="md:mb-28 ">
                <a
                  href="/"
                  class="text-lg font-bold text-white border-4 border-blue-800 bg-blue-500 hover:bg-cyan-700 duration-1000 md:text-xl md:px-2 md:py-2  rounded-lg md:rounded-full mt-6 hover:scale-125 px-2"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div class="grid col-span-6 justify-center">
              <img
                class="rounded-full"
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
