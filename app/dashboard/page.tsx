import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, ArrowUpRight, ArrowDownRight, DollarSign, FileText, Users, Clock } from "lucide-react"
import Link from "next/link"

const stats = [
    {
        title: "Total Revenue",
        value: "$42,850.50",
        change: "+12.5%",
        trend: "up",
        icon: DollarSign,
        color: "text-byn-teal",
    },
    {
        title: "Total Invoices",
        value: "1,204",
        change: "+4.2%",
        trend: "up",
        icon: FileText,
        color: "text-white",
    },
    {
        title: "Active Clients",
        value: "152",
        change: "+8.1%",
        trend: "up",
        icon: Users,
        color: "text-byn-pink",
    },
    {
        title: "Pending",
        value: "$12,450.00",
        change: "-2.4%",
        trend: "down",
        icon: Clock,
        color: "text-byn-gold",
    },
]

const recentActivity = [
    {
        id: 1,
        title: "Q3 Marketing Campaign",
        client: "Innovate Inc.",
        type: "Proposal",
        date: "2023-10-26",
        status: "Paid",
        statusColor: "bg-green-500/20 text-green-300",
    },
    {
        id: 2,
        title: "Invoice #INV-0142",
        client: "Quantum Leap",
        type: "Invoice",
        date: "2023-10-25",
        status: "Pending",
        statusColor: "bg-yellow-500/20 text-yellow-300",
    },
    {
        id: 3,
        title: "Brand Style Guide",
        client: "Apex Solutions",
        type: "Quotation",
        date: "2023-10-22",
        status: "Sent",
        statusColor: "bg-blue-500/20 text-blue-300",
    },
    {
        id: 4,
        title: "Website Redesign Mockups",
        client: "Momentum Corp",
        type: "Letterhead",
        date: "2023-10-20",
        status: "Draft",
        statusColor: "bg-gray-500/20 text-gray-300",
    },
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h2>
                <div className="flex gap-4">
                    <Link href="/dashboard/invoices">
                        <Button variant="neon" size="sm">
                            <Plus className="mr-2 h-4 w-4" /> New Invoice
                        </Button>
                    </Link>
                    <Link href="/dashboard/quotations">
                        <Button variant="outline" size="sm">
                            <Plus className="mr-2 h-4 w-4" /> New Quote
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.title} className="bg-byn-gray border-white/10">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-white/60">
                                    {stat.title}
                                </CardTitle>
                                <Icon className={`h-4 w-4 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <p className={`text-xs flex items-center mt-1 ${stat.trend === "up" ? "text-green-400" : "text-red-400"
                                    }`}>
                                    {stat.trend === "up" ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                                    {stat.change} from last month
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Recent Activity */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Recent Documents</h3>
                <div className="bg-byn-gray rounded-xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="text-xs text-white/60 uppercase bg-black/30">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Title</th>
                                    <th className="px-6 py-4 font-medium">Client</th>
                                    <th className="px-6 py-4 font-medium">Type</th>
                                    <th className="px-6 py-4 font-medium">Date</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {recentActivity.map((item) => (
                                    <tr key={item.id} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{item.title}</td>
                                        <td className="px-6 py-4 text-white/80">{item.client}</td>
                                        <td className="px-6 py-4 text-white/80">{item.type}</td>
                                        <td className="px-6 py-4 text-white/80">{item.date}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.statusColor}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white/60 hover:text-white">
                                                <span className="sr-only">Open menu</span>
                                                <ArrowUpRight className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
