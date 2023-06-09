import { useState } from "react";
import "./App.css";
import user from "./user.json";
import UserCard from "./UserCard";
import { UserCardClass } from "./UserCardClass";

function App() {
  return (
    <>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
      <UserCardClass
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.age}
        address={user.address}
      />
    </>
  );
}

export default App;
