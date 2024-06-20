import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import TestCase from "../../components/testcase/TestCase";
import Widget from "../../components/widget/Widget";
import Workload from "../../components/workload/Workload";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
      
        <NavBar />
        <div className="grid">
          <div className="widgets">
          <Widget type="toDo"/>
          <Widget type="inProgress"/>
          <Widget type="completed"/>
          <Widget type="poAccepted"/>
          </div>
          <div className="charts">
            <Workload/>
            <TestCase/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
