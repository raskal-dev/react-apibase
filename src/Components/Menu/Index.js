import React from 'react'
import '../../assets/Css/menu.css';
import AuthServices from '../../Services/Auth.services';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        AuthServices.logout()
        .then(res => {
            localStorage.removeItem('token');
            navigate('/');
        })
        .catch(err => {
            console.log(err);
        })
    }

  return (
    <>
        <div class="area"></div><nav class="main-menu">
            <ul>
                <li>
                    <a href="#" onClick={() => { navigate('/home') }}>
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                           Dashboard
                        </span>
                    </a>
                  
                </li>
                <li class="has-subnav">
                    <a href="#" onClick={() => { navigate('/userlist') }}>
                        <i class="fa fa-user fa-2x"></i>
                        <span class="nav-text">
                            User
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-comments fa-2x"></i>
                        <span class="nav-text">
                            Group Hub Forums
                        </span>
                    </a>
                    
                </li>
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-camera-retro fa-2x"></i>
                        <span class="nav-text">
                            Survey Photos
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-film fa-2x"></i>
                        <span class="nav-text">
                            Surveying Tutorials
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-book fa-2x"></i>
                        <span class="nav-text">
                           Surveying Jobs
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i class="fa fa-cogs fa-2x"></i>
                        <span class="nav-text">
                            Tools & Resources
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i class="fa fa-map-marker fa-2x"></i>
                        <span class="nav-text">
                            Member Map
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <a href="#" onClick={handleLogout}>
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
    </>
  );
}

export default Menu;