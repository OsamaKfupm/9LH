import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Topbar({ userRole, currentUser, onLogout }) {
  const [openNotifications, setOpenNotifications] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    { title: "New family member", text: "Ahmed was added to the tree" },
    { title: "Event updated", text: "Family reunion time changed" },
    { title: "New announcement", text: "Check latest family news" },
    { title: "Reminder", text: "Event tomorrow at 6 PM" },
  ];

  function handleLogoutClick() {
    onLogout();
    navigate("/auth");
  }

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">Family Portal</h1>
      </div>

      <div className="topbar-right">
        <div className="logged-user-chip">
          <span>{currentUser?.fullName || "User"}</span>
          <span className="logged-user-role">
            {userRole === "admin" ? "Admin" : "Member"}
          </span>
        </div>

        <span className="date-text">March 1, 2026</span>

        <div className="notification-container">
          <button
            className="icon-btn"
            onClick={() => setOpenNotifications((v) => !v)}
          >
            🔔
          </button>

          {openNotifications && (
            <div className="notification-dropdown">
              <h4 className="dropdown-title">Notifications</h4>

              <div className="notification-list">
                {notifications.map((item, index) => (
                  <div key={index} className="notification-item">
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="topbar-logout-btn" onClick={handleLogoutClick}>
          Log Out
        </button>
      </div>
    </header>
  );
}