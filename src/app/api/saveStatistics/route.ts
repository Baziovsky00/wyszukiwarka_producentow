import { saveStatistics } from "@/lib/actions"
import { NextRequest, NextResponse } from "next/server"

export async function POST (req: NextRequest) {
    const data = await req.json()
    const save = await saveStatistics(data.stats)

    return NextResponse.json({success: true})
}