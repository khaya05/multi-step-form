'use client';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { back, next } from '@/store/stepsSlice';
import { AppDispatch } from '@/store/store';
import { clsx } from 'clsx';

const Button = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentIndex = useSelector((state: any) => state.steps.currentIndex);
  const steps = useSelector((state: any) => state.steps.steps);

  const secondLastStep = steps.length - 2;
  const lastStep = steps.length - 1;

  const navigate = (direction: string) => {
    if (direction === 'back') {
      dispatch(back());
    } else dispatch(next());
  };

  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={() => navigate('back')}
        className={clsx(
          'text-[14px]',
          'text-gray',
          'font-medium',
          'visible',
          'hover:text-denim-hover',
          currentIndex === 0 && 'invisible'
        )}
      >
        Go Back
      </button>

      <button
        onClick={() => navigate('next')}
        className={clsx(
          'bg-denim ',
          'text-white ',
          'w-[6.0625rem] ',
          'h-10 ',
          'rounded-[0.25rem] ',
          'text-[14px] ',
          'font-medium',
          currentIndex === lastStep && 'invisible',
          currentIndex !== secondLastStep && 'hover:bg-denim-hover ',
          currentIndex === secondLastStep && 'bg-purple',
          currentIndex === secondLastStep && 'hover:bg-purple-hover'
        )}
      >
        {currentIndex === secondLastStep ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default Button;
