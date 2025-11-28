import { NextResponse } from "next/server";
import { supabaseAdmin, supabase } from "@/lib/supabaseClient";
import jwt from "jsonwebtoken";

async function requireAuth(req: Request) {
    const token = (await req.headers.get("cookie"))?.split("; ").find(c => c.startsWith("byn_admin_token="))?.split("=")[1];
    if (!token) throw new Error("Unauthorized");
    jwt.verify(token, process.env.ADMIN_JWT_SECRET!);
}

export async function GET() {
    // Public read access
    const { data, error } = await supabaseAdmin
        .from("services")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
}

export async function POST(req: Request) {
    // Admin create
    try {
        await requireAuth(req);
        const body = await req.json();
        const { data, error } = await supabaseAdmin
            .from("services")
            .insert([body])
            .select()
            .single();

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
        return NextResponse.json(data);
    } catch (e: any) {
        return NextResponse.json({ error: e.message || "Unauthorized" }, { status: 401 });
    }
}
