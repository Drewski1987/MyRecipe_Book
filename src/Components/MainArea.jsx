import { Routes, Route, Link } from 'react-router-dom'
import Recipes from "./Recipes"
import Favorites from './Favorites'
import Login from "./Login"
import SelectedRecipe from './SelectedRecipe'
import Home from './Home'


export default function MainArea ({}){
    return (
        <div id="mainSection">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path = "/recipes" element={<Recipes/>} />
                <Route path = "favorites" element={<Favorites/>} />
                <Route path = "/login" element={<Login/>} />
                <Route path = "/recipes/:id" element={<SelectedRecipe/>}/>
            </Routes>
        </div>


    )

}