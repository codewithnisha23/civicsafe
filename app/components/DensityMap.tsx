export default function DensityMap() {
    const areas = [
        { name: "Zone A", cases: 15, top: "30%", left: "20%" },
        { name: "Zone B", cases: 12, top: "50%", left: "40%" },
        { name: "Zone C", cases: 10, top: "35%", left: "65%" },
        { name: "Zone D", cases: 8, top: "65%", left: "55%" },
        { name: "Zone E", cases: 5, top: "60%", left: "25%" },
    ];

    return (
        <div className="border rounded-xl p-8 bg-white shadow-sm mt-16">

            {/* Title */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Pollution Density Map
                </h2>
                <p className="text-sm text-gray-500">
                    Visualization of pollution case concentration across zones
                </p>
            </div>

            {/* Map Container */}
            <div className="relative h-80 bg-gray-50 rounded-lg border overflow-hidden">

                {areas.map((area, i) => {
                    const size = area.cases * 4;

                    return (
                        <div
                            key={i}
                            className="absolute flex items-center justify-center text-white font-semibold rounded-full bg-blue-600 shadow-md"
                            style={{
                                width: size,
                                height: size,
                                top: area.top,
                                left: area.left,
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            {area.cases}
                        </div>
                    );
                })}

            </div>
        </div>
    );
}