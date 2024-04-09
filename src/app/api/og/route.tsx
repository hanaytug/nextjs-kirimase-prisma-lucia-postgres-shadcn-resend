import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request, response: Response) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Anvil Inc.';
    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 128,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {title}
        </div>
      )
    );
  } catch (e: any) {
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
