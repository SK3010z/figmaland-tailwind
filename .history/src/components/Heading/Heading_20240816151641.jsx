export const Heading = (children, type = 'h1') => {
    if(type == 'h1'){
        return <h1>children</h1>
    }
    else if(type == 'h2'){
        return <h2>children</h2>
    }
}