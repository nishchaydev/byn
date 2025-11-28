import { supabaseAdmin } from "./supabaseClient";

export async function uploadFile(bucket: string, file: File | Buffer, path: string) {
    // Ensure bucket exists (optional, or assume created in Supabase)

    const { data, error } = await supabaseAdmin.storage
        .from(bucket)
        .upload(path, file, { upsert: true });

    if (error) throw error;

    const { data: publicUrlData } = supabaseAdmin.storage
        .from(bucket)
        .getPublicUrl(path);

    return publicUrlData.publicUrl;
}
