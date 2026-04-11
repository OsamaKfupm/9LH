import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import profileImg from "../../assets/UserIconMain.png";

export default function Sidebar({ userRole }) {
  const navigate = useNavigate();
  const [openSettings, setOpenSettings] = useState(false);

  const navItems = [
    { to: "/", label: "Dashboard", icon: "◫" },
    { to: "/admin-dashboard", label: "Admin Dashboard", icon: "◧", adminOnly: true },
    { to: "/members", label: "Members", icon: "👥", adminOnly: true },
    { to: "/events", label: "Events", icon: "🗓" },
    { to: "/family-tree", label: "Family Tree", icon: "⌁" },
    { to: "/gallery", label: "Gallery", icon: "🖼" },
    { to: "/documents", label: "Documents", icon: "📄" },
    { to: "/announcements", label: "Announcements", icon: "📣" },
    { to: "/messages", label: "Messages", icon: "💬" },
    { to: "/analytics", label: "Analytics", icon: "📊", adminOnly: true },
  ];

  const visibleItems = navItems.filter(
    (item) => !item.adminOnly || userRole === "admin"
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-brand-row">
          <div className="brand">SILAH</div>

          <div className="sidebar-header-actions">
            <button
              className="header-settings-btn"
              type="button"
              onClick={() => setOpenSettings((prev) => !prev)}
            >
              Settings
            </button>

            {openSettings && (
              <div className="settings-dropdown header-settings-dropdown">
                <div onClick={() => navigate("/settings")}>Open Settings</div>
                <div>Theme</div>
              </div>
            )}
          </div>
        </div>

        <nav className="sidebar-nav">
          {visibleItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <div className="nav-link-left">
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>

              {item.adminOnly && <span className="admin-badge">ADMIN</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
      <div className="user-card">
          <img
            src={profileImg}
            alt="Profile"
            className="user-avatar"
          />

          <div>
            <div className="user-name">Ahmed Al-Rashid</div>
            <div className="user-role">
              {userRole === "admin" ? "Family Admin" : "Family Member"}
            </div>
          </div>
        </div>

        <button className="logout-btn" type="button">
          Logout
        </button>
      </div>
    </aside>
  );
}