import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
import Auth from "./pages/Auth";

import "./App.css";

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}

function AdminRoute({ isAuthenticated, userRole, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("member");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedSession = localStorage.getItem("silahCurrentUser");

    if (savedSession) {
      const parsedUser = JSON.parse(savedSession);
      setCurrentUser(parsedUser);
      setUserRole(parsedUser.role || "member");
      setIsAuthenticated(true);
    }
  }, []);

  function handleLogin(userData) {
    localStorage.setItem("silahCurrentUser", JSON.stringify(userData));
    setCurrentUser(userData);
    setUserRole(userData.role || "member");
    setIsAuthenticated(true);
  }

  function handleLogout() {
    localStorage.removeItem("silahCurrentUser");
    setCurrentUser(null);
    setUserRole("member");
    setIsAuthenticated(false);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <Auth onAuthSuccess={handleLogin} />
            )
          }
        />

        <Route
          path="*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <div className="app-layout">
                <Sidebar
                  userRole={userRole}
                  currentUser={currentUser}
                  onLogout={handleLogout}
                />

                <div className="main-content">
                  <Topbar
                    userRole={userRole}
                    currentUser={currentUser}
                    onLogout={handleLogout}
                  />

                  <main className="page-content">
                    <Routes>
                      <Route
                        path="/"
                        element={<Dashboard userRole={userRole} />}
                      />
                      <Route
                        path="/events"
                        element={<Events userRole={userRole} />}
                      />
                      <Route
                        path="/family-tree"
                        element={<FamilyTreePage userRole={userRole} />}
                      />
                      <Route
                        path="/announcements"
                        element={<Announcements userRole={userRole} />}
                      />
                      <Route
                        path="/messages"
                        element={<Messages userRole={userRole} />}
                      />
                      <Route
                        path="/profile"
                         element={<Profile userRole={userRole} currentUser={currentUser} />}
                      />
                      <Route
                        path="/settings"
                        element={<Settings userRole={userRole} />}
                      />
                      <Route
                        path="/documents"
                        element={<Documents userRole={userRole} />}
                      />
                      <Route
                        path="/gallery"
                        element={<Gallery userRole={userRole} />}
                      />
                      <Route
                        path="/members"
                        element={
                          <AdminRoute
                            isAuthenticated={isAuthenticated}
                            userRole={userRole}
                          >
                            <Members userRole={userRole} />
                          </AdminRoute>
                        }
                      />
                      <Route
                        path="/analytics"
                        element={
                          <AdminRoute
                            isAuthenticated={isAuthenticated}
                            userRole={userRole}
                          >
                            <Analytics userRole={userRole} />
                          </AdminRoute>
                        }
                      />
                      <Route
                        path="/admin-dashboard"
                        element={
                          <AdminRoute
                            isAuthenticated={isAuthenticated}
                            userRole={userRole}
                          >
                            <AdminDashboard userRole={userRole} />
                          </AdminRoute>
                        }
                      />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}