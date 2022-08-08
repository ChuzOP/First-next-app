import React, { CSSProperties, FC } from "react";
import Link from "../../node_modules/next/link";
import { useRouter } from "../../node_modules/next/router";

const style: CSSProperties = {
  color: "yellow",
  fontWeight: "bolder",
  fontSize: "20px"
};

interface Props{
  text: string;
  href: string;
}

const ActiveLink : FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};

export default ActiveLink;
