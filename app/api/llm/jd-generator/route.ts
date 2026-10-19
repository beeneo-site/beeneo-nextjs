export const dynamic = 'force-dynamic'
import { auth } from '@/auth'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  const { title } = await req.json()
  if (!title) return new Response(JSON.stringify({ error: 'Title required' }), { status: 400 })

  const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}` },
    body: JSON.stringify({
      model: 'gpt-5.4-mini',
      messages: [{ role: 'system', content: 'You are an HR expert for Turkish engineering and R&D companies. Generate professional job descriptions for TGB (Technopark) companies with ISO compliance requirements.' }, { role: 'user', content: `Generate a professional job description for: ${title}. Include: role overview, responsibilities (5-7 items), requirements, preferred qualifications (include relevant ISO standards like ISO 9001, ASPICE, ISO 29110), and benefits. Keep it concise.` }],
      stream: true,
      max_tokens: 1500,
    }),
  })

  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      const encoder = new TextEncoder()
      try {
        while (true) {
          const { done, value } = await reader!.read()
          if (done) break
          controller.enqueue(encoder.encode(decoder.decode(value)))
        }
      } catch (error) { console.error('Stream error:', error); controller.error(error) }
      finally { controller.close() }
    },
  })

  return new Response(stream, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' } })
}
