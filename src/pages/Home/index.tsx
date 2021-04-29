import Layout from "../../components/Layout/index";
import Header from "./components/Header/index";
import ProfessionalSkills from "./components/ProfessionalSkills/index";
import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe/index";
import Education from "./components/Education/index";
import References from "./components/References/index";
import Contact from "./components/Contact/index";

const Home = () => {
  return (
    <Layout>
      <Header />
      <AboutMe />
      <ProfessionalSkills />
      <WorkExperience />
      <Education />
      <References />
      <Contact />
    </Layout>
  );
};

export default Home;
