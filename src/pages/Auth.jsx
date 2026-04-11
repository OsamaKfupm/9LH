import { useState } from "react";

export default function Auth({ onAuthSuccess }) {
  const [mode, setMode] = useState("login");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "member",
  });

  const [error, setError] = useState("");

  function handleLoginSubmit(e) {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("silahUsers")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (!matchedUser) {
      setError("Invalid email or password.");
      return;
    }

    onAuthSuccess(matchedUser);
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    setError("");

    if (
      !signupData.fullName.trim() ||
      !signupData.email.trim() ||
      !signupData.password.trim() ||
      !signupData.confirmPassword.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("silahUsers")) || [];

    const alreadyExists = users.some((user) => user.email === signupData.email);

    if (alreadyExists) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = {
      id: Date.now().toString(),
      fullName: signupData.fullName,
      email: signupData.email,
      password: signupData.password,
      role: signupData.role,
    };

    localStorage.setItem("silahUsers", JSON.stringify([...users, newUser]));
    onAuthSuccess(newUser);
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">SILAH</div>
        <h1 className="auth-title">Family Portal Access</h1>
        <p className="auth-subtitle">
          {mode === "login"
            ? "Log in to access your family portal"
            : "Create a new account to join the family portal"}
        </p>

        <div className="auth-toggle">
          <button
            type="button"
            className={mode === "login" ? "auth-tab active-auth-tab" : "auth-tab"}
            onClick={() => {
              setMode("login");
              setError("");
            }}
          >
            Log In
          </button>

          <button
            type="button"
            className={mode === "signup" ? "auth-tab active-auth-tab" : "auth-tab"}
            onClick={() => {
              setMode("signup");
              setError("");
            }}
          >
            Sign Up
          </button>
        </div>

        {error && <div className="auth-error">{error}</div>}

        {mode === "login" ? (
          <form onSubmit={handleLoginSubmit} className="auth-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Log In
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>

            <div className="form-group">
              <label>Account Type</label>
              <select
                value={signupData.role}
                onChange={(e) =>
                  setSignupData({ ...signupData, role: e.target.value })
                }
              >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button type="submit" className="auth-submit-btn">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}