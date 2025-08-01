import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <img src="/agrodynamiki.png" alt="The Wild Oasis logo" />
    </Link>
  );
}

export default Logo;
