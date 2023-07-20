'use client';

import FormSteps from './form-steps/FormSteps';

function Form() {
  return (
    <div
      className="
        bg-white
        rounded-xl
        h-full
        md:p-4
        md:h-fit
        shadow-xl
      "
    >
      <FormSteps />
    </div>
  );
}

export default Form;
