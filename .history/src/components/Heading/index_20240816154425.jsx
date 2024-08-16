export const Heading = (children, type = "h1") => {
    if (type == "h1") {
        return <h1>children</h1>;
    }
    return <h2>children</h2>;
};
