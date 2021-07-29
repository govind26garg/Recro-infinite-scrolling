import React, { useState, useEffect } from "react";
// Components
import User from "./User";
// Styles
import "./User.styles.css";

// API
import { getUsers } from "./API";

const Home = () => {
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (Math.round(scrollHeight - scrollTop) === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getUsers(page);
      let a = newUsers.filter((ele, index) => {
        return index !==0;
      });

      let b = a.map((ele) => {
        return ele.airline;
      });
      setUsers((prev) => [...prev, ...b]);
      setLoading(false);
    };

    loadUsers();
  }, [page]);

  return (
    <div className="App">
      <div onScroll={handleScroll} className="cards_wrap">
        {users && users.map((user, index) => <User key={index} user={user} />)}
      </div>
      {loading && <div className="loading">Loading ...</div>}
    </div>
  );
};

export default Home;
