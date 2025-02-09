"use client"

import { useEffect } from "react"

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h2 className="text-xl font-semibold mb-4">İletişim formunda bir hata oluştu</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => reset()}
      >
        Tekrar Dene
      </button>
    </div>
  )
} 