import useCustomHook from '@/hooks/useCustomHook';
import Button from '../Button';

export default function FormSteps() {
  const { step, steps, currentIndex } = useCustomHook();

  return (
    <div
      className="
        relative
        h-full
        w-[375px]
        mx-auto
        md:flex
        md:justify-center
        md:items-center
        md:static
        md:w-full
        md:h-fit
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
      <div className='h-full flex flex-col justify-between items-center'>
        <div
          className="
          relative
          top-[-4.5rem]
          left-[4.3%]
          bg-white
          w-[91%]
          px-6
          py-8
          rounded-[10px]
          shadow-xl
          md:static
          md:top-0
          md:left-0
          md:shadow-none
          md:px-0
          md:py-0
          md:mr-[5.25rem]
          md:w-[450px]
        "
        >
          {step}
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
