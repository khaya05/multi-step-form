'use client';

import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

const stepsNames: string[] = ['your info', 'select plan', 'add-ons', 'summary'];

function StepsIndicator() {
  const currentIndex = useSelector((state: any) => state.steps.currentIndex);

  return (
    <div
      className="
        flex 
        gap-4 
        mx-auto 
        w-fit
        md:mx-0 
        md:mt-0 
        md:gap-6 
        md:flex-col 
        md:h-full 
      ">
      {stepsNames.map((name, index) => (
        <div
          key={name.replace(' ', '-')}
          className="
            flex 
            items-center
            h-[33px] 
            md:gap-4
          "
        >
          <div
            className={clsx(
              'h-full',
              'w-[33px]',
              'ring-white',
              'rounded-full',
              'text-[14px]',
              'font-bold',
              'grid',
              'place-items-center',
              currentIndex !== index && 'ring-[1px]',
              currentIndex !== index && 'text-white',
              currentIndex === index && 'text-denim',
              currentIndex === index && 'bg-sky-blue',
              currentIndex === index && 'ring-sky-blue'
            )}
          >
            {index + 1}
          </div>

          <div className="hidden h-full md:flex md:flex-col md:justify-between">
            <p className="text-light-blue-text uppercase text-[0.75rem]">
              step {index + 1}
            </p>
            <p className="text-white uppercase text-[14px] font-bold  tracking-[0.0625rem]">
              {name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StepsIndicator;
