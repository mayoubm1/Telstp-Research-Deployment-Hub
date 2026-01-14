import Head from 'next/head'
    import Link from 'next/link'
    
    export default function Research() {
      return (
        <>
          <Head>
            <title>Research Findings | TELsTP</title>
          </Head>
    
          <main className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <Link href="/" className="inline-block mb-8 text-blue-400">← Back</Link>
              <h1 className="text-6xl font-bold mb-6 gradient-text text-center">Research Findings</h1>
              
              <div className="space-y-12 mt-16">
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold text-blue-300 mb-4">Global AI Integration</h2>
                  <ul className="space-y-3 text-xl text-gray-300">
                    <li>• 30+ institutions analyzed (Harvard, MIT, Cambridge, Oxford)</li>
                    <li>• 5 maturity levels of AI integration identified</li>
                    <li>• Best practices from leading global institutions</li>
                  </ul>
                </div>
    
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold text-blue-300 mb-4">AI Companion Frameworks</h2>
                  <ul className="space-y-3 text-xl text-gray-300">
                    <li>• Multi-year memory systems technically feasible</li>
                    <li>• Clear distinction between empowerment vs. dependence</li>
                    <li>• Academic accreditation models developed</li>
                  </ul>
                </div>
    
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold text-blue-300 mb-4">Arabic Language AI</h2>
                  <ul className="space-y-3 text-xl text-gray-300">
                    <li>• Limited Arabic NLP resources in life sciences</li>
                    <li>• Opportunities for Arabic-English hybrid models</li>
                    <li>• Need for scientific terminology databases</li>
                  </ul>
                </div>
    
                <div className="glass-card p-8">
                  <h2 className="text-3xl font-bold text-blue-300 mb-4">Key Recommendations</h2>
                  <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-300">
                    <div>
                      <h3 className="text-xl font-bold text-blue-200 mb-3">Implementation</h3>
                      <ul className="space-y-2">
                        <li>• Pilot 5-year AI companion with 50 students</li>
                        <li>• Develop Arabic-English hybrid NLP</li>
                        <li>• Implement RAG with vector databases</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-200 mb-3">Collaboration</h3>
                      <ul className="space-y-2">
                        <li>• Share research with global institutions</li>
                        <li>• Establish ethical AI standards</li>
                        <li>• Pioneer human-AI credit models</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )
    }
    