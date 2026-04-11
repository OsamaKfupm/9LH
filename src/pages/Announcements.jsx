import { useState } from "react";

export default function Announcements({ userRole }) {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "New Family Member Added",
      body: "Welcome baby Layla to the family. Born on February 28, 2026. Mother and baby are doing well.",
      author: "Ahmed Al-Rashid",
      time: "1 day ago",
      pinned: true,
    },
    {
      id: 2,
      title: "Document Upload Request",
      body: "Please upload your identification copies to the Documents section. This is needed for the family registry update.",
      author: "Ahmed Al-Rashid",
      time: "3 days ago",
      pinned: true,
    },
    {
      id: 3,
      title: "Monthly Family Newsletter - March 2026",
      body: "Our March newsletter is now available in the Documents section. Read about recent family achievements, upcoming events, and community news.",
      author: "Sara Al-Mansour",
      time: "1 week ago",
      pinned: false,
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  function handleAddAnnouncement() {
    if (!newTitle.trim() || !newBody.trim()) return;

    const newAnnouncement = {
      id: Date.now(),
      title: newTitle,
      body: newBody,
      author: "Ahmed Al-Rashid",
      time: "Just now",
      pinned: false,
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setNewTitle("");
    setNewBody("");
  }

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <h2>Announcements</h2>
        <p>Important family updates and notices</p>
      </section>

      {userRole === "admin" && (
        <section className="dashboard-card">
          <div className="section-head">
            <h3>New Announcement</h3>
            <span className="admin-badge">ADMIN</span>
          </div>

          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter announcement title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Body</label>
            <textarea
              rows="4"
              placeholder="Write the announcement"
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
            />
          </div>

          <button onClick={handleAddAnnouncement}>Publish Announcement</button>
        </section>
      )}

      <section className="dashboard-card">
        {announcements.map((item) => (
          <div key={item.id} className="announcement-card">
            <div className="announcement-top">
              <div>
                <div className="announcement-title-row">
                  <h4 className="announcement-title">{item.title}</h4>
                  {item.pinned && <span className="mini-badge">PINNED</span>}
                </div>
                <p className="announcement-body">{item.body}</p>
              </div>

              <span className="announcement-time">{item.time}</span>
            </div>

            <div className="announcement-footer">
              <span>Posted by {item.author}</span>
              <button className="link-btn">Mark as Read</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}