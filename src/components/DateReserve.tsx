"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function DateReserve() {
    return (
        <div className="bg-white rounded-lg w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                    label="Select Booking Date"
                    className="w-full"
                />
            </LocalizationProvider>
        </div>
    )
}