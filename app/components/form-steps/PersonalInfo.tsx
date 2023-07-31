'use client';

import { back, next } from '@/store/stepsSlice';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type InputType = {
  label: string;
  type: string;
  name: string;
  placeholder: string;
};

const inputs: InputType[] = [
  {
    label: 'name',
    type: 'text',
    placeholder: 'e.g. Stephen King',
    name: 'name',
  },
  {
    label: 'email address',
    type: 'email',
    name: 'email',
    placeholder: 'e.g .Stephenking@lorem.com',
  },
  {
    label: 'phone number',
    type: 'text',
    name: 'phone',
    placeholder: 'e.g. +1 234 567 890',
  },
];

const PersonalInfo = () => {
  const schema: ZodType<InputType> = z.object({
    name: z.string().min(2).max(30),
    email: z.string().email(),
    phone: z.string().max(12),
  });

  const { register, handleSubmit } = useForm<InputType>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <h2 className="title">Personal info</h2>
      <legend className="description">
        Please provide you name, email address, and phone number.
      </legend>

      <div>
        {inputs.map(({ label, type, placeholder, name }) => {
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
                name={name}
                placeholder={placeholder}
                // required={true}
                {...register(name)}
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
