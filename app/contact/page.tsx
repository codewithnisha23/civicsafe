"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ContactPage() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Contact Message:", form);
    };

    return (
        <main className="min-h-screen bg-gray-50">

            <Navbar />

            <section className="max-w-4xl mx-auto py-20 px-6">

                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Contact Us
                </h1>

                <p className="text-gray-600 mb-10 max-w-xl">
                    Have questions, suggestions, or want to collaborate with CivicSafe?
                    Send us a message and our team will respond soon.
                </p>

                {/* Contact Card */}
                <div className="bg-white border rounded-xl p-10 shadow-sm">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Write your message..."
                                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

        </main>
    );
}