import Link from 'next/link';
import React from 'react'
import Card from './Card';

export default function Result({ results }: { results: any}) {
  return (
    <>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4
      '>
        {results.map((result: { id: React.Key | null | undefined; original_title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </>
  )
}
