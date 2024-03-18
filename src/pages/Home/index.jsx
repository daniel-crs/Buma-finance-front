import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function Home() {
  return (
    <div>
      <Header />
      <SideBar />

      <div id="bodyContainer">
        <div id="upperBodyInfo">
          <h1>DashBoard</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
