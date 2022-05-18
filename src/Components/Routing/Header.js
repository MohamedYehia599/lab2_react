import { NavLink } from "react-router-dom"

let Header = ()=>{
    return (
        <div>
            <NavLink style={{margin:'10px'}} to={'/'}>Home</NavLink>
            <NavLink style={{margin:'10px'}} to={'/about'}>About</NavLink>
            <NavLink style={{margin:'10px'}} to={'*'}>Error</NavLink>
        </div>
    )
}
export default Header;