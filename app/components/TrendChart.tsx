"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", total: 150, resolved: 120 },
    { month: "Feb", total: 200, resolved: 150 },
    { month: "Mar", total: 280, resolved: 210 },
    { month: "Apr", total: 310, resolved: 240 },
    { month: "May", total: 350, resolved: 260 },
    { month: "Jun", total: 420, resolved: 310 },
    { month: "Jul", total: 390, resolved: 300 },
    { month: "Aug", total: 450, resolved: 340 },
];

export default function TrendChart() {
    return (
        <div className="border rounded-xl p-8 bg-white shadow-sm mt-16">

            {/* Section Title */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Pollution Trend Analysis
                </h2>
                <p className="text-sm text-gray-500">
                    Tracking pollution reporting trends across the city
                </p>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={320}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                    <XAxis
                        dataKey="month"
                        tick={{ fontSize: 12 }}
                        stroke="#9ca3af"
                    />

                    <YAxis
                        tick={{ fontSize: 12 }}
                        stroke="#9ca3af"
                    />

                    <Tooltip />

                    {/* Total Cases */}
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#1e3a8a"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />

                    {/* Resolved Cases */}
                    <Line
                        type="monotone"
                        dataKey="resolved"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />

                </LineChart>
            </ResponsiveContainer>

        </div>
    );
}