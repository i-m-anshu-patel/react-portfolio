import { Progress, Typography } from '@material-tailwind/react'
import React from 'react'

const SkillItems = ({ skill }) => {
    const ratingProgressNumber = skill.ratings * 20; // (skill/5)*100
    return (
        <div className="w-full sm:max-w-full lg:flex border-2 border-gray-400 rounded-md border-solid hover:border-dotted cursor-pointer">
            <div className="w-1/3">
                <img className="h-24 w-32" src={skill.logoUrl} />
            </div>
            <div className="w-2/3 mr-3 pt-2">
                <div className="mb-2 flex items-center justify-between gap-4">
                    <Typography component={'span'} color="blue-gray" variant="h6">
                    {skill.name}
                    </Typography>
                    <Typography component={'span'} color="blue-gray" variant="h6">
                        {skill.ratings} rating
                    </Typography>
                </div>
                <Progress value={ratingProgressNumber}
                    variant="filled"
                    color='blue'
                    size="lg"
                    className="border border-gray-700 bg-gray-700 "
                />
            </div>

        </div>
    )
}

export default SkillItems
