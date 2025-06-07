import clsx from 'clsx';

import Step from './step';

type StepperProps = {
  direction: 'vertical' | 'horizontal';
  steps: string[];
  currentStep: number;
};

const Stepper = ({ direction, steps, currentStep }: StepperProps) => {
  const isVertical = direction === 'vertical';

  return (
    <ul
      className={clsx(
        'w-fit gap-4 text-center text-sm',
        isVertical ? 'flex flex-col' : 'grid',
      )}
      style={
        !isVertical
          ? {
              gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
            }
          : undefined
      }
    >
      {steps.map((label, index) => (
        <Step
          key={index}
          label={label}
          index={index}
          isVertical={isVertical}
          isActive={currentStep === index}
          isCompleted={currentStep > index}
        />
      ))}
    </ul>
  );
};

export default Stepper;
