import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  let requestId: number | string = 0;

  try {
    const body = await request.json();
    const { method, params } = body;

    let result;

    switch (method) {
      case 'initialize':
        result = {
          protocolVersion: '2024-11-05',
          capabilities: {
            tools: {},
            resources: {}
          },
          serverInfo: {
            name: 'DevHub API Portal',
            version: '1.0.0',
            description: 'Central API documentation and testing portal'
          }
        };
        break;

      case 'tools/list':
        result = {
          tools: [
            {
              name: 'list_apis',
              description: 'Get list of all available APIs in the hub',
              inputSchema: {
                type: 'object',
                properties: {
                  category: {
                    type: 'string',
                    description: 'Filter by category (Portfolio, Content, Tech, etc.)'
                  }
                }
              }
            },
            {
              name: 'get_api_info',
              description: 'Get detailed information about a specific API',
              inputSchema: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    description: 'API identifier'
                  }
                },
                required: ['id']
              }
            }
          ]
        };
        break;

      case 'tools/call':
        const toolName = params?.name;

        switch (toolName) {
          case 'list_apis':
            const category = params?.arguments?.category;
            const apis = [
              { id: 'portfolio', name: 'Portfolio API', category: 'Portfolio', status: 'online', endpoints: 6, url: 'https://bookchaowalit-portfolio-frontend.vercel.app/api/mcp' },
              { id: 'techblog', name: 'Tech Blog API', category: 'Content', status: 'online', endpoints: 3, url: 'https://bookchaowalit-techblog-frontend.vercel.app/api/mcp' },
              { id: 'artblog', name: 'Art Blog API', category: 'Content', status: 'online', endpoints: 3, url: 'https://bookchaowalit-artblog-frontend.vercel.app/api/mcp' },
              { id: 'techspace', name: 'Tech Space API', category: 'Tech', status: 'online', endpoints: 5, url: 'https://bookchaowalit-techspace-frontend.vercel.app/api/mcp' },
              { id: 'github', name: 'GitHub API', category: 'Portfolio', status: 'online', endpoints: 4, url: 'https://bookchaowalit-github-frontend.vercel.app/api/mcp' },
              { id: 'snippets', name: 'Snippets API', category: 'Tools', status: 'online', endpoints: 3, url: 'https://bookchaowalit-snippets-frontend.vercel.app/api/mcp' },
              { id: 'mcpdocs', name: 'MCP Documentation API', category: 'Documentation', status: 'online', endpoints: 5, url: 'https://bookchaowalit-mcpdocs-frontend.vercel.app/api/mcp' }
            ];

            result = category ? apis.filter(api => api.category === category) : apis;
            break;

          case 'get_api_info':
            const id = params?.arguments?.id;
            const allApis = [
              { id: 'portfolio', name: 'Portfolio API', description: 'Access projects, skills, blog posts, and GitHub activity', longDescription: 'Comprehensive portfolio API providing access to professional information', category: 'Portfolio', status: 'online', endpoints: 6, url: 'https://bookchaowalit-portfolio-frontend.vercel.app/api/mcp', features: ['Projects data', 'Skills taxonomy', 'Blog posts', 'GitHub integration'] },
              { id: 'techblog', name: 'Tech Blog API', description: 'Technical articles and programming content', longDescription: 'Access technical articles and tutorials', category: 'Content', status: 'online', endpoints: 3, url: 'https://bookchaowalit-techblog-frontend.vercel.app/api/mcp', features: ['Technical articles', 'Search by query', 'Post retrieval'] },
              { id: 'artblog', name: 'Art Blog API', description: 'Creative arts and design content', longDescription: 'Explore creative arts content', category: 'Content', status: 'online', endpoints: 3, url: 'https://bookchaowalit-artblog-frontend.vercel.app/api/mcp', features: ['Art posts', 'Tag-based filtering', 'Creative content'] },
              { id: 'techspace', name: 'Tech Space API', description: 'Technology stacks and development platforms', longDescription: 'Comprehensive tech stack information', category: 'Tech', status: 'online', endpoints: 5, url: 'https://bookchaowalit-techspace-frontend.vercel.app/api/mcp', features: ['Tech stacks', 'Categories', 'Status filters'] },
              { id: 'github', name: 'GitHub API', description: 'GitHub activity and repositories', longDescription: 'Access GitHub repositories and activity', category: 'Portfolio', status: 'online', endpoints: 4, url: 'https://bookchaowalit-github-frontend.vercel.app/api/mcp', features: ['Repositories', 'Activity feed', 'Languages'] },
              { id: 'snippets', name: 'Snippets API', description: 'Code snippets library', longDescription: 'Reusable code examples', category: 'Tools', status: 'online', endpoints: 3, url: 'https://bookchaowalit-snippets-frontend.vercel.app/api/mcp', features: ['Code snippets', 'Search', 'Categories'] },
              { id: 'mcpdocs', name: 'MCP Documentation API', description: 'MCP protocol reference', longDescription: 'Complete MCP documentation', category: 'Documentation', status: 'online', endpoints: 5, url: 'https://bookchaowalit-mcpdocs-frontend.vercel.app/api/mcp', features: ['Protocol docs', 'Examples', 'Guides'] }
            ];

            result = allApis.find(api => api.id === id) || null;
            break;

          default:
            throw new Error(`Unknown tool: ${toolName}`);
        }
        break;

      default:
        throw new Error(`Unknown method: ${method}`);
    }

    return NextResponse.json({
      jsonrpc: '2.0',
      id: requestId,
      result
    });

  } catch (error) {
    return NextResponse.json({
      jsonrpc: '2.0',
      id: requestId || 1,
      error: {
        code: -32000,
        message: error instanceof Error ? error.message : 'Unknown error',
        data: error
      }
    }, { status: 500 });
  }
}
