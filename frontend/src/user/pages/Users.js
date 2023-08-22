import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Leo",
      image:
        "https://www.looper.com/img/gallery/eddie-murphy-is-ready-to-voice-donkey-again-whether-shrek-comes-or-not/intro-1675020694.jpg",
      places: 4,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
