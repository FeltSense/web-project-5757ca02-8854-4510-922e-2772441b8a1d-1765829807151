import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      {/* Left Content */}
      <div className="text-center lg:text-left space-y-8 z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-sm font-medium text-purple-900">AI-Powered Meme Magic</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="block text-gray-900">Turn Trends Into</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Viral Memes
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Cool Dude transforms breaking news and trending events into shareable memes in seconds. Powered by real-time AI analysis and customizable templates.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Real-time Trends</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Custom Templates</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">AI-Powered</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Creating Memes
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full shadow-md hover:shadow-lg border-2 border-gray-900 hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See How It Works
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-white shadow-md"></div>
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-900">10,000+ memes created</div>
            <div className="text-sm text-gray-600">Join the viral revolution</div>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative lg:block z-10">
        <div className="relative">
          {/* Main meme showcase card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-square bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-2xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop" 
                width={800} 
                height={800} 
                alt="AI-generated meme example showcasing trending event"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div>
                  <div className="font-bold text-gray-900">Cool Dude AI</div>
                  <div className="text-sm text-gray-500">2 mins ago</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-pink-600">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="font-bold">1.2k</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span className="font-bold">856</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300 hidden sm:block">
            <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span>Trending Now</span>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300 hidden sm:block">
            <div className="text-white text-center">
              <div className="text-3xl font-black">99.9%</div>
              <div className="text-sm font-medium opacity-90">Viral Rate</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <style jsx>{`
    @keyframes blob {
      0%, 100% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</div>
  );
}