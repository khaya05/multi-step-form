import PersonalInfo from '@/app/components/form-steps/PersonalInfo';
import { useMultiStepForm } from './useMultiStepForm';
import Plan from '@/app/components/form-steps/Plan';
import AddOns from '@/app/components/form-steps/AddOns';
import FinishingUp from '@/app/components/form-steps/FinishingUp';
import ThankYou from '@/app/components/form-steps/ThankYou';

const useCustomHook = () => {
  return useMultiStepForm([
    <PersonalInfo key={0} />,
    <Plan key={1} />,
    <AddOns key={2} />,
    <FinishingUp key={3} />,
    <ThankYou key={4} />,
  ]);
};

export default useCustomHook;
