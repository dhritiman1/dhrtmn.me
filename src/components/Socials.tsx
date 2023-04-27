import { Link as L, Links as Ls } from "@/lib/links";
import Link from "next/link";

type Props = {
  links: Ls;
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
      <p>
        send me a <Link href="mailto:dhritiman821@gmail.com">mail</Link>.
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
