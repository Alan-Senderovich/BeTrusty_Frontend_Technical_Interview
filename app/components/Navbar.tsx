import { navbarItems } from "@/constants";
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

export const icons = {
  Home: IoHomeOutline,
  Profile: LiaIdCardSolid,
  Performance: IoSpeedometerOutline,
  Extensions: PiSquaresFour,
  Key: IoKeyOutline,
  Notifications: FaRegBell,
};

const Navbar = () => {
  return (
    <article className="flex bg-black w-full justify-center items-center py-8 gap-6 md:gap-0 md:flex-col md:justify-between md:w-[90px] md:py-6">
      <div className="flex gap-6 md:gap-0 md:flex-col">
        <Link
          href="/"
          className="hidden md:flex md:mb-4 h-max border-b-[1px] border-gray pb-1 mb-4"
        >
          <FaRegRectangleList size={30} />
        </Link>
        <div className="flex gap-6 md:flex-col md:pt-6 md:gap-0">
          {navbarItems.map((item, index) => {
            const Icon = icons[item.name];
            const isHiddenMobile =
              item.name === "Key" || item.name === "Profile";
            return (
              <Link
                href={item.url}
                key={index}
                className={`navbar__item ${isHiddenMobile && "hidden"}`}
              >
                {Icon && <Icon size={30} />}
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <Link href="/configuracion" className="navbar__item" data-testid="settings-item-btn">
          <IoSettingsOutline size={30} />
        </Link>
      </div>
    </article>
  );
};

export default Navbar;
