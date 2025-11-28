import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseClient";
import jwt from "jsonwebtoken";

// Helper to validate admin token
async function requireAuth(req: Request) {
    const token = (await req.headers.get("cookie"))?.split("; ").find(c => c.startsWith("byn_admin_token="))?.split("=")[1];
    if (!token) throw new Error("Unauthorized");
    jwt.verify(token, process.env.ADMIN_JWT_SECRET!);
}

export async function GET() {
    const { data, error } = await supabaseAdmin
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

export async function POST(req: Request) {
    try {
        await requireAuth(req);
        const body = await req.json();

        const { data, error } = await supabaseAdmin
            .from("projects")
            .insert([body])
            .select()
            .single();

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
        return NextResponse.json(data);
    } catch (e: unknown) {
        return NextResponse.json({ error: (e as Error).message || "Unauthorized" }, { status: 401 });
    }
}
