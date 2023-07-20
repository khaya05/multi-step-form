import { createSlice } from '@reduxjs/toolkit';
import PersonalInfo from '@/app/components/form-steps/PersonalInfo';
import Plan from '@/app/components/form-steps/Plan';
import AddOns from '@/app/components/form-steps/AddOns';
import FinishingUp from '@/app/components/form-steps/FinishingUp';
import ThankYou from '@/app/components/form-steps/ThankYou';

interface StepsState {
  currentIndex: number;
  steps: JSX.Element[];
}

const initialState: StepsState = {
  currentIndex: 0,
  steps: [
    <PersonalInfo key={0} />,
    <Plan key={1} />,
    <AddOns key={2} />,
    <FinishingUp key={3} />,
    <ThankYou key={4} />,
  ],
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    next: (state) => {
      if (state.currentIndex >= state.steps.length - 1) {
        return state;
      }
      state.currentIndex++;
      return state;
    },

    back: (state) => {
      if (state.currentIndex <= 0) {
        return state
      }
      state.currentIndex--;
      return state
    }
  },
});

export const {next, back} = stepsSlice.actions

export default stepsSlice.reducer
