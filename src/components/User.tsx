import { UserProps } from "@/src/types/user";
import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
  name
}: UserProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-1">
      <Image
        className="rounded-full border-neutral-200 border"
        src={avatar_url}
        width="200"
        height="200"
        alt={login}
      />
      <h2 className="text-xl font-semibold">{login}</h2>
      <p className="mt-[-5px]">{name}</p>
      {location && (
        <p className="flex flex-row justify-center items-center text-center">
          <MdLocationPin /> <span className="mt-[1px]">{location}</span>
        </p>
      )}
      <div>
        <div>
          <p>{followers} seguidores</p>
        </div>
        <div>
          <p>{following} seguindo</p>
        </div>
      </div>
      <Link
        className="border-neutral-600 bg-white border p-2 rounded w-fit text-black font-semibold mt-3"
        href={`/repos/${login}`}
      >
        Ver projetos
      </Link>
    </div>
  );
};

export default User;
