import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <div className="homeContainer">
          <NavBar/>
          <p>Home container</p>
        </div>
    </div>
  );
}

export default Home