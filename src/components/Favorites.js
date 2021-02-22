import React from "react";
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



export default ()=>{
    return (
        <BottomNavigation value="" className="favorites-bar" >
            <Link to="/recipes/Favorites"> Go to your favorite Recipes<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /></Link> 
        </BottomNavigation>
)
}