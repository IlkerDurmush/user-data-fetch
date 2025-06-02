import React, { useEffect, useState } from "react";
import type { User } from "./types/User";
import UserList from "./components/UserList";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Error loading users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h1>User List</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
