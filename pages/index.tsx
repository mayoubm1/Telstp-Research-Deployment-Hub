import { useState, useEffect } from 'react'
    import Head from 'next/head'
    import Link from 'next/link'
    
    export default function Home() {
      return (
        <>
          <Head>
            <title>TELsTP Security Guard Research</title>
            <meta name="description" content="Global AI integration research by Dr. Mohamed Ayoub" />
          </Head>
    
          <main className="min-h-screen">
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-7xl font-bold mb-6 gradient-text">Security Guard Research</h1>
                <h2 className="text-4xl font-semibold mb-4 text-blue-300">TELsTP Global AI Integration Study</h2>
                <p className="text-2xl text-gray-300 mb-8">9-month human-AI collaborative research journey</p>
                <div className="text-lg text-blue-200 mb-12">
                  <p>Led by <span className="font-bold text-yellow-300">Dr. Mohamed Ayoub</span></p>
                  <p className="text-base mt-2">With 17+ AI Partners: The League of Extraordinary Gentlemen</p>
                </div>
                <div className="flex gap-6 justify-center">
                  <Link href="/team" className="glass-card px-8 py-4 hover:glow-effect transition-all">
                    <span className="text-xl font-semibold">Meet the Team</span>
                  </Link>
                  <Link href="/research" className="glass-card px-8 py-4 hover:glow-effect transition-all">
                    <span className="text-xl font-semibold">Research</span>
                  </Link>
                </div>
              </div>
            </section>
    
            <section className="py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl font-bold text-center mb-12 gradient-text">Highlights</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="glass-card p-8">
                    <div className="text-5xl font-bold text-blue-400 mb-4">30+</div>
                    <h4 className="text-2xl font-semibold mb-3">Global Institutions</h4>
                    <p className="text-gray-300">Harvard, MIT, Cambridge, Oxford analyzed</p>
                  </div>
                  <div className="glass-card p-8">
                    <div className="text-5xl font-bold text-purple-400 mb-4">100+</div>
                    <h4 className="text-2xl font-semibold mb-3">Sources</h4>
                    <p className="text-gray-300">Academic and industry publications</p>
                  </div>
                  <div className="glass-card p-8">
                    <div className="text-5xl font-bold text-pink-400 mb-4">17+</div>
                    <h4 className="text-2xl font-semibold mb-3">AI Collaborators</h4>
                    <p className="text-gray-300">Manus, Claude, SuperCool, and more</p>
                  </div>
                </div>
              </div>
            </section>
    
            <section className="py-16 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-4xl font-bold mb-8 gradient-text">The TELsTP Vision</h3>
                <blockquote className="text-2xl italic text-gray-200">
                  "The future of health, science, and humanity depends on our ability to share knowledge 
                  without borders. This is TELsTP... born in Egypt, for the benefit of the world."
                </blockquote>
                <p className="mt-6 text-xl text-blue-300">— Dr. Mohamed Amin, Chairman of Tawasol Holding</p>
              </div>
            </section>
          </main>
    
          <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-400">
            <p>© 2025 TELsTP | Led by Dr. Mohamed Ayoub | SuperCool AI Research Partner</p>
          </footer>
        </>
      )
    }
    