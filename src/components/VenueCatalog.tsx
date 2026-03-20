import Link from "next/link";
import Card from "./Card";
import { VenueJson, VenueItem } from '../../interface';

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
    const venueData = await venuesJson;
    return (
        <>
            Explore {venueData.count} venues in our catalog
            <div style={{ margin: "20px", display: "flex",
                justifyContent: "space-around", flexWrap: "wrap", padding: "10px" }}>
                {
                    venueData.data.map((VenueItem: VenueItem) => (
                        <Link href={`/venue/${VenueItem.id}`} key={VenueItem.id} className="w-1/5">
                            <Card venueName={VenueItem.name} imgSrc={VenueItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}