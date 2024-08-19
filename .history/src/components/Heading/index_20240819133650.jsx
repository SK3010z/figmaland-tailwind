export const Heading = ({children, type = "h1", color = '', className = ''}) => {
    const customizedColor = color === 'white' ? 'text-white' : 'text-text'

    if (type == "h1") {
        return (
            <h1 className={`text-[4.625rem] leading-[84px] font-graphik-bold ${className} ${customizedColor}`}>{children}</h1>
        )
    }

    return(
     <h2 className={`text-5xl leading-[55px] font-graphik ${customizedColor}`}>{children}</h2>
    )
};
