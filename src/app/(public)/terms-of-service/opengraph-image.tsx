import OpengraphImageGenerator from '@/components/OpenGraphImageGenerator';

export const runtime = 'edge';

export const alt = 'Terms of Service - Anvil In.c';

export const contentType = 'image/png';

export default async function Image() {
  return OpengraphImageGenerator(alt);
}
