"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AssessmentPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to user-info page to start the assessment
    router.replace("/assessment/user-info")
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-lg text-indigo-700">Redirecting to assessment...</p>
      </div>
    </div>
  )
} 