import { useState } from 'react'

export default function ShortenedURLCard({ shorturl, longurl }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      console.log(longurl)
      await navigator.clipboard.writeText(shorturl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="mt-8 p-6 //bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
      {/* Original URL Section */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Original URL</h3>
        <p className="text-gray-600 break-all text-sm bg-white p-3 rounded border border-gray-200">
          {longurl}
        </p>
      </div>

      {/* Shortened URL Section */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Shortened URL</h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={shorturl}
            readOnly
            className="flex-1 px-4 py-3 bg-white border border-green-300 rounded-lg text-indigo-600 font-semibold focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className={`px-4 py-3 rounded-lg font-semibold transition duration-200 ${
              copied
                ? 'bg-green-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <a
          href={shorturl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Open Link
        </a>
        <button
          onClick={() => window.location.reload()}
          className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition"
        >
          Shorten Another
        </button>
      </div>

      {/* Tip Section */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
        <p className="font-semibold mb-1">💡 Tip:</p>
        <p>Share your shortened URL anywhere! It will redirect to the original URL.</p>
      </div>
    </div>
  )
}
