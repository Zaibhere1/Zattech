import { ParentComponent } from "solid-js";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayout: ParentComponent = (props) => {
  return (
    <div class=" bg-white dark:bg-black dark:text-white text-black">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
