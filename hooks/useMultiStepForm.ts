import { ReactElement, useState } from 'react';

export function useMultiStepForm(steps: ReactElement[]) {
  const [currentIndex, setCurrentIndex] = useState(4);

  function next() {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) {
        console.log('next clicked');
        return i;
      }
      return i + 1;
    });

    console.log(currentIndex);
  }

  function back() {
    setCurrentIndex((i) => {
      console.log('back clicked');
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
    console.log(currentIndex);
  }

  return {
    currentIndex,
    steps,
    step: steps[currentIndex],
    next,
    back,
  };
}
