/* Core */
import { NextResponse } from 'next/server'

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({ app: 'Magic Post' })
}

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  const { amount = 1 } = body

  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ data: amount })
}
