import { TrendingUp, Clock, CheckCircle, Activity } from "lucide-react";

export default function Metrics() {
    const cards = [
        {
            title: "Total Cases",
            value: "2,847",
            note: "+12% this month",
            icon: TrendingUp,
        },
        {
            title: "Active Cases",
            value: "1,234",
            note: "43% of total",
            icon: Activity,
        },
        {
            title: "Resolved Cases",
            value: "1,613",
            note: "57% resolved",
            icon: CheckCircle,
        },
        {
            title: "Avg Resolution",
            value: "14.3 days",
            note: "-2 days vs last month",
            icon: Clock,
        },
    ];

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, i) => {
                const Icon = card.icon;

                return (
                    <div
                        key={i}
                        className="border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition"
                    >
                        {/* Icon */}
                        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-700 rounded-lg mb-4">
                            <Icon size={20} />
                        </div>

                        {/* Title */}
                        <h3 className="text-sm text-gray-500">{card.title}</h3>

                        {/* Value */}
                        <p className="text-3xl font-bold text-gray-900 mt-1">
                            {card.value}
                        </p>

                        {/* Note */}
                        <p className="text-xs text-gray-400 mt-1">{card.note}</p>
                    </div>
                );
            })}
        </section>
    );
}