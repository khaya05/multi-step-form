'use client';

import { Architects_Daughter } from 'next/font/google';
import PlanComponent from './PlanComponent';
import Toggle from 'react-styled-toggle';

type GamePlan = {
  name: string;
  price: number;
};

const Plan = () => {
  const plans: GamePlan[] = [
    { name: 'arcade', price: 9 },
    { name: 'advanced', price: 12 },
    { name: 'pro', price: 15 },
  ];
  return (
    <>
      <h2 className="title">Select your plan</h2>
      <legend className="description">
        You have the option of monthly or yearly billing.
      </legend>
      <div className="">
        <fieldset className="mb-6 flex flex-col gap-3 justify-between md:flex-row">
          {plans.map((plan) => (
            <PlanComponent {...plan} key={plan.name} />
          ))}
        </fieldset>

        <div
          className="
            bg-very-light-gray
            rounded-[8px]
            h-12 grid
            place-items-center
            "
        >
          <Toggle
            labelLeft="Monthly"
            labelRight="Yearly"
            name="payment"
            width={38}
            height={20}
            backgroundColorUnchecked="#022959"
            backgroundColorChecked="#022959"
            sliderHeight={13}
            sliderWidth={13}
            translate={15}
          />
        </div>
      </div>
    </>
  );
};

export default Plan;
