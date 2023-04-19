import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { getNavigationStatusSelector } from "../redux/selector";

interface Props {
  ChildrenComponent: React.FC;
}

const HomeLayout: React.FC<Props> = ({ ChildrenComponent }) => {
  const navigationStatus = useSelector(getNavigationStatusSelector);
  const classNameContent =
    navigationStatus === "hidden"
      ? "home-layout__content--hidden-navigation"
      : "";
  return (
    <>
      <Header />
      <Navigation />
      <div
        className={`home-layout__content text-white px-5 ${classNameContent}`}
      >
        <ChildrenComponent />
      </div>
    </>
  );
};

export default HomeLayout;
