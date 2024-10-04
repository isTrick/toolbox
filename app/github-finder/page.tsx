'use client'

import { useState } from "react";
import Search from "../components/Search"
import { UserProps } from "@/types/user";
import Header from "../components/Header";

export default function GithubFinder() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)

    const data = await res.json()

    const {avatar_url, login, location, followers, following} = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    };

    setUser(userData);
    }

  return (
    <div className="h-screen pr-96 pl-96 pt-40 pb-40">
      <Header />
      <h1>Github Finder</h1>
      <Search loadUser={loadUser}/>
      {user && <p>{user.login}</p>}
    </div>
  )
}