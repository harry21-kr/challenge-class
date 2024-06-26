import { TDeal } from "@/types/Deal.type";
import Image from "next/image";

interface DealCardProps {
  deal: TDeal;
}

const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const { title, imgURL, price, location, likesCount } = deal;
  return (
    <div>
      <div className="relative aspect-square">
        <Image src={imgURL} alt={title} fill className="object-cover" />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
};

export default DealCard;
