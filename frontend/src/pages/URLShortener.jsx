import { useState } from 'react'
import axios from 'axios'
import URLForm from '../components/URLForm'
import ShortenedURLCard from '../components/ShortenedURLCard'


export default function URLShortener() {
  const [url, setUrl] = useState('')
  const [shortenedURL, setShortenedURL] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleShorten = async (originalURL) => {
    setLoading(true)
    setError(null)
    setShortenedURL(null)

    try {
      const response = await axios.post(import.meta.env.VITE_BACK_URL, {
        url: originalURL,
      })


      setShortenedURL(response.data);
      console.log(response)
    } catch (err) {
      setError(err.message || 'An error occurred while shortening the URL')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen //bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            URL Shortener
          </h1>
          <p className="text-lg text-gray-600">
            Transform long URLs into short, shareable links instantly
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Form Section */}
          <URLForm onSubmit={handleShorten} loading={loading} setUrl={setUrl} url={url} />

          {/* Error Message */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">Error: {error}</p>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          )}

          {/* Result Section */}
          {shortenedURL && !loading && (
            <ShortenedURLCard shorturl={shortenedURL} longurl={url} />
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Your shortened URLs are ready to share. Click the copy button to get started!
          </p>
        </div>
      </div>
    </div>
  )
}

