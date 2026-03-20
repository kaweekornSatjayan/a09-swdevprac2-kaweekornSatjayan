import DateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";

export default async function Booking() {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="w-full flex flex-col items-center space-y-4 pt-10">
            <div className="text-xl font-medium">จองสถานที่จัดเลี้ยง</div>
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
                <tr><td>Email</td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
            
            <div className="w-[400px] space-y-6 bg-slate-100 p-8 rounded-lg shadow-sm">
                
               
                <div className="space-y-4">
                    <TextField 
                        variant="standard" name="Name-Lastname" 
                        label="Name-Lastname" fullWidth 
                    />
                    <TextField 
                        variant="standard" name="Contact-Number" 
                        label="Contact-Number" fullWidth 
                    />
                </div>
                
                    <FormControl variant="standard" fullWidth>
                    <InputLabel id="venue-label">Select Venue</InputLabel>
                    <Select
                        labelId="venue-label"
                        id="venue"
                        defaultValue=""
                        label="Select Venue"
                    >
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </FormControl>

                <div className="space-y-2">
                    <div className="text-sm text-gray-600">Booking Date</div>
                    <DateReserve />
                </div>

                <button 
                    name="Book Venue" 
                    className="block w-full rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                    shadow-sm text-white transition-colors"
                >
                    Book Venue
                </button>
            </div>
        </main>
    );
}