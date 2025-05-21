import { getFilteredProducers } from "@/lib/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest, ) {
    const filters = await req.json()
    const filteredProducers = await getFilteredProducers(filters)
    return NextResponse.json(filteredProducers)
}