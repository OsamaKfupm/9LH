export default function Profile({ currentUser, userRole }) {
  return (
    <div className="dashboard-page">
      <section className="dashboard-hero">
        <h2>Profile</h2>
        <p>Account information</p>
      </section>

      <section className="dashboard-card">
        <p><strong>Name:</strong> {currentUser?.fullName || "Not available"}</p>
        <p><strong>Email:</strong> {currentUser?.email || "Not available"}</p>
        <p><strong>Role:</strong> {userRole === "admin" ? "Admin" : "Member"}</p>
      </section>
    </div>
  );
}