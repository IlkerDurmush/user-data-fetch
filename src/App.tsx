import { useEffect, useState } from "react";
import "./App.css";
import type { User } from "./types/User";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error loading users.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <aside className="sidebar">
        <UserList users={users} onUserSelect={setSelectedUser} />
      </aside>
      <main className="main">
        {selectedUser ? (
          <UserDetails user={selectedUser} />
        ) : (
          <p>Select a user to view details</p>
        )}
      </main>
    </div>
  );
}

export default App;
