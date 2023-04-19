import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

interface Props {
  ChildrenComponent: React.FC;
}

const HomeLayout: React.FC<Props> = ({ ChildrenComponent }) => {
  return (
    <>
      <Header />
      <Navigation />
      <div className="home-layout__content">
        <ChildrenComponent />
      </div>
    </>
  );
};

export default HomeLayout;
