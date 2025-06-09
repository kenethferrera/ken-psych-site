import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      const res = await fetch('https://buttondown.email/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token f41e5b22-16e5-4ee4-9d5c-8263eb38b8bc',
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center bg-gray-900 rounded-2xl p-6 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-center mb-1">📬 Get Weekly Mental Hacks</h2>
      <p className="text-gray-300 text-center mb-4">Overthinking? Subscribe to get exclusive psychological insights and story drops.</p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-2 items-center justify-center">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="Enter your email..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-offwhite focus:outline-none focus:ring-2 focus:ring-neon-green"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-neon-green text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition disabled:opacity-60"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <div className="mt-4 w-full text-center bg-green-500 text-black rounded p-2 font-bold">Thanks for subscribing!</div>
      )}
      {status === 'error' && (
        <div className="mt-4 w-full text-center bg-red-500 text-white rounded p-2 font-bold">Something went wrong. Try again later.</div>
      )}
    </div>
  );
} 