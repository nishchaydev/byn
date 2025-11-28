import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseClient";
import jwt from "jsonwebtoken";

async function requireAuth(req: Request) {
    const token = (await req.headers.get("cookie"))?.split("; ").find(c => c.startsWith("byn_admin_token="))?.split("=")[1];
    if (!token) throw new Error("Unauthorized");
    jwt.verify(token, process.env.ADMIN_JWT_SECRET!);
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { data, error } = await supabaseAdmin
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 404 });
    return NextResponse.json(data);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await requireAuth(req);
        const { id } = await params;
        const body = await req.json();

        const { data, error } = await supabaseAdmin
            .from("projects")
            .update(body)
            .eq("id", id)
            .select()
            .single();

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
        return NextResponse.json(data);
    } catch (e: any) {
        return NextResponse.json({ error: e.message || "Unauthorized" }, { status: 401 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await requireAuth(req);
        const { id } = await params;

        const { error } = await supabaseAdmin
            .from("projects")
            .delete()
            .eq("id", id);

        if (error) return NextResponse.json({ error: error.message }, { status: 500 });
        return NextResponse.json({ success: true });
    } catch (e: any) {
        return NextResponse.json({ error: e.message || "Unauthorized" }, { status: 401 });
    }
}
