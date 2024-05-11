import Link from "next/link";
import { FaRegBell, FaRegRectangleList } from "react-icons/fa6";
import {
  IoHomeOutline,
  IoKeyOutline,
  IoSettingsOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import { LiaIdCardSolid } from "react-icons/lia";
import { PiSquaresFour } from "react-icons/pi";

const Navbar = () => {
  return (
    <article className="flex bg-black w-full justify-center items-center py-8 gap-6 lg:gap-0 lg:flex-col lg:justify-between lg:w-[90px] lg:py-6">
      <div className="flex gap-6 lg:gap-0 lg:flex-col">
        <Link
          href="/"
          className="hidden lg:flex h-max border-b-[1px] border-gray pb-1 mb-4"
        >
          <FaRegRectangleList size={30} />
        </Link>
        <Link href="/" className="lg:flex h-max lg:mt-8 lg:mb-4">
          <IoHomeOutline size={30} />
        </Link>
        <Link href="/" className="hidden lg:flex h-max lg:mb-4">
          <LiaIdCardSolid size={30} />
        </Link>
        <Link href="/" className="lg:flex h-max lg:mb-4">
          <IoSpeedometerOutline size={30} />
        </Link>
        <Link href="/" className="lg:flex h-max lg:mb-4">
          <PiSquaresFour size={30} />
        </Link>
        <Link href="/" className="hidden lg:flex h-max lg:mb-4">
          <IoKeyOutline size={30} />
        </Link>
        <Link href="/" className="lg:flex h-max lg:mb-4">
          <FaRegBell size={30} />
        </Link>
      </div>
      <div>
        <Link href="/settings">
          <IoSettingsOutline size={30} />
        </Link>
      </div>
    </article>
  );
};

export default Navbar;
