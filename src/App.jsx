import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";

import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import FamilyTreePage from "./pages/FamilyTreePage";
import Announcements from "./pages/Announcements";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import Documents from "./pages/Documents";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";
import Analytics from "./pages/Analytics";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

export default function App() {
  const [userRole, setUserRole] = useState("member");

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar userRole={userRole} />

        <div className="main-content">
          <Topbar userRole={userRole} setUserRole={setUserRole} />

          <main className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard userRole={userRole} />} />
              <Route path="/events" element={<Events userRole={userRole} />} />
              <Route path="/family-tree" element={<FamilyTreePage userRole={userRole} />} />
              <Route path="/announcements" element={<Announcements userRole={userRole} />} />
              <Route path="/messages" element={<Messages userRole={userRole} />} />
              <Route path="/profile" element={<Profile userRole={userRole} />} />
              <Route path="/settings" element={<Settings userRole={userRole} />} />

              <Route path="/documents" element={<Documents userRole={userRole} />} />
              <Route path="/gallery" element={<Gallery userRole={userRole} />} />
              <Route path="/members" element={<Members userRole={userRole} />} />
              <Route path="/analytics" element={<Analytics userRole={userRole} />} />
              <Route path="/admin-dashboard" element={<AdminDashboard userRole={userRole} />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}