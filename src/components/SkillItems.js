import React from 'react'

const SkillItems = ({ skill }) => {
    return (
        <div className="w-full sm:max-w-full lg:flex">
            <div className="w-1/3">
                <img src={skill.logoUrl}/>
            </div>
            <div className="w-2/3">
            {skill.name}, {skill.ratings}
            </div>
            
        </div>
    )
}

export default SkillItems
