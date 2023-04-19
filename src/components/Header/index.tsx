import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./index.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const handleInputSearchChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };
  return (
    <div className="header bg-header">
      <div className="h-100 px-4 d-flex align-items-center justify-content-between">
        <Link to="/" className="h1 mb-0 font-weight-bold">
          <span className="text-red">MiChu</span>
          <span className="text-white">Music</span>
        </Link>
        <div className="header__search-input">
          <Input
            placeholder="Nhập tên bài hát, ca sĩ, thể loại..."
            allowClear
            prefix={<SearchOutlined />}
            onChange={handleInputSearchChange}
          />
        </div>
        <div>
          <button className="btn btn-secondary btn-lg text-uppercase">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
