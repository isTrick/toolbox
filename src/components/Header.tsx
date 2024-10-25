import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  return <header className="flex flex-row justify-between text-center col-span-2 bg-neutral-900 border-neutral-600 border p-2 rounded-lg text-neutral-200 mb-10">
    <h1 className="text-xl bold">Tricky Tools</h1>
    <div>
      <a href="">Home</a>
      <a className="" href="">Tools <RiArrowDropDownLine /></a>
      <a href="">Github</a>
      <a href="">Dark Mode</a>
    </div>
  </header>
}

