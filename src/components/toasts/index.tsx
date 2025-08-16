'use client';

import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { Slide, ToastContainer } from 'react-toastify';

import './styles.css';

export default function Toasts() {
  const locale = useLocale();
  const { theme } = useTheme();

  return (
    <div id="toasts">
      <ToastContainer
        position={locale === 'ar' ? 'bottom-left' : 'bottom-right'}
        autoClose={5000}
        closeButton={false}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        theme={theme}
        rtl={locale === 'ar'}
        stacked
        toastClassName="custom-toast"
        transition={Slide}
        className="custom-toast"
        progressClassName="bg-red-100"
      />
    </div>
  );
}
