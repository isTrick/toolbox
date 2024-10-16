import { Camera } from "lucide-react";

export default function Notification() {
  return (
    <div className="bg-neutral-800 border-neutral-400 border p-2 rounded-lg w-80 h-52 absolute right-3 bottom-3">
      <Camera color="purple" size={32} />
      <p className="font-semibold">Notification title</p>
      <p>Notification description</p>
    </div>
  );
}
