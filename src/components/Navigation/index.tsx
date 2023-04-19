import {
  CloudUploadOutlined,
  HeartOutlined,
  HomeOutlined,
  PlaySquareOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNavigationStatusSelector } from "../../redux/selector";
import { setNavigationStatus } from "../../redux/slice/configAppSlice";
import { useEffect, useRef } from "react";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const overlayRef = useRef<any>();
  const navigationStatus = useSelector(getNavigationStatusSelector);
  const navigationClass =
    navigationStatus === "hidden" ? "navigation--hidden" : "";

  useEffect(() => {
    if (overlayRef.current && navigationStatus === "showWithOverlay") {
      overlayRef.current?.classList.add("show");
    } else if (overlayRef.current && navigationStatus !== "showWithOverlay") {
      overlayRef.current?.classList.remove("show");
    }
  });

  return (
    <div className={`navigation bg-header ${navigationClass}`}>
      <ul className="navigation__list text-white px-0">
        <li className="navigation__item d-flex align-items-end py-3 px-5">
          <div className="navigation__item__icon">
            <HomeOutlined />
          </div>
          <div className="navigation__item__text mx-3">Trang chủ</div>
        </li>
        <li className="navigation__item d-flex d-md-none align-items-end py-3 px-5">
          <div className="navigation__item__icon">
            <SearchOutlined />
          </div>
          <div className="navigation__item__text mx-3">Tìm kiếm</div>
        </li>
        <li className="navigation__item d-flex align-items-end py-3 px-5">
          <div className="navigation__item__icon">
            <HeartOutlined />
          </div>
          <div className="navigation__item__text mx-3">Đã yêu thích</div>
        </li>
        <li className="navigation__item d-flex align-items-end py-3 px-5">
          <div className="navigation__item__icon">
            <PlaySquareOutlined />
          </div>
          <div className="navigation__item__text mx-3">Bài hát đã nghe</div>
        </li>
        <li className="navigation__item d-flex align-items-end py-3 px-5">
          <div className="navigation__item__icon">
            <CloudUploadOutlined />
          </div>
          <div className="navigation__item__text mx-3">Đã tải lên</div>
        </li>
      </ul>
      <div
        className="navigation__overlay"
        ref={overlayRef}
        onClick={() => dispatch(setNavigationStatus("hidden"))}
      ></div>
    </div>
  );
};

export default Navigation;
