import Image from 'next/image';

type Props = {
  name: string;
  price: number;
};

const PlanComponent: React.FC<Props> = ({ name, price }) => {
  return (
    <div
      className='
        rounded-[8px]
        ring-border-color
        ring-[1px]
        hover:bg-very-light-gray
        hover:ring-purple
        hover:cursor-pointer
        px-4
        py-5
        flex
        gap-4
        md:w-[8.625rem]
        md:h-40
        md:flex-col
        md:justify-between
        md:items-start
        md:gap-0
      '
      >
      <Image
        width={40}
        height={40}
        src={`/images/icon-${name}.svg`}
        alt="icon"
      />

      <div>
        <p className='capitalize text-denim text-base font-medium'>{name}</p>
        <p className='font-base text-gray text-[14px]'>${price}/mo</p>
      </div>
    </div>
  );
};

export default PlanComponent;
