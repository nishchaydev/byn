import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { supabaseAdmin } from "@/lib/supabaseClient";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) return NextResponse.json({ error: "Missing credentials" }, { status: 400 });

        const { data, error } = await supabaseAdmin.from("users").select("*").eq("email", email).limit(1).single();

        if (error || !data) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const isValid = bcrypt.compareSync(password, data.password_hash);
        if (!isValid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const payload = { sub: data.id, email: data.email, role: data.role };
        const token = jwt.sign(payload, process.env.ADMIN_JWT_SECRET!, { expiresIn: "7d" });

        const res = NextResponse.json({ ok: true });
        res.cookies.set({
            name: "byn_admin_token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });
        return res;
    } catch (e) {
        console.error("Login error:", e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
