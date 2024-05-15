interface ApartmentDetailsItemProps {
  icon: React.ReactNode;
  text: string;
}

const ApartmentDetailsItem = ({ icon, text }: ApartmentDetailsItemProps) => {
  return (
    <div className="flex items-center gap-4 pb-4">
      <div className="icon">{icon}</div>
      <p className="text">{text}</p>
    </div>
  );
};

export default ApartmentDetailsItem;
