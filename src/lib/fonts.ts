import {
  Noto_Sans as NotoSans,
  Noto_Sans_Mono as NotoSansMono,
} from 'next/font/google';

export const fontNotoSans = NotoSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontNotoSansMono = NotoSansMono({
  subsets: ['latin'],
  variable: '--font-mono',
});
