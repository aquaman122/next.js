import React from 'react'

export default function Result({ results }: { results: any}) {
  return (
    <>
      {results.map((result: { id: React.Key | null | undefined; original_title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => (
        <div key={result.id}>
          {result.original_title}
        </div>
      ))}
    </>
  )
}
