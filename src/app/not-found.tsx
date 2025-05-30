'use client';

import Error from 'next/error';

export default function NotFoundRootPage() {
  return (
    <html>
      <body>
        <main>
          <Error statusCode={404} />
        </main>
      </body>
    </html>
  );
}
