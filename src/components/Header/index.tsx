import React, { useEffect } from "react";
import { Input } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNavigationStatusSelector } from "../../redux/selector";
import { setNavigationStatus } from "../../redux/slice/configAppSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigationStatus = useSelector(getNavigationStatusSelector);

  const handleWindowResize = () => {
    if (window.innerWidth < 768) {
      dispatch(setNavigationStatus("hidden"));
    }
  };
  window.addEventListener("resize", handleWindowResize);

  const handleInputSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  const handleToggleNavigation = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (navigationStatus === "hidden") {
      windowWidth < 768
        ? dispatch(setNavigationStatus("showWithOverlay"))
        : dispatch(setNavigationStatus("showWithoutOverlay"));
    } else {
      dispatch(setNavigationStatus("hidden"));
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="header bg-header">
      <div className="h-100 px-5 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <button className="btn p-0" onClick={handleToggleNavigation}>
            {navigationStatus === "hidden" ? (
              <MenuUnfoldOutlined className="text-white h2" />
            ) : (
              <MenuFoldOutlined className="text-white h2" />
            )}
          </button>
          <Link to="/" className="h1 mb-0 mx-3 font-weight-bold">
            <span className="text-red">MiChu</span>
            <span className="text-white">Music</span>
          </Link>
        </div>
        <div className="header__search-input d-none d-md-block">
          <Input
            placeholder="Nhập tên bài hát, ca sĩ, thể loại..."
            allowClear
            prefix={<SearchOutlined />}
            onChange={handleInputSearchChange}
          />
        </div>
        <div>
          <button className="btn btn-secondary btn-lg">Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
