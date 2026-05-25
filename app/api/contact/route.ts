import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  console.info("A2R2 contact inquiry", {
    name: payload.name,
    email: payload.email,
    company: payload.company,
    messageLength:
      typeof payload.message === "string" ? payload.message.length : 0,
  });

  return NextResponse.json({ ok: true });
}
