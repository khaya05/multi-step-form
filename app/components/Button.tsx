'use client';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { back, next } from '@/store/stepsSlice';

const Button = () => {
  const dispatch = useDispatch();
  const currentIndex = useSelector((state: any) => state.steps.currentIndex);

  const navigate = (direction: string) => {
    if (direction === 'back') {
      dispatch(back);
    }
    dispatch(next);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <button
        onClick={() => navigate('back')}
        className="
          text-[14px] 
          text-gray 
          font-medium"
      >
        Go Back
      </button>

      <button
        onClick={() => navigate('next')}
        className="
          bg-denim 
          text-white 
          w-[6.0625rem] 
          h-10 
          rounded-[0.25rem] 
          text-[14px] 
          font-medium"
      >
        Next Step
      </button>
    </div>
  );
};

export default Button;
