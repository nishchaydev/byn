"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push("/admin-network-console-byn-2025");
            } else {
                setError("Invalid access token");
            }
        } catch (err) {
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-byn-black p-4">
            <div className="w-full max-w-md space-y-8 p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-byn-teal/10 text-byn-teal mb-4">
                        <Lock size={32} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-white">Network Console</h2>
                    <p className="mt-2 text-white/60">Restricted Access Area</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <Input
                            type="password"
                            placeholder="Enter Access Token"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-black/50 border-white/10 text-white placeholder:text-white/30 focus:border-byn-teal"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-byn-teal hover:bg-byn-teal/80 text-black font-bold"
                        disabled={loading}
                    >
                        {loading ? "Verifying..." : "Access System"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
