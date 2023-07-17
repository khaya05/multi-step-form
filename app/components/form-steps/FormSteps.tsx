import useCustomHook from '@/hooks/useCustomHook';
import Button from '../Button';

export default function FormSteps() {
  const { steps, currentIndex, step } = useCustomHook();

  return (
    <div>
      <div>background image</div>
      <div>{step}</div>
      <Button />
    </div>
  );
}
