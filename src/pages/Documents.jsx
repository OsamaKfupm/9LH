export default function Documents({ userRole }) {
    return (
      <div className="dashboard-page">
        <section className="dashboard-hero">
          <h2>Documents</h2>
          <p>Shared family files and records</p>
        </section>
  
        <section className="dashboard-card">
          <h3>Documents Library</h3>
          <p>
            {userRole === "admin"
              ? "Admin can upload, organize, and manage family documents."
              : "Members can view and access shared family documents."}
          </p>
        </section>
      </div>
    );
  }