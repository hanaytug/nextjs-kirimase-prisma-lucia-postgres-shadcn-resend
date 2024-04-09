import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request, response: Response) {
  const interSemiBold = fetch(
    new URL(
      'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
    )
  ).then((res) => res.arrayBuffer());

  const size = {
    width: 1200,
    height: 630,
  };

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
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
        fonts: [
          {
            name: 'Inter',
            data: await interSemiBold,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    );
  } catch (e: any) {
    return new Response('Failed to generate OG image', { status: 500 });
  }
}
