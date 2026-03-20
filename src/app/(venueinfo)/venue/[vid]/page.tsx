import Image from "next/image"
import getVenue from "@/libs/getVenue"

export default async function VenueDetailPage({params}:{params: Promise<{vid:string}>}) {
    const {vid} = await params
    const venueDetail = await getVenue(vid)
    return (
        <main className="text-center p-5">
           <div className="flex flex-row my-5">
            <Image src={(venueDetail.data.picture)}
            alt="venue picture"
            width={0} height={0} sizes="100vw"
            className="rounded-lg w-[30%] bg-black"
            />
            <div className="display-flex flex-direction-column">
            <div className="text-md mx-5 font-bold"><h1>{(venueDetail.data.name)}</h1></div>
            <div className="text-md mx-5 text-left">
                    <div>Name: {venueDetail.data.name}</div>
                    <div>Address: {venueDetail.data.address}</div>
                    <div>District: {venueDetail.data.district}</div>
                    <div>Postal Code: {venueDetail.data.postalcode}</div>
                    <div>Tel: {venueDetail.data.tel}</div>
                    <div>Daily Rate: {venueDetail.data.dailyrate}</div>
                </div>    
            </div>
            
            
           </div>
        </main>
    )
}