'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card({ venueName, imgSrc, onRatingChange }: { venueName: string, imgSrc: string, onRatingChange?:Function }) {
    const [value, setValue] = useState<number | null>(0);
    return(
       <InteractiveCard>
        
    <div className='w-full h-[60%] relative rounded-t-lg'>
        <Image src={imgSrc}
            alt='Product Picture'
            fill={true}
            className='object-cover rounded-t-lg'/>
    </div>
    <div className='w-full h-[20%] p-[10px]'>{venueName}</div>
    <div className='w-full h-[20%] px-[10px] flex items-center' 
                 onClick={(e) => e.stopPropagation()}> 
                <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        if (onRatingChange) onRatingChange(venueName, newValue || 0);
                    }}
                /></div>
</InteractiveCard>
    );
}