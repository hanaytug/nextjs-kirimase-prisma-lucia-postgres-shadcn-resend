import OpengraphImageGenerator from '@/components/OpenGraphImageGenerator';

export const runtime = 'edge';

export const alt = 'Privacy Policy - Anvil In.c';

export const contentType = 'image/png';

export default async function Image() {
  return OpengraphImageGenerator(alt);
}
