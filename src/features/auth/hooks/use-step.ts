'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { useRouter } from '@/i18n/navigation';

export function useStep() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const stepFromUrl = parseInt(searchParams.get('step') || '1') - 1;
  const isVaildStep =
    !isNaN(stepFromUrl) && stepFromUrl >= 0 && stepFromUrl <= 4;
  const step = isVaildStep ? stepFromUrl : 0;

  const [currStep, setCurrStep] = useState(step);

  useEffect(() => {
    if (isVaildStep) {
      setCurrStep(stepFromUrl);
    } else {
      setCurrStep(0);
    }
  }, [isVaildStep, stepFromUrl]);

  const gotToStep = useCallback(
    (newStep: number) => {
      const params = new URLSearchParams(searchParams);

      params.set('step', (newStep + 1).toString());
      router.push(`?${params.toString()}`);
    },
    [router, searchParams],
  );

  return { step: currStep, setStep: gotToStep };
}
