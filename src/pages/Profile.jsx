export default function Messages({ userRole }) {
  const conversations = [
    {
      id: 1,
      name: "Fatima Al-Rashid",
      preview: "See you at the reunion!",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Mohammed Bin Khalid",
      preview: "Thanks for the update",
      time: "1h ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Sara Al-Mansour",
      preview: "I'll upload the photos soon",
      time: "3h ago",
      unread: 1,
      online: true,
    },
    {
      id: 4,
      name: "Abdullah Al-Rashid",
      preview: "Can we discuss the event?",
      time: "1d ago",
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    { id: 1, sender: "them", text: "Hi Ahmed! How are the reunion preparations going?", time: "10:30 AM" },
    { id: 2, sender: "me", text: "Going well. The venue is confirmed and we have 18 RSVPs so far.", time: "10:32 AM" },
    { id: 3, sender: "them", text: "That's great news! Should I bring anything?", time: "10:35 AM" },
    { id: 4, sender: "me", text: "Just yourself and the family. We have everything covered.", time: "10:36 AM" },
    { id: 5, sender: "them", text: "See you at the reunion!", time: "10:38 AM" },
  ];

  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <h2>Messages</h2>
        <p>Private conversations with family members</p>
        <span className="page-tag">WIREFRAME - MESSAGES</span>
      </section>

      <section className="messages-layout">
        <div className="dashboard-card messages-sidebar">
          <div className="messages-search">🔍 Search conversations</div>

          <div className="messages-list">
            {conversations.map((chat) => (
              <div key={chat.id} className={`conversation-item ${chat.id === 1 ? "active-conversation" : ""}`}>
                <div className="conversation-avatar">{chat.name.charAt(0)}</div>

                <div className="conversation-main">
                  <div className="conversation-top">
                    <strong>{chat.name}</strong>
                    <span>{chat.time}</span>
                  </div>

                  <div className="conversation-bottom">
                    <span>{chat.preview}</span>
                    {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card chat-panel">
          <div className="chat-header">
            <div>
              <h3>Fatima Al-Rashid</h3>
              <span className="online-status">Online</span>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={msg.sender === "me" ? "message-row mine" : "message-row"}
              >
                <div className={msg.sender === "me" ? "chat-bubble mine-bubble" : "chat-bubble"}>
                  <p>{msg.text}</p>
                  <span>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input-row">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}