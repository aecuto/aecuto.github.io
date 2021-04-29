import Layout from "../../components/Layout/index";
import Header from "./components/Header/index";
import ProfessionalSkills from "./components/ProfessionalSkills/index";
import WorkExperience from "./components/WorkExperience";

const Home = () => {
  return (
    <Layout>
      <Header />
      <ProfessionalSkills />
      <WorkExperience />
    </Layout>
  );
};

export default Home;
