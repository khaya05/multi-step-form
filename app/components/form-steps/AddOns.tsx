'use client';

type AddOn = {
  name: string;
  desc: string;
  price: number;
};

const AddOns = () => {
  const addOns: AddOn[] = [
    {
      name: 'Online service',
      desc: 'Access to multiplayer games',
      price: 1,
    },
    {
      name: 'Larger storage',
      desc: 'Extra 1TB cloud save',
      price: 2,
    },
    {
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      price: 2,
    },
  ];

  return (
    <div>
      <p className="title">Pick add-ons</p>
      <p className="description">
        Add-ons help enhance your gaming experience.
      </p>
      <form className="flex flex-col gap-6">
        {addOns.map(({ name, desc, price }) => {
          const id: string = name.replaceAll(' ', '_');

          return (
            <fieldset
              key={id}
              className="
                ring-[1px]
                rounded-[8px]
                ring-border-color
                p-6
                flex
                items-center
                gap-3
                md:gap-4
                hover:ring-purple
                hover:bg-very-light-gray
              "
            >
              <input
                type="checkbox"
                className="
                w-5
                h-5
                hover:cursor-pointer
                "
              />
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="text-denim font-medium">{name}</p>
                  <p className="text-gray text-[14px]">{desc}</p>
                </div>
                <p className='text-purple text-[14px]'>+${price}/mo</p>
              </div>
            </fieldset>
          );
        })}
      </form>
    </div>
  );
};

export default AddOns;
