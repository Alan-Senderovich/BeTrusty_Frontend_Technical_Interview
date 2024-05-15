import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex-between bg-black px-5 py-4">
      <Link href="/">
        <Image
          src="https://i.postimg.cc/rFBkNnK6/logo.webp"
          alt="logo"
          width={100}
          height={50}
          className="w-[130px]"
        />
      </Link>
      <div className="avatar__container">
        <Image alt="avatar" src="/profile.webp" width={35} height={35} />
      </div>
    </header>
  );
};

export default Header;
