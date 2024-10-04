import ToolWidget from "./components/ToolWidget";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center h-screen pr-96 pl-96 pt-40 pb-40">
      <Header />
      <ToolWidget
        toolIcon="/nextjs.png"
        toolName="Next.js"
        toolDescription="The React framework for production"
        toolLink="https://nextjs.org"
      />
      <ToolWidget
        toolIcon="/tailwindcss.png"
        toolName="Tailwind CSS"
        toolDescription="Rapidly build modern websites without ever leaving your HTML"
        toolLink="https://tailwindcss.com"
      />
      <ToolWidget
        toolIcon="/typescript.png"
        toolName="TypeScript"
        toolDescription="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
        toolLink="https://www.typescriptlang.org"
      />
      <ToolWidget
        toolIcon="/react.png"
        toolName="React"
        toolDescription="A JavaScript library for building user interfaces"
        toolLink="https://reactjs.org"
      />
      <ToolWidget
        toolIcon="/vercel.png"
        toolName="Vercel"
        toolDescription="Static hosting for the web"
        toolLink="https://vercel.com"
      />
      <ToolWidget
        toolIcon="/github.png"
        toolName="GitHub"
        toolDescription="The platform for building software"
        toolLink="https://github.com"
      />
    </div>
  );
}
