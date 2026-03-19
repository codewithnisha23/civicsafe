import Navbar from "../components/Navbar";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50">

            <Navbar />

            <section className="max-w-5xl mx-auto py-20 px-6">

                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    About CivicSafe
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                    CivicSafe is a digital platform designed to help citizens report
                    pollution issues in their communities. By enabling structured
                    reporting, location tracking, and transparent case monitoring,
                    CivicSafe helps bridge the gap between citizens and local authorities.
                </p>

                {/* Mission */}
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Our Mission
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to empower communities to actively participate in
                        protecting their environment. CivicSafe provides a transparent
                        system where pollution reports are documented, tracked, and
                        monitored, ensuring that environmental issues receive the attention
                        they deserve.
                    </p>
                </div>

                {/* How it works */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        How CivicSafe Works
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <h3 className="font-semibold text-lg mb-2">
                                1. Report
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Citizens report pollution issues with details, photos, and
                                location information.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <h3 className="font-semibold text-lg mb-2">
                                2. Track
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Reports are tracked transparently through verification,
                                investigation, and resolution stages.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border shadow-sm">
                            <h3 className="font-semibold text-lg mb-2">
                                3. Improve
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Data insights help communities and authorities identify
                                pollution hotspots and improve environmental safety.
                            </p>
                        </div>

                    </div>
                </div>

            </section>

        </main>
    );
}