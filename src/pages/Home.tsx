import MainLayout from "../components/layouts/MainLayout";
import Teams from "../components/Team/Teams";
import Clients from "../components/Carousel/Clients";
import Development from "../components/Card/Devlopment";
import Banner from "../components/Carousel/Banner";
import OurServices from "../components/ourservices/OurServices";
import Products from "../components/Card/Products";
import { MainPageProjects } from "../services/Services";
import Swiper from "../components/Card/Swiper";

const Home = () => {
  return (
    <MainLayout>
      <div class="px-10">
        <div class="min-h-screen flex flex-col text-black">
          <main class="flex-grow pb-6 w-fit">
            <div class="max-w-full mx-auto px-4 sm:px-6 text-center">
              <Banner />
              <div class="md:mb-6 md:bg-slate-200 rounded-xl">
                <Clients />
              </div>
              <div class="">
                <Development />
              </div>
              <OurServices />

              <div class="max-w-md md:hidden m-4">
                <Swiper />
              </div>
              <div class="my-12 md:my-24 hidden md:block">
                <Products Product={MainPageProjects} />

                <span class="md:mt-10">
                  <a
                    href="/products"
                    type="button"
                    class=" bg-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center md:mt-2"
                  >
                    View All
                  </a>
                </span>
              </div>

              <div class="my-10">
                <Teams />
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
