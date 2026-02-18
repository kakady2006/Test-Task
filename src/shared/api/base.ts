export const API_URL = "http://localhost:3001";

export const fetcher = async (url: string) => {
    const response = await fetch(API_URL + url);
    if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
    }
    return response.json();
}