import { Routes, Route, Link } from 'react-router-dom'

export default function NavBar ({}){

    return (
        <div className="navbar">

            <Link to="/Login"> LogIn </Link>
            <Link to="/">Home</Link>
            <Link to="/Recipes"> Recipes </Link>
           
            <Link to ="/favorites"> MyFavorites </Link>
        </div>


    )

}