'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#dc2626'
          }}>
            Bir Hata Oluştu
          </h2>
          <p style={{
            color: '#4b5563'
          }}>
            Üzgünüz, bir sorun oluştu. Lütfen tekrar deneyin.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }}
          >
            Tekrar Dene
          </button>
        </div>
      </body>
    </html>
  )
} 