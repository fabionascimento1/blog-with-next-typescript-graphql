import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/" as="/">
        <a>Fábio do Nascimento</a>
      </Link>
    </div>
  );
};

export default Logo;
