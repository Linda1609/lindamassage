import { NextResponse } from "next/server"

type Review = {
  id: number
  name: string
  text: string
  image?: string
  approved: boolean
}

let reviews: Review[] = []

// GET → return ONLY approved reviews
export async function GET() {
  return NextResponse.json(reviews.filter((r) => r.approved))
}

// POST → user submits review (NOT approved yet)
export async function POST(req: Request) {
  const body = await req.json()

  const newReview: Review = {
    id: Date.now(),
    name: body.name,
    text: body.text,
    image: body.image,
    approved: false,
  }

  reviews.push(newReview)

  return NextResponse.json({ success: true })
}

// OPTIONAL: approve review manually (for you/admin use)
export async function PATCH(req: Request) {
  const { id } = await req.json()

  reviews = reviews.map((r) =>
    r.id === id ? { ...r, approved: true } : r
  )

  return NextResponse.json({ success: true })
}