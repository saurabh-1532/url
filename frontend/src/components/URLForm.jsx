import { useState } from 'react'

export default function URLForm({ onSubmit, loading ,setUrl ,url}) {
 
  const [error, setError] = useState('')

  const validateURL = (urlString) => {
    try {
      new URL(urlString)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!url.trim()) {
      setError('Please enter a URL')
      return
    }

    if (!validateURL(url)) {
      setError('Please enter a valid URL (e.g., https://example.com)')
      return
    }

    onSubmit(url)
    
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your long URL
        </label>
        <div className="relative">
          <input
            id="url"
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value)
              setError('')
            }}
            placeholder="https://example.com/very/long/url/that/needs/shortening"
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 font-medium">{error}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95"
      >
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>
    </form>
  )
}

