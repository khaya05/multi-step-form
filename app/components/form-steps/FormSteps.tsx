import useCustomHook from '@/hooks/useCustomHook';
import Button from '../Button';

export default function FormSteps() {
  const { step, steps, currentIndex } = useCustomHook();

  return (
    <div>
      <div>background image</div>
      <div>{step}</div>
      <Button />
    </div>
  );
}
