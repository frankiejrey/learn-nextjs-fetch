import { useState, useEffect } from "react";
import Link from "next/link";

export default function ClientSideRendering({ data }) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }  
    fetchApi();  
  }, [ ]);

  return (
    <div>
      <h1>Next JS Fetch and Display data from and API</h1>

      {users.map(event => (
        <div key={event.name}>
          <p>Name: {event.name}</p>
          <Link href={`/users-ssr/${event.id}`}>View more</Link>
          <hr></hr>
        </div>
      ))}
    </div>
  )
};
