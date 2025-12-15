import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
  {/* Playful floating elements */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
        😎 Loved by Meme Creators
      </span>
      <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-4">
        Real Reactions from<br/>Real Cool Dudes
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        See how creators are dominating the meme game with trending event automation
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100">
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
          🔥
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" 
              width={60} 
              height={60} 
              alt="Marcus Chen"
              className="rounded-full ring-4 ring-purple-200"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Marcus Chen</h4>
            <p className="text-sm text-purple-600 font-medium">@MemeKingMarcus • 847K followers</p>
          </div>
        </div>
        
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          "Cool Dude helped me create <span className="font-bold text-purple-600">23 viral memes in one week</span> during the Mars landing event. My engagement shot up <span className="font-bold text-pink-600">340%</span> and I gained 89K new followers. The AI catches trends before they even peak!"
        </p>
        
        <div className="flex gap-2 text-sm">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">Viral Growth</span>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">Time Saver</span>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100">
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
          💎
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" 
              width={60} 
              height={60} 
              alt="Sarah Rodriguez"
              className="rounded-full ring-4 ring-blue-200"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Sarah Rodriguez</h4>
            <p className="text-sm text-blue-600 font-medium">Social Media Manager @ TechFlow</p>
          </div>
        </div>
        
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          "We used to spend <span className="font-bold text-blue-600">12+ hours per week</span> brainstorming meme ideas. Cool Dude reduced that to <span className="font-bold text-purple-600">45 minutes</span>. During the Super Bowl, we generated memes in real-time that got <span className="font-bold text-pink-600">2.3M impressions</span>. Game changer!"
        </p>
        
        <div className="flex gap-2 text-sm">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">ROI Beast</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">Real-Time</span>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-pink-100">
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform">
          🚀
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop" 
              width={60} 
              height={60} 
              alt="Jake Thompson"
              className="rounded-full ring-4 ring-pink-200"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Jake Thompson</h4>
            <p className="text-sm text-pink-600 font-medium">Content Creator & Comedian</p>
          </div>
        </div>
        
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">⭐</span>
          ))}
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4">
          "I was skeptical about AI memes, but Cool Dude gets the humor. During the Oscars slap incident, it generated <span className="font-bold text-pink-600">15 different angles</span> within minutes. One hit <span className="font-bold text-purple-600">4.7M views</span>. Now I can&apos;t create without it!"
        </p>
        
        <div className="flex gap-2 text-sm">
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full font-medium">Humor AI</span>
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">Speed</span>
        </div>
      </div>

      {/* Testimonial 4 - Featured larger on desktop */}
      <div className="group relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-3">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="relative flex-shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop" 
                width={80} 
                height={80} 
                alt="David Park"
                className="rounded-full ring-4 ring-white/50"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-purple-600 flex items-center justify-center text-lg">
                ✨
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-white text-2xl mb-1">David Park</h4>
              <p className="text-purple-100 font-medium mb-2">Founder @ MemeStock Agency</p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-300 text-2xl">⭐</span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              <div className="text-4xl font-black text-white mb-1">$47K</div>
              <div className="text-purple-200 text-sm font-medium">Revenue in 90 days</div>
            </div>
          </div>
          
          <p className="text-white text-lg leading-relaxed mb-6">
            "Cool Dude transformed our entire business model. We went from manually creating <span className="font-bold text-yellow-300">8-10 memes per day</span> to automatically generating <span className="font-bold text-yellow-300">50+ high-quality memes</span> that actually trend. Our client retention jumped to <span className="font-bold text-yellow-300">94%</span> because we&apos;re always first to market. The AI understands context, timing, and humor better than most humans. We&apos;ve landed <span className="font-bold text-yellow-300">6 Fortune 500 clients</span> in just three months. This isn&apos;t just a tool—it&apos;s an unfair advantage."
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium">Agency Scale</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium">Fortune 500</span>
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium">94% Retention</span>
            <span className="px-4 py-2 bg-yellow-300 text-purple-900 rounded-full font-bold">Verified Business</span>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl md:text-5xl font-black text-white mb-2">12M+</div>
          <div className="text-purple-100 font-medium">Memes Generated</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
          <div className="text-purple-100 font-medium">Trend Accuracy</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-white mb-2">4.9/5</div>
          <div className="text-purple-100 font-medium">Creator Rating</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-black text-white mb-2">89K+</div>
          <div className="text-purple-100 font-medium">Happy Users</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}