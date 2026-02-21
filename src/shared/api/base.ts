export const API_URL = "https://test-task-back-8h7wvk31t-kakady2006s-projects.vercel.app/";

export const fetcher = async (url: string) => {
    const response = await fetch(API_URL + url);
    if (!response.ok) {
        throw new Error("Failed to load data");
    }
    return response.json();
}