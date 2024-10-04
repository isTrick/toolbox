'use client'

import { useState } from "react";
import Search from "../components/Search"
import { UserProps } from "@/types/user";

export default function GithubFinder() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)

    const data = await res.json()

    if (res.status === 404) {
      setUser(null)
    } else {
      setUser(data)
    }

    console.log(data)
  }

  return (
    <div>
      <h1>Github Finder</h1>
      <Search loadUser={loadUser}/>
    </div>
  )
}