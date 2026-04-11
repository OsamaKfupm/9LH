export default function Events({ userRole }) {
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
        <h2>Events</h2>
      </section>

      <section className="dashboard-card">
        <div className="section-head">
          <h3>Upcoming Events</h3>
          {userRole === "admin" && <button>Create Event</button>}
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
      </section>
    </div>
  );
}