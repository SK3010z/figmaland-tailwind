export const Heading = ({children, type = "h1", color}) => {
    if (type == "h1") {
        return (
            <h1 className="text-[4.625rem] leading-[84px]">{children}</h1>
        );
    }
    return(
     <h2 className="text-5xl leading-[55px] font-graphik text-text">{children}</h2>
    )
};
