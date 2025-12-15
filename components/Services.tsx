export default function Services() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
  {/* Floating meme elements background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
    <div className="absolute top-40 right-20 w-12 h-12 bg-pink-400 rounded-lg opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
    <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
    <div className="absolute top-1/3 right-1/3 text-6xl opacity-10 animate-pulse">😂</div>
    <div className="absolute bottom-1/4 left-1/2 text-5xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}>🔥</div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
      <div className="inline-block mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
          <span className="animate-pulse">⚡</span>
          Powered by Advanced AI
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        How <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Cool Dude</span> Works
      </h2>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
        From trending topics to viral memes in seconds. Our AI-powered platform turns real-time events into shareable content magic.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
      
      {/* Service 1 - Featured Large */}
      <div className="md:col-span-2 group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-purple-100 hover:border-purple-300">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              AI-Powered Meme Generation
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our cutting-edge AI analyzes trending events and automatically generates contextually perfect memes. No design skills needed—just pure viral potential delivered instantly.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">GPT-4 Powered</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Auto-captioning</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Smart Context</span>
            </div>
          </div>
          <div className="relative h-64 md:h-auto order-1 md:order-2 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-2 text-center">🤖</div>
                <div className="text-center font-bold text-gray-800">AI at Work</div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-purple-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                  </div>
                  <div className="text-xs text-gray-600 text-center">Generating perfection...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2 */}
      <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden p-8 md:p-10 text-white hover:scale-105">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Real-Time Trend Monitoring
          </h3>
          <p className="text-blue-50 text-lg mb-6 leading-relaxed">
            Stay ahead of the curve with our 24/7 trend tracking. We scan Twitter, Reddit, news sites, and more to catch viral moments as they happen—before they peak.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="flex-1">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-blue-100">Monitoring</div>
            </div>
            <div className="flex-1">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-blue-100">Sources</div>
            </div>
            <div className="flex-1">
              <div className="text-3xl font-bold">&lt;60s</div>
              <div className="text-sm text-blue-100">Detection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3 */}
      <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden p-8 md:p-10 border-2 border-pink-100 hover:border-pink-300 hover:scale-105">
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-full opacity-20 -ml-20 -mb-20"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Customizable Templates & Styles
          </h3>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Choose from hundreds of classic and modern meme formats. Customize fonts, colors, and layouts to match your brand voice while keeping that authentic meme energy.
          </p>
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl flex items-center justify-center text-2xl transform group-hover:rotate-6 transition-transform">
              😎
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-200 to-teal-200 rounded-xl flex items-center justify-center text-2xl transform group-hover:-rotate-6 transition-transform">
              🔥
            </div>
            <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl flex items-center justify-center text-2xl transform group-hover:rotate-6 transition-transform">
              💯
            </div>
          </div>
        </div>
      </div>

      {/* Service 4 - Wide */}
      <div className="md:col-span-2 group relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-7xl mb-4 animate-bounce">⚡</div>
              <div className="text-white text-2xl font-bold">Export Ready</div>
              <div className="flex gap-3 mt-6 justify-center flex-wrap">
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-medium">PNG</span>
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-medium">JPG</span>
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-medium">GIF</span>
                <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white text-sm font-medium">MP4</span>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center text-white">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Instant Generation & Export
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Generate memes in under 3 seconds and export in any format you need. One-click sharing to all major social platforms, or download for your own distribution.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded-full text-sm font-medium">High-Res Output</span>
              <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded-full text-sm font-medium">Batch Export</span>
              <span className="px-3 py-1 bg-white bg-opacity-10 backdrop-blur-sm text-white rounded-full text-sm font-medium">Direct Sharing</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 md:mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
          Start Creating Memes
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-200 hover:border-purple-300">
          Watch Demo
        </button>
      </div>
      <p className="mt-6 text-gray-600 text-sm">No credit card required • Free trial available</p>
    </div>
  </div>
</section>
  );
}