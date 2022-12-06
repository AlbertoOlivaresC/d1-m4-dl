
const Header = ({className = "text-primary", texto="sin texto"}) => {
    return <h1 className={className}>{texto}</h1>
}

export default Header