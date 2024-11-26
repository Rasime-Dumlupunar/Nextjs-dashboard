import Image, {StaticImageData} from "next/image";

type Props = {
    label: string,
    icon: string | StaticImageData;
    value: number | string,
};

const InfoCard = ({ label, icon, value }: Props) => {
    return (
      <div className="bg-white rounded-lg p-3 flex justify-between items-center">
        <div>
          <h5 className="text-gray-700 whitespace-nowrap text-xs md:text-base" >{label}</h5>
          <p className="font-bold text-xl md:text-2xl">{value.toLocaleString()}</p>
        </div>
        <Image src={icon} alt='icon' className="size-14" width={24}  
        height={24} />
      </div>
    );
  };

export default InfoCard;
