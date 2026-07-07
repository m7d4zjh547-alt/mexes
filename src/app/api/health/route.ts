import { json } from "@/lib/http";
export const dynamic = 'force-dynamic';


export async function GET() {
  return json({
    status: "healthy",
    service: "cle-minutes-api",
    version: "2.0.0",
    timestamp: new Date().toISOString(),
  });
}
