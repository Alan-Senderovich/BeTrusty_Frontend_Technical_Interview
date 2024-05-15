import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black px-5 py-4 items-center flex justify-between">
      <Link href="/">
        <Image src="https://i.postimg.cc/rFBkNnK6/logo.webp" alt="logo" width={100} height={50} className="w-[130px]"/>
      </Link>
      <div className="rounded-full overflow-hidden h-auto w-auto border-2 border-light-blue cursor-pointer">
        <Image alt="avatar" src="/profile.webp" width={35} height={35} />
      </div>
    </header>
  );
};

export default Header;
