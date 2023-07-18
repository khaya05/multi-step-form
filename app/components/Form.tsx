'use client'

import FormSteps from "./form-steps/FormSteps"

function Form() {
  return (
    <div 
      className="
        bg-white
        rounded-xl
        h-full
        md:p-10
        md:h-fit
        md:shadow-xl
      "
    >

      <FormSteps />
    </div>
  )
}

export default Form