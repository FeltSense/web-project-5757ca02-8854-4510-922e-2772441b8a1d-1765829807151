export default function Pricing() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
  <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Tech Business</h2>
    <p className="text-gray-600 text-center mb-6">General</p>
    
    <div className="text-center mb-8">
      <span className="text-5xl font-bold text-blue-600">$29</span>
      <p className="text-gray-600 text-sm mt-2">one-time payment</p>
    </div>

    <ul className="space-y-4 mb-8">
      <li className="flex items-start">
        <span className="text-blue-600 mr-3 font-bold">✓</span>
        <span className="text-gray-700">AI-powered meme generation from trending events</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 mr-3 font-bold">✓</span>
        <span className="text-gray-700">Real-time trend monitoring and analysis</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 mr-3 font-bold">✓</span>
        <span className="text-gray-700">Customizable meme templates and styles</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 mr-3 font-bold">✓</span>
        <span className="text-gray-700">Instant generation and export</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 mr-3 font-bold">✓</span>
        <span className="text-gray-700">Cultural relevance algorithm</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-600 mr-3 font-bold">✓</span>
        <span className="text-gray-700">Easy sharing to social platforms</span>
      </li>
    </ul>

    <button onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=5757ca02-8854-4510-922e-2772441b8a1d'} className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700">
      Get Your Website - $29
    </button>
  </div>
</section>
  );
}