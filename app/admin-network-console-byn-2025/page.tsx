"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LogOut, FileText, Download } from "lucide-react";

export default function AdminConsole() {
    const router = useRouter();

    const handleLogout = async () => {
        // In a real app, you'd call an API to clear the cookie
        // For now, we'll just redirect to login
        router.push("/admin-network-console-byn-2025/login");
    };

    return (
        <div className="min-h-screen bg-byn-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white">Network Console</h1>
                        <p className="text-white/60">System Status: <span className="text-byn-teal">Online</span></p>
                    </div>
                    <Button variant="outline" onClick={handleLogout} className="border-white/10 hover:bg-white/10">
                        <LogOut className="mr-2 h-4 w-4" /> Disconnect
                    </Button>
                </header>

                <Tabs defaultValue="quotation" className="space-y-8">
                    <TabsList className="bg-white/5 border border-white/10 p-1">
                        <TabsTrigger value="quotation" className="data-[state=active]:bg-byn-teal data-[state=active]:text-black">Quotation Generator</TabsTrigger>
                        <TabsTrigger value="invoice" className="data-[state=active]:bg-byn-teal data-[state=active]:text-black">Invoice Generator</TabsTrigger>
                        <TabsTrigger value="assets" className="data-[state=active]:bg-byn-teal data-[state=active]:text-black">Brand Assets</TabsTrigger>
                    </TabsList>

                    {/* Quotation Generator Tab */}
                    <TabsContent value="quotation">
                        <Card className="bg-white/5 border-white/10 text-white">
                            <CardHeader>
                                <CardTitle>Generate Quotation</CardTitle>
                                <CardDescription className="text-white/60">Create a new project quotation PDF.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Client Name</Label>
                                        <Input placeholder="Acme Corp" className="bg-black/50 border-white/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Project Title</Label>
                                        <Input placeholder="Website Redesign" className="bg-black/50 border-white/10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Items (JSON Format)</Label>
                                    <Textarea
                                        placeholder='[{"description": "Design Phase", "amount": 5000}, {"description": "Development", "amount": 8000}]'
                                        className="bg-black/50 border-white/10 font-mono h-32"
                                    />
                                </div>
                                <Button className="w-full bg-byn-teal hover:bg-byn-teal/80 text-black font-bold">
                                    <FileText className="mr-2 h-4 w-4" /> Generate PDF
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Invoice Generator Tab */}
                    <TabsContent value="invoice">
                        <Card className="bg-white/5 border-white/10 text-white">
                            <CardHeader>
                                <CardTitle>Generate Invoice</CardTitle>
                                <CardDescription className="text-white/60">Create a new tax invoice PDF.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Invoice Number</Label>
                                        <Input placeholder="INV-2025-001" className="bg-black/50 border-white/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Due Date</Label>
                                        <Input type="date" className="bg-black/50 border-white/10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Items (JSON Format)</Label>
                                    <Textarea
                                        placeholder='[{"description": "Design Phase", "amount": 5000}]'
                                        className="bg-black/50 border-white/10 font-mono h-32"
                                    />
                                </div>
                                <Button className="w-full bg-byn-pink hover:bg-byn-pink/80 text-white font-bold">
                                    <FileText className="mr-2 h-4 w-4" /> Generate Invoice
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Assets Tab */}
                    <TabsContent value="assets">
                        <Card className="bg-white/5 border-white/10 text-white">
                            <CardHeader>
                                <CardTitle>Brand Assets</CardTitle>
                                <CardDescription className="text-white/60">Download official BYN logos and assets.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <Button variant="outline" className="h-24 flex flex-col gap-2 border-white/10 hover:bg-white/5">
                                        <Download className="h-6 w-6" />
                                        <span>Logo Pack (SVG)</span>
                                    </Button>
                                    <Button variant="outline" className="h-24 flex flex-col gap-2 border-white/10 hover:bg-white/5">
                                        <Download className="h-6 w-6" />
                                        <span>Social Kit (PNG)</span>
                                    </Button>
                                    <Button variant="outline" className="h-24 flex flex-col gap-2 border-white/10 hover:bg-white/5">
                                        <Download className="h-6 w-6" />
                                        <span>Brand Guidelines</span>
                                    </Button>
                                    <Button variant="outline" className="h-24 flex flex-col gap-2 border-white/10 hover:bg-white/5">
                                        <Download className="h-6 w-6" />
                                        <span>Presentation Deck</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
