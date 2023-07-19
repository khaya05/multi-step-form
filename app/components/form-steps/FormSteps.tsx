import useCustomHook from '@/hooks/useCustomHook';
import Button from '../Button';

export default function FormSteps() {
  const { step, steps, currentIndex } = useCustomHook();

  return (
    <div
      className="
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
        "
    >
      <div
        className="
          h-[10.5rem]
          bg-mobile-img 
          bg-no-repeat
          md:bg-desktop-img
          md:h-[568px]
          md:w-[274px]
        "
      ></div>
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
        <div className="w-full my-4 bg-white">
          <Button />
        </div>
      </div>
    </div>
  );
}
