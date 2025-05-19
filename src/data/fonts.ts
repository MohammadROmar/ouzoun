import localFont from 'next/font/local';

const montserrat = localFont({
  preload: true,
  variable: '--font-montserrat',
  src: '../assets/fonts/Montserrat-Variablet.ttf',
});

const ubuntu = localFont({
  preload: true,
  variable: '--font-ubuntu',
  src: [
    { path: '../assets/fonts/Ubuntu-Bold.ttf', weight: '700' },
    { path: '../assets/fonts/Ubuntu-Regular.ttf', weight: '400' },
    { path: '../assets/fonts/Ubuntu-Medium.ttf', weight: '500' },
  ],
});

const notoKufiArabic = localFont({
  preload: true,
  variable: '--font-kufi',
  src: '../assets/fonts/NotoKufiArabic-Variable.ttf',
});

export const fontVariables = `${montserrat.variable} ${ubuntu.variable} ${notoKufiArabic.variable}`;
