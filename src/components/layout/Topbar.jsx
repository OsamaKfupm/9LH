import { useState } from "react";

export default function Topbar({ userRole, setUserRole }) {
  const [openNotifications, setOpenNotifications] = useState(false);

  const notifications = [
    { title: "New family member", text: "Ahmed was added to the tree" },
    { title: "Event updated", text: "Family reunion time changed" },
    { title: "New announcement", text: "Check latest family news" },
    { title: "Reminder", text: "Event tomorrow at 6 PM" },
  ];

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">Family Portal</h1>
      </div>

      <div className="topbar-right">
        <div className="role-switch">
          <button
            className={userRole === "member" ? "role-toggle active-toggle" : "role-toggle"}
            onClick={() => setUserRole("member")}
          >
            Member
          </button>

          <button
            className={userRole === "admin" ? "role-toggle active-toggle" : "role-toggle"}
            onClick={() => setUserRole("admin")}
          >
            Admin
          </button>
        </div>

        <span className="date-text">March 1, 2026</span>

        <div className="notification-container">
        <button className="icon-btn" onClick={() => setOpenNotifications((v) => !v)}>
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
      </div>
    </header>
  );
}