import { ImageResponse } from 'next/og';

export default async function OpengraphImageGenerator(alt: string) {
  const interSemiBold = fetch(
    new URL(
      'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
    )
  ).then((res) => res.arrayBuffer());

  const size = {
    width: 1200,
    height: 630,
  };

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
        {alt}
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
}
