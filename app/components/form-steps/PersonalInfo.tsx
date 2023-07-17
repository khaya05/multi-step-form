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
    <>
      <h2>Personal info</h2>
      <p>Please provide you name, email address, and phone number.</p>

      <form>
        {inputs.map(({ label, type, placeholder }) => {
          return (
            <>
              <label htmlFor={label}>{label}</label>;
              <input id={label} type={type} placeholder={placeholder} />
            </>
          );
        })}
      </form>
    </>
  );
};

export default PersonalInfo;
