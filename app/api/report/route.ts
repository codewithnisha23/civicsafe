import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";



export async function POST(request: Request) {
  try {
    const { id, status } = await request.json();

    if (!id || !status) {
      return NextResponse.json({
        success: false,
        message: "Missing id or status",
      });
    }

    const { error } = await supabase
      .from("reports")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("DB ERROR:", error);
      return NextResponse.json({
        success: false,
        message: error.message,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Report updated successfully",
    });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}
export async function GET() {
    try {
      const { data, error } = await supabase
        .from("reports")
        .select("*")
        .order("created_at", { ascending: false });
  
      if (error) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 500 }
        );
      }
  
      return NextResponse.json({
        success: true,
        data,
      });
  
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    }
  }