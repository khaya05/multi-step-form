'use client';

import useCustomHook from "@/hooks/useCustomHook";

const Button = () => {
  const { next, back} = useCustomHook()
  
  return (
    <div className="flex justify-between items-center w-full">
      <button onClick={back}>Go Back</button>
      <button onClick={next}>Next Step</button>
    </div>
  );
};

export default Button;
