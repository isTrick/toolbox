"use client";

import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "@/types/user";
/* import Header from "../components/Header"; */
import { widgetStyle } from "../assets/styles/globalStyles";
import User from "../components/User";
import Error from "../components/Error";

export default function GithubFinder() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const LoadUser = async (username: string) => {
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following, name } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
      name,
    };

    setError(false);
    setUser(userData);
  };
  return (
    <div className="h-screen pr-96 pl-96 pt-40 pb-40">
      {/* <Header/> */}
      <div
        className={`${widgetStyle} grid grid-cols-2 grid-rows-1 justify-center items-center h-5/6`}
      >
        <Search className="h-max" loadUser={LoadUser} />
        <div className="">
          {user && <User {...user} />} {error && <Error />}
        </div>
      </div>
    </div>
  );
}
