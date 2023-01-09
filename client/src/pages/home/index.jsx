import React from "react";
import UserSearch from "./components/UserSearch";

const Home = () => {
  return (
    <div className="flex gap-5">
      <div className="w-96">
        <UserSearch />
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
