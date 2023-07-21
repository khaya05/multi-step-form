'use client';

import { back, next } from '@/store/stepsSlice';
import { useDispatch } from 'react-redux';

type InputType = {
  label: string;
  type: string;
  placeholder: string;
};

const inputs: InputType[] = [
  { label: 'name', type: 'text', placeholder: 'e.g. Stephen King' },
  {
    label: 'email address',
    type: 'email',
    placeholder: 'e.g .Stephenking@lorem.com',
  },
  { label: 'phone number', type: 'text', placeholder: 'e.g. +1 234 567 890' },
];

const PersonalInfo = () => {
  return (
    <div>
      <h2 className="title">Personal info</h2>
      <legend className="description">
        Please provide you name, email address, and phone number.
      </legend>

      <div>
        {inputs.map(({ label, type, placeholder }) => {
          return (
            <div key={label} className="mb-6">
              <label
                className="block text-[14px] capitalize font-normal text-denim"
                htmlFor={label}
              >
                {label}
              </label>

              <input
                id={label}
                type={type}
                placeholder={placeholder}
                // required={true}
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
      </div>
    </div>
  );
};

export default PersonalInfo;
