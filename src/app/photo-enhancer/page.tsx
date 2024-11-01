import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'

export default async function PhotoEnhancer() {
  let loggedIn = false

  try {
    const supabase = createServerComponentClient( {cookies} )
    const { data: { session } } = await supabase.auth.getSession()

    if (session) loggedIn = true;
  } catch(error) {
    console.log("Home", error)
  } finally {
    if (loggedIn) redirect("/", RedirectType.replace)
  }

  return ( <div className="bg-green-400 w-screen h-screen"></div> )
} 