import { useNavigate } from "react-router-dom";

export default function Dashboard({ userRole }) {
  const navigate = useNavigate();

  const events = [
    {
      title: "Family Reunion",
      date: "March 15, 2026",
      time: "6:00 PM",
      location: "Riyadh Grand Hall",
      status: "Attending",
    },
    {
      title: "Grandmother's Birthday",
      date: "March 22, 2026",
      time: "4:00 PM",
      location: "Family Home",
      status: "Maybe",
    },
    {
      title: "Weekend Gathering",
      date: "April 5, 2026",
      time: "3:00 PM",
      location: "Al-Nakheel Park",
      status: "No Response",
    },
  ];

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
      </section>

      <section className="dashboard-main-grid">
        <div className="dashboard-card">
          <div className="section-head">
            <h3>Upcoming Events</h3>
            <button className="link-btn" onClick={() => navigate("/events")}>
              View All
            </button>
          </div>

          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-top">
                <h4 className="event-title">{event.title}</h4>
                <span
                  className={
                    event.status === "Attending"
                      ? "status-badge status-attending"
                      : "status-badge"
                  }
                >
                  {event.status}
                </span>
              </div>

              <div className="event-meta">
                <span>🗓 {event.date}</span>
                <span>◷ {event.time}</span>
              </div>

              <div className="event-location">⌖ {event.location}</div>
            </div>
          ))}

          <div className="helper-strip">
            → Click event card to view details and update RSVP
          </div>
        </div>

        <div>
          <div className="dashboard-card" style={{ marginBottom: "24px" }}>
            <div className="section-head">
              <h3>Gallery</h3>
              <button className="link-btn" onClick={() => navigate("/gallery")}>
                View All
              </button>
            </div>

            <div className="gallery-grid">
              <div className="gallery-box">🖼</div>
              <div className="gallery-box">🖼</div>
              <div className="gallery-box">🖼</div>
              <div className="gallery-box">🖼</div>
            </div>

            <div className="gallery-footer">Recent family photos</div>
          </div>

          <div className="dashboard-card">
            <div className="section-head">
              <h3>Quick Links</h3>
            </div>

            <div className="quick-links">
              <button onClick={() => navigate("/family-tree")}>Family Tree</button>
              <button onClick={() => navigate("/messages")}>Messages</button>
              <button onClick={() => navigate("/announcements")}>Announcements</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}