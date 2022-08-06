import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <Link to="/" className="link">
            <span className="logo">DashBoard Admin</span>
          </Link>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainner">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainner">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainner">
            <Settings />
          </div>
          <img
            src="https://cdn.chanhtuoi.com/uploads/2022/01/avatar-cute-nam-bi-an-1642493202.jpeg.webp"
            alt="User Avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
