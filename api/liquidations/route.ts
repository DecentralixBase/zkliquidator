import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Fetch from Socket.io server or in-memory store
  return NextResponse.json({ liquidations: [] });
} 