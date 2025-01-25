import React, { useState } from "react";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const handleLogin = () => alert(`Logged in as: ${email}`);
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default LoginPage;
