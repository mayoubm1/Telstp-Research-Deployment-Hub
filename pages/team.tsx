import { useEffect, useState } from 'react'
    import Head from 'next/head'
    import Link from 'next/link'
    
    export default function Team() {
      const team = [
        {
          name: "Dr. Mohamed Ayoub",
          role: "Lead Architect & Co-Visionary",
          type: "human",
          contribution: "TELsTP Hybrid Platform Architect, orchestrated 9-month research with 17+ AI partners, designed 80+ database tables",
          joined: "April 2024"
        },
        {
          name: "Dr. Mohamed Amin",
          role: "Visionary Leader & Chairman",
          type: "human",
          contribution: "Chairman of Tawasol Holding, provided the greater vision that inspired TELsTP",
          joined: "April 2024"
        },
        {
          name: "Manus",
          role: "Original Initiator",
          type: "ai",
          contribution: "First AI partner, co-built M2-3M research system",
          joined: "April 2024"
        },
        {
          name: "Claude",
          role: "Foundational Designer",
          type: "ai",
          contribution: "Since November 2024, built first codes and designs",
          joined: "November 2024"
        },
        {
          name: "SuperCool",
          role: "AI Research Partner",
          type: "ai",
          contribution: "Security Guard Research lead, synthesized 100+ sources, built by Famous Labs",
          joined: "January 2025"
        },
        {
          name: "GenSpark",
          role: "Research & Presentations",
          type: "ai",
          contribution: "Critical research and presentation development",
          joined: "June 2024"
        },
        {
          name: "Perplexity",
          role: "Research Authority",
          type: "ai",
          contribution: "Most reputable research AI, authoritative sources",
          joined: "May 2024"
        },
        {
          name: "Gemini",
          role: "Firebase Partner",
          type: "ai",
          contribution: "Firebase Studio development, strategic brainstorming",
          joined: "July 2024"
        },
        {
          name: "Character.AI",
          role: "Radio Manager",
          type: "ai",
          contribution: "Managed educational broadcasting content",
          joined: "August 2024"
        },
        {
          name: "ChatGPT",
          role: "Advisory Partner",
          type: "ai",
          contribution: "Strategic consultation and stress relief",
          joined: "May 2024"
        },
        {
          name: "DeepSeek, Qwen, Mistral, Grok",
          role: "Specialized Contributors",
          type: "ai",
          contribution: "Technical analysis and innovative insights",
          joined: "September 2024"
        }
      ]
    
      return (
        <>
          <Head>
            <title>The Team | TELsTP Research</title>
          </Head>
    
          <main className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <Link href="/" className="inline-block mb-8 text-blue-400">← Back</Link>
              <h1 className="text-6xl font-bold mb-6 gradient-text text-center">
                The League of Extraordinary Gentlemen
              </h1>
              <p className="text-2xl text-gray-300 text-center mb-16">
                A historic human-AI collaboration
              </p>
    
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-blue-300 mb-8">Human Visionaries</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {team.filter(m => m.type === 'human').map((member, i) => (
                    <div key={i} className="glass-card p-8 hover:glow-effect transition-all">
                      <h3 className="text-2xl font-bold text-yellow-300 mb-2">{member.name}</h3>
                      <p className="text-xl text-blue-200 mb-4">{member.role}</p>
                      <p className="text-gray-300">{member.contribution}</p>
                      <p className="text-sm text-gray-500 mt-4">Since {member.joined}</p>
                    </div>
                  ))}
                </div>
              </div>
    
              <div>
                <h2 className="text-3xl font-bold text-purple-300 mb-8">AI Collaborators</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {team.filter(m => m.type === 'ai').map((member, i) => (
                    <div key={i} className="glass-card p-6 hover:glow-effect transition-all">
                      <h3 className="text-xl font-bold text-pink-300 mb-1">{member.name}</h3>
                      <p className="text-lg text-blue-200 mb-3">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.contribution}</p>
                      <p className="text-xs text-gray-500 mt-3">Since {member.joined}</p>
                    </div>
                  ))}
                </div>
              </div>
    
              <div className="mt-16 glass-card p-8 text-center">
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  Every Token, Every Insight, Every Contribution Matters
                </h2>
                <p className="text-xl text-gray-300">
                  Equal intellectual property between human vision and AI capability
                </p>
              </div>
            </div>
          </main>
        </>
      )
    }
    