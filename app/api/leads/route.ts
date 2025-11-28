import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseClient";
import jwt from "jsonwebtoken";

// Helper to validate admin token
async function requireAuth(req: Request) {
    const token = (await req.headers.get("cookie"))?.split("; ").find(c => c.startsWith("byn_admin_token="))?.split("=")[1];
    if (!token) throw new Error("Unauthorized");
    jwt.verify(token, process.env.ADMIN_JWT_SECRET!);
}

export async function POST(req: Request) {
    try {
        // Public endpoint for contact form submission
        const body = await req.json();

        // Validate body (e.g. using zod)
        if (!body.email || !body.message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from("leads")
            .insert([body])
            .select()
            .single();

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });

        // Optional: Send email notification here using SendGrid/Resend

        return NextResponse.json({ success: true, data });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function GET(req: Request) {
    // Admin only: List leads
    try {
        await requireAuth(req);
        const { data, error } = await supabaseAdmin
            .from("leads")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
        return NextResponse.json(data);
    } catch (e: any) {
        return NextResponse.json({ error: e.message || "Unauthorized" }, { status: 401 });
    }
}
