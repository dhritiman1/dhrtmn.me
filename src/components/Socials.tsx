import { Link as L, Links } from "@/lib/links";
import Link from "next/link";

type Props = {
  links: Links;
};

const Socials = ({ links }: Props) => {
  return (
    <>
      <p className="py-2">
        find me on{" "}
        {links.map((link) => {
          return <NthSocial key={link.key} name={link.name} url={link.url} />;
        })}
        .
      </p>
      <p className="pb-2">
        send me a{" "}
        <Link
          className="underline text-[#eeeeee]"
          href="mailto:dhritiman821@gmail.com"
        >
          mail
        </Link>
        .
      </p>
      <p>
        buy me a{" "}
        <Link
          className="underline text-[#eeeeee]"
          href="https://www.buymeacoffee.com/wvrn"
        >
          coffee
        </Link>
      </p>
    </>
  );
};

const NthSocial = ({ name, url }: L) => {
  return (
    <>
      <Link href={url}>{name}</Link>
      {name !== "instagram" && ","}{" "}
    </>
  );
};

export default Socials;
