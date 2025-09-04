import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const imagePath = searchParams.get('imagePath');

  if (!imagePath) {
    return NextResponse.json({ message: 'No image path' }, { status: 400 });
  }

  const response = await fetch(imagePath);
  const data = await response.arrayBuffer();

  return new NextResponse(data, {
    headers: {
      'Content-Type': response.headers.get('Content-Type') ?? 'image/jpeg',
    },
  });
}
