import FamilyTree from "../components/familyTree";

export default function FamilyTreePage({ userRole }) {
  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <div className="section-head">
          <h2>Family Tree</h2>
          {userRole === "admin" && <button>Add Member</button>}
        </div>

        <p>
          {userRole === "admin"
            ? "Admin can manage and update the family tree."
            : "Members can explore the family tree and suggest updates."}
        </p>
      </div>

      <div className="tree-wrapper">
        <FamilyTree />
      </div>
    </div>
  );
}