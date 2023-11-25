//
import { Inter, Lusitana } from 'next/font/google';

// you do need to add Latin as a subset if you only need to use the English language.
// subset latin include the language Latin	English, Spanish, French, Italian, German, Portuguese, Romanian etc.

export const inter = Inter({ subsets: ['latin'] });

//A variable font is a single font file that contains multiple variations of the same font, such as different weights, widths, and slants.
// hover over the font function name and which value is not optional
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
