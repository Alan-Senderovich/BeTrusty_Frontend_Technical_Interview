import Image from "next/image";

interface OwnerDetailsProps {
  name: string;
}

const OwnerDetails = ({ name }: OwnerDetailsProps) => {
  return (
    <div className="py-6 flex flex-col gap-3">
      <h3 className="text-xl font-semibold">Propietario</h3>
      <div className="flex items-center gap-4">
        <div className="rounded-full overflow-hidden h-auto w-auto">
          <Image alt="avatar" src="/profile.webp" width={50} height={50} />
        </div>
        <p className="w-full lg:w-[75%]">{name}</p>
      </div>
    </div>
  );
};

export default OwnerDetails;
