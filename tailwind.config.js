/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      colors: {
        /** Primary **/
        'purple-100': '#EFEDFF',
        'purple-200': '#BCB3FF',
        'purple-300': '#A094FF',
        'purple-400': '#5B46FF',
        'purple-500': '#4031B3',
        'purple-600': '#382B9C',

        /** Gray **/
        'gray-100': '#F2F3F6',
        'gray-200': '#E8E9ED',
        'gray-300': '#C6C8CE',
        'gray-400': '#A1A6B5',
        'gray-500': '#676F7B',
        'gray-600': '#494F5B',
        'gray-700': '#373D49',
        'gray-800': '#2A333B',
        'gray-900': '#171D24',
        white: '#ffffff',
        black: '#121212',

        /** subcolor**/
        'subcolor1-100': '#FF83FB',
        'subcolor1-200': '#D315C3',
        'subcolor2-100': '#7CCBFF',
        'subcolor2-200': '#1587D3',
        'subcolor3-100': '#78E9BC',
        'subcolor3-200': '#0BBD6D',
      },
      dropShadow: {
        shadow1: [
          '0px 4px 8px rgba(34, 34, 34, 0.04)',
          '4px 0px 8px rgba(0, 0, 0, 0.04)',
        ].join(', '),
        shadow2: [
          '0px 2px 8px rgba(34, 34, 34, 0.08)',
          '2px 0px 8px rgba(34, 34, 34, 0.08)',
        ].join(', '),
        shadow3: [
          '0px 8px 12px rgba(34, 34, 34, 0.08)',
          '8px 0px 12px rgba(34, 34, 34, 0.08)',
        ].join(', '),
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.font-default': {
          'font-family': 'Pretendard',
        },
        '.font-T01-B': {
          '@apply font-default font-bold': {},
          fontSize: '36px',
          lineHeight: 1.3,
        },
        '.font-T02-B': {
          '@apply font-default font-bold': {},
          fontSize: '32px',
          lineHeight: 1.3,
        },
        '.font-T03-B': {
          '@apply font-default font-bold': {},
          fontSize: '26px',
          lineHeight: 1.3,
        },
        '.font-T03-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '26px',
          lineHeight: 1.3,
        },
        '.font-T04-B': {
          '@apply font-default font-bold': {},
          fontSize: '24px',
          lineHeight: 1.3,
        },
        '.font-T04-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '24px',
          lineHeight: 1.3,
        },
        '.font-T05-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '20px',
          lineHeight: 1.3,
        },
        //font-body
        '.font-B01-B': {
          '@apply font-default font-bold': {},
          fontSize: '18px',
          lineHeight: 1.3,
        },
        '.font-B01-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '18px',
          lineHeight: 1.3,
        },
        '.font-B01-M': {
          '@apply font-default font-medium': {},
          fontSize: '18px',
          lineHeight: 1.3,
        },
        '.font-B02-B': {
          '@apply font-default font-bold': {},
          fontSize: '16px',
          lineHeight: 1.3,
        },
        '.font-B02-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '16px',
          lineHeight: 1.3,
        },
        '.font-B02-M': {
          '@apply font-default font-medium': {},
          fontSize: '16px',
          lineHeight: 1.3,
        },
        '.font-B03-B': {
          '@apply font-default font-bold': {},
          fontSize: '14px',
          lineHeight: 1.3,
        },
        '.font-B03-SB': {
          '@apply font-default font-semibold': {},
          fontSize: '14px',
          lineHeight: 1.3,
        },
        '.font-B03-M': {
          '@apply font-default font-medium': {},
          fontSize: '14px',
          lineHeight: 1.3,
        },
        //caption
        '.font-C01-M': {
          '@apply font-default font-medium': {},
          fontSize: '12px',
          lineHeight: 1.3,
        },
        '.font-C01-R': {
          '@apply font-default font-normal': {},
          fontSize: '12px',
          lineHeight: 1.3,
        },
      });
    },
  ],
};
