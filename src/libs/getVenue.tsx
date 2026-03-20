export default async function getVenue(id: string) {
    const response = await fetch(`https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch venue")
    }
    const result = await response.json()
    console.log(result) // ดูว่า structure เป็นยังไง
    return result
}