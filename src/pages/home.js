import React from "react";
import TopBar from "../components/topbar";
import MainTabs from "../components/maintabs";

class Home extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <MainTabs />
      </div>
    );
  }
}

export default Home;
