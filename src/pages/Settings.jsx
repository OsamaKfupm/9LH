export default function Settings({ userRole }) {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <h2>Settings</h2>
        <p>Manage application preferences and family portal options</p>
      </section>

      <section className="dashboard-card settings-page">
        <div className="settings-section">
          <div className="section-head">
            <h3>Theme</h3>
          </div>

          <div className="settings-row">
            <span>Select theme mode</span>
            <select>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>

        {userRole === "admin" && (
          <div className="settings-section">
            <div className="section-head">
              <h3>Family Group Management</h3>
              <span className="admin-badge">ADMIN</span>
            </div>

            <div className="settings-row">
              <span>Regenerate invitation link</span>
              <button>Generate</button>
            </div>

            <div className="settings-row">
              <span>Expire current invitation link</span>
              <button className="secondary-btn">Expire Link</button>
            </div>
          </div>
        )}

        <div className="settings-section">
          <div className="section-head">
            <h3>Notifications</h3>
          </div>

          <div className="settings-row">
            <span>Email notifications</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="settings-row">
            <span>Push notifications</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </section>
    </div>
  );
}