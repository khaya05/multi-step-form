'use client';

type InputType = {
  label: string;
  type: string;
  placeholder: string;
};

const PersonalInfo = () => {
  const inputs: InputType[] = [
    { label: 'name', type: 'text', placeholder: 'e.g. Stephen King' },
    {
      label: 'email address',
      type: 'email',
      placeholder: 'e.g .Stephenking@lorem.com',
    },
    { label: 'phone number', type: 'text', placeholder: 'e.g. +1 234 567 890' },
  ];

  return (
    <div className='border'>
      <h2 className='title'>Personal info</h2>
      <p className='description mb-[2.19rem]'>Please provide you name, email address, and phone number.</p>

      <form>
        {inputs.map(({ label, type, placeholder }) => {
          return (
            <div key={label} className='mb-6'>
              <label className="block text-[14px] capitalize font-normal text-denim" htmlFor={label}>
                {label}
              </label>

              <input
                id={label}
                type={type}
                placeholder={placeholder}
                className="
                  block
                  ring-[1px]
                  ring-border-color
                  rounded-[8px]
                  w-full
                  h-[3rem]
                  pl-[16px]
                  font-medium
                  focus:outline-0
                  focus:ring-[1px]
                  focus:ring-purple
                  hover:cursor-pointer
                  "
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default PersonalInfo;
