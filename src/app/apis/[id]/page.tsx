import { notFound } from 'next/navigation';
import Link from 'next/link';

const apis = {
  portfolio: {
    name: 'Portfolio API',
    description: 'Access projects, skills, blog posts, and GitHub activity',
    longDescription: 'Comprehensive portfolio API providing access to all your professional information including projects, technical skills, blog posts, and GitHub contribution data.',
    url: 'https://bookchaowalit-portfolio-frontend.vercel.app/api/mcp',
    category: 'Portfolio',
    endpoints: [
      { name: 'get_projects', description: 'Get all projects', method: 'tools/call' },
      { name: 'get_skills', description: 'Get technical skills', method: 'tools/call' },
      { name: 'get_portfolio_blog', description: 'Get blog posts', method: 'tools/call' },
      { name: 'get_github', description: 'Get GitHub activity', method: 'tools/call' },
      { name: 'get_contact', description: 'Get contact info', method: 'tools/call' },
      { name: 'get_about', description: 'Get about info', method: 'tools/call' }
    ]
  },
  techblog: {
    name: 'Tech Blog API',
    description: 'Technical articles and programming content',
    longDescription: 'Access technical articles, tutorials, and programming insights from the Tech Blog with full search and filtering capabilities.',
    url: 'https://bookchaowalit-techblog-frontend.vercel.app/api/mcp',
    category: 'Content',
    endpoints: [
      { name: 'get_tech_posts', description: 'Get technical blog posts', method: 'tools/call' },
      { name: 'search_tech_content', description: 'Search by query', method: 'tools/call' },
      { name: 'get_tech_post', description: 'Get specific post', method: 'tools/call' }
    ]
  },
  artblog: {
    name: 'Art Blog API',
    description: 'Creative arts and design content',
    longDescription: 'Explore creative arts content including illustrations, graphic design, photography, and digital art with rich metadata and tagging.',
    url: 'https://bookchaowalit-artblog-frontend.vercel.app/api/mcp',
    category: 'Content',
    endpoints: [
      { name: 'get_art_posts', description: 'Get art blog posts', method: 'tools/call' },
      { name: 'search_art_content', description: 'Search art content', method: 'tools/call' },
      { name: 'get_art_post', description: 'Get specific art post', method: 'tools/call' }
    ]
  },
  techspace: {
    name: 'Tech Space API',
    description: 'Technology stacks and development platforms',
    longDescription: 'Comprehensive information about technology stacks, development platforms, and tools used in modern software development.',
    url: 'https://bookchaowalit-techspace-frontend.vercel.app/api/mcp',
    category: 'Tech',
    endpoints: [
      { name: 'get_techspace_articles', description: 'Get tech articles', method: 'tools/call' },
      { name: 'search_techspace', description: 'Search tech content', method: 'tools/call' },
      { name: 'get_stack', description: 'Get tech stack info', method: 'tools/call' },
      { name: 'get_platform', description: 'Get platform details', method: 'tools/call' },
      { name: 'get_tool', description: 'Get tool info', method: 'tools/call' },
      { name: 'get_best_practices', description: 'Get best practices', method: 'tools/call' }
    ]
  },
  mcp: {
    name: 'MCP List Hub',
    description: 'Central aggregator for all MCP servers',
    longDescription: 'The central hub that aggregates all MCP servers, providing discovery, documentation, and proxy functionality for the entire ecosystem.',
    url: 'https://bookchaowalit-mcplist-frontend.vercel.app/api/mcp',
    category: 'Infrastructure',
    endpoints: [
      { name: 'list_servers', description: 'List all MCP servers', method: 'servers/list' },
      { name: 'get_server', description: 'Get server details', method: 'tools/call' },
      { name: 'proxy_tool_call', description: 'Proxy tool call', method: 'tools/call' }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(apis).map((id) => ({ id }));
}

// Force static generation
export const dynamicParams = false;

export default async function APIDocumentationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const api = apis[id as keyof typeof apis];

  if (!api) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8">
          ← Back to DevHub
        </Link>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{api.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{api.name}</h1>
              <p className="text-slate-400">{api.category} API</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg mb-8">{api.longDescription || api.description}</p>

          <div className="bg-slate-800 rounded-xl p-6 mb-8 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">API Endpoint</h2>
            <code className="block bg-slate-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
              {api.url}
            </code>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Endpoints</h2>
            <div className="space-y-4">
              {api.endpoints.map((endpoint, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{endpoint.name}</h3>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">{endpoint.method}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{endpoint.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Start</h2>
            <div className="space-y-4">
              <div>
                <p className="text-slate-300 text-sm mb-2">1. Make a POST request to the API endpoint:</p>
                <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`curl -X POST ${api.url} \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list"
  }'`}</code>
                </pre>
              </div>
              <div>
                <p className="text-slate-300 text-sm mb-2">2. Call a specific tool:</p>
                <pre className="bg-slate-900 text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`curl -X POST ${api.url} \\
  -H "Content-Type: application/json" \\
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "${api.endpoints[0].name}",
      "arguments": {}
    }
  }'`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
