import AboutSection from "../components/aboutsection/AboutSection";
import Contactfooter from "../components/footer/Contactfooter";
import MainLayout from "../components/layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <div class="container px-8">
        <section class="flex flex-col md:mt-9 ">
          <div class="grid grid-cols-12 w-full">
            <div class=" flex col-span-4 justify-c>Wenter">
              <img src="AboutUsLeft.png" alt="loading..." />
            </div>
            <div class="col-span-4">
              <div class="flex flex-col justify-center">
                <div class="md:mt-20 text-4xl text-black font-bold text-center">
                  Welcome To {""}
                  <span class=" text-blue-500 font-extrabold">
                    {" "}
                    {""} Zattech
                  </span>
                </div>
                <p class="md:mt-20 text-lg font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  sit dolorem, repellendus minima fugiat animi officiis dicta
                  voluptates rem doloribus sequi possimus ipsa aperiam fugit
                  quasi voluptatum aliquam ut beatae itaque earum sint quo enim
                  accusamus! Maiores libero sequi quasi.
                </p>
              </div>
            </div>
            <div class=" flex col-span-4 justify-center">
              {" "}
              <img src="AboutUsRight.png" alt="loading... " class="md:ml-28" />
            </div>
          </div>
        </section>
        <section class=" bg-gray-100 w-full">
          <div class="container mx-auto">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-8 md:mb-36">
              <div class="lg:w-1/2">
                <img src="Aboutus1.png" alt="About Us" class="w-full h-auto" />
              </div>{" "}
              <div class="lg:w-1/2 mb-14">
                <h2 class="text-4xl   font-bold text-gray-800 ">About Us</h2>
                <p class="text-lg text-gray-600 mb-8 md:my-10 text-wrap">
                  gap Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna  
                  aliqua. Quis ipsum suspendisse ultrices gravida.   Lorem ipsum
                  dolor sit amet spendisse ultrices gravida.   Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.   Quis ipsum
                  suspendisse ultrices gravida.
                </p>
                <button class="bg-blue-500    text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <AboutSection />
      </div>
      <Contactfooter />
    </MainLayout>
  );
};

export default About;
