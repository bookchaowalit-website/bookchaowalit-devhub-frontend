import Link from "next/link";
import { Code2, Database, Zap, Book, FileText, Globe, ArrowRight, CheckCircle2, Github, Twitter, Mail } from "lucide-react";
import { API_CATALOG } from "@/lib/api-catalog";

const ICON_MAP = {
  code: <Code2 className="w-6 h-6" />,
  file: <FileText className="w-6 h-6" />,
  book: <Book className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
} as const;

export default function HomePage() {
  const apis = API_CATALOG.map((entry) => ({
    ...entry,
    icon: ICON_MAP[entry.icon],
    statusColor: entry.status === "online" ? "green" : "yellow",
  }));

  const features = [
    {
      title: "Interactive API Explorer",
      description: "Test all endpoints directly from your browser with our built-in API playground. No setup required.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Comprehensive Documentation",
      description: "Detailed guides, examples, and best practices for each API endpoint with real-world use cases.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Code Examples",
      description: "Copy-paste ready code in JavaScript, Python, cURL, and more. Get started in minutes.",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "Real-time Status",
      description: "Monitor API health, uptime, and response times across all services in real-time.",
      icon: <CheckCircle2 className="w-8 h-8" />
    }
  ];

  const stats = [
    { value: "5", label: "Live APIs" },
    { value: "21+", label: "Endpoints" },
    { value: "100%", label: "Documented" },
    { value: "24/7", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">DevHub</h1>
                <p className="text-xs text-slate-400">API Developer Portal</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/docs" className="text-slate-300 hover:text-white transition-colors text-sm">Docs</Link>
              <Link href="/playground" className="text-slate-300 hover:text-white transition-colors text-sm">Playground</Link>
              <Link href="#apis" className="text-slate-300 hover:text-white transition-colors text-sm">APIs</Link>
              <Link href="#features" className="text-slate-300 hover:text-white transition-colors text-sm">Features</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-sm font-medium">5 APIs Live • 21+ Endpoints</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            One Portal for<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              All Your APIs
            </span>
          </h2>

          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore, test, and integrate with our complete API ecosystem.
            From portfolio data to content management — everything is just a request away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/playground" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
              Try Playground
              <Zap className="inline-block ml-2 w-4 h-4" />
            </Link>
            <Link href="/docs" className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105">
              Read Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 hover:bg-slate-800/70 rounded-xl p-6 border border-slate-700/50 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* APIs Grid */}
      <section id="apis" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Available APIs</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our complete API ecosystem. Each API is fully documented with interactive examples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {apis.map((api) => (
            <Link
              key={api.id}
              href={`/apis/${api.id}`}
              className="group relative bg-slate-800/50 hover:bg-slate-800 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg group-hover:scale-110 transition-transform">
                  {api.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${api.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                  <span className="text-xs text-slate-400 capitalize">{api.status}</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {api.name}
              </h4>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {api.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {api.features.slice(0, 3).map((feature, idx) => (
                  <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm border-t border-slate-700 pt-4">
                <span className="text-slate-500">{api.endpoints} endpoints</span>
                <span className="text-blue-400 group-hover:text-blue-300 font-medium flex items-center gap-1">
                  View docs
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Complete developer experience with tools, documentation, and examples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/30 hover:bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white">{feature.title}</h4>
              </div>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start CTA */}
      <section id="docs" className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Integrate?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Get started with our APIs in minutes. Complete documentation, code examples,
            and interactive playground included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/docs" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all hover:scale-105">
              Read Documentation
            </Link>
            <Link
              href="https://github.com/bookchaowalit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-slate-400" />
              <div>
                <span className="text-white font-semibold">DevHub</span>
                <p className="text-slate-500 text-sm">by Chaowalit Greepoke</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a
                href="https://github.com/bookchaowalit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://twitter.com/bookchaowalit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors flex items-center gap-2"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="mailto:bookchaowalit@gmail.com"
                className="hover:text-slate-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-600">
            <p>© 2026 DevHub. All APIs are part of the Chaowalit Greepoke ecosystem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
