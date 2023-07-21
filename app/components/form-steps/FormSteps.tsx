import useCustomHook from '@/hooks/useCustomHook';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import StepsIndicator from './StepsIndicator';
import { next } from '@/store/stepsSlice';

export default function FormSteps() {
  const dispatch = useDispatch()
  const steps = useSelector((state: any) => state.steps.steps)
  const currentIndex = useSelector((state: any) => state.steps.currentIndex)
  const step = steps[currentIndex]

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(next())
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="
        shadow-xl
        relative
        w-[375px]
        custom-height-2
        mx-auto
        md:flex
        md:h-full
        md:justify-center
        md:items-center
        md:static
        md:w-full
        md:gap-[6.25rem]
        md:shadow-none
        "
    >
      <div
        className="
          h-[10.5rem]
          bg-mobile-img 
          bg-no-repeat
          pt-[2.13rem]
          md:bg-desktop-img
          md:h-[568px]
          md:w-[274px]
          md:px-8
          md:py-10
        "
      >
        <StepsIndicator />
      </div>
      <div
        className="
          flex 
          flex-col 
          items-center 
          justify-between
          bg-light-blue
          md:bg-white
          md:mr-[5.25rem] 
          md:w-[450px] 
          md:relative 
          md:h-[568px]
          md:justify-between
          custom-height
        "
      >
        <div
          className="
            relative
            top-[-4.5rem]
            w-[91%]
            md:grid 
            md:place-items-center 
            md:h-full 
            md:w-full
            md:static
            md:top-0
            md:left-0
        "
        >
          <div
            className="
              bg-white
              px-6
              py-8
              rounded-[10px]
              shadow-xl
              md:px-0
              md:py-0
              md:shadow-none
              md:gap-4
        "
          >
            {step}
          </div>
        </div>
        <div className="w-full mt-4 bg-white h-[4.5rem] px-4 grid place-items-center md:mb-4 md:px-0">
          <Button />
        </div>
      </div>
    </form>
  );
}
