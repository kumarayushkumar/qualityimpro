import React from 'react'

const style: React.CSSProperties = {
  color: '#ef4444',
  fontSize: '1rem',
  textAlign: 'center'
}

export default function ErrorMessage({ error }: { error: string }) {
  return (
    <div>
      <p style={style}>{error}</p>
    </div>
  )
}
