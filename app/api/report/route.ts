import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { uploadReportImage } from "@/lib/UploadImages";

export async function POST(request: Request) {
    try {

        const body = await request.json();

        const { title, description, location, category, caseid, image_url } = body;

        if (!title || !description || !location) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        const caseId = "CIV-" + Math.floor(100000 + Math.random() * 900000);

        const report = {
            case_id: caseId,
            title,
            description,
            location,
            category,
            image_url,
            status: "Under Verification"
        };

        const { data, error } = await supabase
            .from("reports")
            .insert([report])
            .select();

        if (error) {
            console.error("Database error:", error);

            return NextResponse.json({
                success: false,
                message: "Database error"
            });
        }

        return NextResponse.json({
            success: true,
            caseId: caseId,
            report: data
        });

    } catch (error) {
        console.error("Report API error:", error);

        return NextResponse.json({
            success: false,
            message: "Server error"
        });
    }
}