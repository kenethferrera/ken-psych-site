import { useState } from 'react';

// Replace YOUR_USERNAME with your actual Buttondown username
const BUTTONDOWN_URL = 'https://buttondown.email/api/emails/embed-subscribe/YOUR_USERNAME';

export default function EmailSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      {submitted ? (
        <div className="bg-neon-green text-black rounded p-4 text-center font-bold shadow">
          Thanks for subscribing!
        </div>
      ) : (
        <form
          action={BUTTONDOWN_URL}
          method="post"
          target="_blank"
          className="flex flex-col sm:flex-row gap-2 bg-gray-900 p-4 rounded-lg shadow"
          onSubmit={() => setSubmitted(true)}
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
            className="flex-1 px-3 py-2 rounded bg-gray-800 text-offwhite focus:outline-none focus:ring-2 focus:ring-neon-green"
          />
          <button
            type="submit"
            className="bg-neon-green text-black px-4 py-2 rounded font-bold hover:scale-105 transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
} 