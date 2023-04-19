import {
  CloudUploadOutlined,
  HeartOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.scss";

const Navigation: React.FC = () => {
  return (
    <div className="navigation bg-header">
      <ul className="navigation__list text-white px-0">
        <li className="navigation__item d-flex align-items-end py-3 px-4">
          <div className="navigation__item__icon">
            <HomeOutlined />
          </div>
          <div className="navigation__item__text mx-3">Trang chủ</div>
        </li>
        <li className="navigation__item d-flex align-items-end py-3 px-4">
          <div className="navigation__item__icon">
            <HeartOutlined />
          </div>
          <div className="navigation__item__text mx-3">Đã yêu thích</div>
        </li>
        <li className="navigation__item d-flex align-items-end py-3 px-4">
          <div className="navigation__item__icon">
            <MenuUnfoldOutlined />
          </div>
          <div className="navigation__item__text mx-3">Bài hát đã nghe</div>
        </li>
        <li className="navigation__item d-flex align-items-end py-3 px-4">
          <div className="navigation__item__icon">
            <CloudUploadOutlined />
          </div>
          <div className="navigation__item__text mx-3">Đã tải lên</div>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
