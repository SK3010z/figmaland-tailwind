export const Heading = ({children, type = "h1", color = '', className = ''}) => {
    const customizedColor = color === 'white' ? 'text-white' : 'text-text'

    if (type == "h1") {
        return (
            <h1 className={`${className} text-[4.625rem] leading-[84px] font-graphik-bold ${customizedColor}`}>{children}</h1>
        )
    }
    if (type == "h4") {
        return (
            <h1 className={`${className} text-[28px] leading-[40px] font-graphik ${customizedColor}`}>{children}</h1>
        )
    }

    return(
     <h2 className={`${className} text-5xl leading-[55px] font-graphik ${customizedColor}`}>{children}</h2>
    )
};
