'use client';

const FinishingUp = () => {
  const addOns = [
    { name: 'Online service', price: 1 },
    { name: 'Larger storage', price: 2 },
  ];

  return (
    <div>
      <h2 className="title">Finishing up</h2>
      <p className="description">
        Double-check everything looks OK before confirming.
      </p>

      <div>
        <div className="bg-very-light-gray rounded-[8px] pt-4 pb-6">
          <div className=" border-b-gray border-b w-[89%] mx-auto pb-6 mb-6">
            <div className="text-denim font-medium font-base">
              Arcade (Monthly)
            </div>

            <div className="flex justify-between items-center">
              <button className="underline text-[14px] text-gray hover:text-purple">
                change
              </button>
              <p className='total'>$9/mo</p>
            </div>
          </div>

          <div
            className="flex flex-col  items center gap-4 w-[89%] mx-auto"
          >
            {addOns.map(({ name, price }) => (
              <div
                key={name.replaceAll(' ', '-')}
                className="
                flex 
                justify-between 
                items-center
              "
              >
                <p className='gray-label'>{name}</p>
                <p className='addOn-total'>+${price}/mo</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
            flex 
            justify-between 
            items-center 
            w-[89%] 
            mx-auto 
            mt-[1.62rem]
          "
      >
          <p className='gray-label'>Total(per month)</p>
          <p className='grand-total'>+$12/mo</p>
        </div>
      </div>
    </div>
  );
};

export default FinishingUp;
