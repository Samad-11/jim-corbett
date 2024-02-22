import React from 'react'

const Title = ({ subTitle = '', mainTitle = '' }: { subTitle: string, mainTitle: string }) => {
    return (
        <div className="w-full text-center bg-primary/50 py-7 text-2xl">
            <p className="text-sm text-primary-content font-extrabold" >{subTitle}</p>
            <p className="text-2xl font-serif font-extralight" >{mainTitle}</p>
        </div>
    )
}

export default Title