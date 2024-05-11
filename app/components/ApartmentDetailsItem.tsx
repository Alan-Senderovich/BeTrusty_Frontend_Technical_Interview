import React from "react";

interface ApartmentDetailsItemProps {
  children: React.ReactNode;
}

const ApartmentDetailsItem = ({ children }: ApartmentDetailsItemProps) => {
  return <li className="list-none flex gap-4 py-2 items-center">{children}</li>;
};

export default ApartmentDetailsItem;
