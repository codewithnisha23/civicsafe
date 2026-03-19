import imageCompression from "browser-image-compression";
import { supabase } from "./supabaseClient";

export async function uploadReportImage(file: File, caseId: string) {

    // compress image before upload
    const compressed = await imageCompression(file, {
        maxWidthOrHeight: 1200,
        maxSizeMB: 0.3,
        useWebWorker: true
    });

    const fileName = `${caseId}.webp`;

    const { data, error } = await supabase.storage
        .from("report_images")
        .upload(fileName, compressed, {
            contentType: "image/webp",
            upsert: true
        });

    if (error) {
        console.error("Image upload error:", error);
        throw error;
    }

    const { data: publicUrl } = supabase.storage
        .from("report_images")
        .getPublicUrl(fileName);

    return publicUrl.publicUrl;
}