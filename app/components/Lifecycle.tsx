export default function Lifecycle() {
    const data = [
        { label: "Under Verification", value: 234, color: "bg-gray-400" },
        { label: "Awaiting Response", value: 445, color: "bg-yellow-500" },
        { label: "In Progress", value: 321, color: "bg-blue-600" },
        { label: "Resolved", value: 234, color: "bg-green-500" },
    ];

    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="border rounded-xl p-8 bg-white shadow-sm mt-16">

            {/* Title */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Case Lifecycle Distribution
                </h2>
                <p className="text-sm text-gray-500">
                    Current status of reported pollution cases
                </p>
            </div>

            {/* Progress Bar */}
            <div className="flex h-8 rounded-lg overflow-hidden">
                {data.map((d, i) => (
                    <div
                        key={i}
                        className={`${d.color}`}
                        style={{ width: `${(d.value / total) * 100}%` }}
                    />
                ))}
            </div>

            {/* Legend + Values */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-sm">
                {data.map((d, i) => (
                    <div key={i} className="flex items-center gap-3">

                        {/* Color indicator */}
                        <span className={`w-3 h-3 rounded-full ${d.color}`} />

                        <div>
                            <p className="font-medium text-gray-800">{d.label}</p>
                            <p className="text-gray-500">{d.value} cases</p>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}