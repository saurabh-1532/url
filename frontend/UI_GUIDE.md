# URL Shortener UI Guide

## Overview
A modern, responsive URL shortener interface built with React, Vite, and Tailwind CSS.

## Components

### 1. **URLShortener** (`src/pages/URLShortener.jsx`)
Main page component that orchestrates the entire URL shortening flow.

**Features:**
- Beautiful gradient background
- Handles API communication with the backend
- Manages loading and error states
- Displays results in a card format

**API Integration:**
- Endpoint: `POST http://localhost:5000/api/create`
- Request body: `{ url: "https://example.com" }`
- Response: Shortened URL string

### 2. **URLForm** (`src/components/URLForm.jsx`)
Input form component for entering URLs to be shortened.

**Features:**
- URL validation using native URL API
- Error handling and display
- Disabled state during loading
- Placeholder text for guidance
- Real-time error clearing

**Validation:**
- Checks if URL is not empty
- Validates URL format (must be valid URL)
- Shows helpful error messages

### 3. **ShortenedURLCard** (`src/components/ShortenedURLCard.jsx`)
Result display component showing the shortened URL.

**Features:**
- Displays both original and shortened URLs
- Copy to clipboard functionality
- Visual feedback when copied
- Open link button
- Shorten another button
- Helpful tip section

**Interactions:**
- Copy button: Copies shortened URL to clipboard
- Open Link: Opens the shortened URL in a new tab
- Shorten Another: Reloads the page to shorten another URL

## Styling

### Design System
- **Color Scheme**: Blue/Indigo primary, Green for success states
- **Typography**: Clear hierarchy with bold headings
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle shadows for depth
- **Animations**: Smooth transitions and hover effects

### Tailwind CSS Classes Used
- Gradient backgrounds: `bg-gradient-to-br`, `bg-gradient-to-r`
- Responsive design: `sm:`, `lg:` breakpoints
- Interactive states: `hover:`, `disabled:`, `focus:`
- Animations: `animate-spin`, custom fade-in

## Running the Application

### Development
```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (Vite default)

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## Backend Requirements

Ensure the backend is running on `http://localhost:5000` with:
- `POST /api/create` endpoint accepting `{ url: string }`
- `GET /:id` endpoint for redirecting to original URLs

## Browser Support
- Modern browsers with ES6+ support
- Requires clipboard API support for copy functionality
- Responsive design works on mobile, tablet, and desktop

## Future Enhancements
- URL history/recent URLs
- Custom short codes
- QR code generation
- Analytics dashboard
- User authentication
- Bulk URL shortening

