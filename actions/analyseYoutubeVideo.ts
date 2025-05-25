"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function analyseYoutubeVideo(formData: FormData) {
    console.log("formData", formData)

    const { userId, redirectToSignIn } = await auth();

    if(!userId) {
        return redirectToSignIn();
    }

    const url = formData.get("url")?.toString();

    if(!url) return;

    const videoId = "abc1234";

    if(!videoId) return;

    // Redirect to the new analysis page
    redirect(`/video/${videoId}/analysis`);
}