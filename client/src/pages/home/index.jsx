import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList";

import { io } from "socket.io-client";

const socket = io("http://localhost:6000");
const Home = () => {
  const [searchKey, setSearchKey] = React.useState("");
  const { selectedChat, user } = useSelector((state) => state.userReducer);
  const [onlineUsers, setOnlineUsers] = React.useState([]);
  useEffect(() => {
    // join the room
    if (user) {
      socket.emit("join-room", user._id);
      socket.emit("came-online", user._id);

      socket.on("online-users-updated", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [user]);
  return (
    <div className="flex gap-5">
      <div className="w-96">
        <UserSearch searchKey={searchKey} setSearchKey={setSearchKey} />
        <UsersList
          searchKey={searchKey}
          socket={socket}
          onlineUsers={onlineUsers}
        />
      </div>
    </div>
  );
};

export default Home;
