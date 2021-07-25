import React, {useEffect} from 'react'
import './SideBar.css'
import { GiGreenhouse, GiPaperBoat, GiTripleNeedle } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import { GiOpenedFoodCan } from 'react-icons/gi'
import { FaDog } from 'react-icons/fa'
import { CgGirl } from 'react-icons/cg'
import axios from 'axios'
import {MdRemoveShoppingCart} from 'react-icons/md'

export default function SideBar({posts, setPosts}) {

    const covid = (e) => {
        axios.get('http://localhost:4000/api/category/covid')
        .then((response) => {  
          console.log(response.data)  
          setPosts(response.data)          
        },                    
        (error) => {
          console.log(error);
      });
    }

    const homeless = (e) => {
        axios.get('http://localhost:4000/api/category/homeless')
        .then((response) => {  
          console.log(response.data)  
          setPosts(response.data)          
        },                    
        (error) => {
          console.log(error);
      });
    }

    const food = (e) => {
        axios.get('http://localhost:4000/api/category/food')
        .then((response) => {  
          console.log(response.data)  
          setPosts(response.data)          
        },                    
        (error) => {
          console.log(error);
      });
    }

    const animal = (e) => {
        axios.get('http://localhost:4000/api/category/animal')
        .then((response) => {  
          console.log(response.data)  
          setPosts(response.data)          
        },                    
        (error) => {
          console.log(error);
      });
    }

    const women = (e) => {
        axios.get('http://localhost:4000/api/category/women')
        .then((response) => {  
          console.log(response.data)  
          setPosts(response.data)          
        },                    
        (error) => {
          console.log(error);
      });
    }

    const refugee = (e) => {
        axios.get('http://localhost:4000/api/category/refugee')
        .then((response) => {  
          console.log(response.data)  
          setPosts(response.data)          
        },                    
        (error) => {
          console.log(error);
      });
    }

    const refresh = () => {
        window.location.reload(false)
    }



    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                <GiGreenhouse className="sidebar-titleicon"/>
                Donation Center 
            </div>

            <div className="sidebar-options">
                <div className="sidebar-option">
                    Browse
                </div>
                <div className="sidebar-option">
                    Requests
                </div>
                <div className="sidebar-option">
                    Donations
                </div>
                <div className="sidebar-option">
                    Saved
                </div>
            </div>

            <div className="sidebar-hr" />

            <div className="sidebar-subtitle">
                Categories
            </div>
            <div className="sidebar-categories">
                <div className="sidebar-category" onClick={covid}>
                    <GiTripleNeedle className="sidebar-titleicon" />
                    COVID-19 Related
                </div>
                <div className="sidebar-category" onClick={homeless}>
                    <AiFillHome className="sidebar-titleicon" />
                    Homeless Shelters
                </div>
                <div className="sidebar-category" onClick={food}> 
                    <GiOpenedFoodCan className="sidebar-titleicon"/>
                    Food Pantries
                </div>
                <div className="sidebar-category" onClick={animal}>
                    <FaDog className="sidebar-titleicon"/>
                    Animal Shelter
                </div>
                <div className="sidebar-category" onClick={women}>
                    <CgGirl className="sidebar-titleicon"/>
                    Women's Shelter
                </div>
                <div className="sidebar-category" onClick={refugee}>
                    <GiPaperBoat className="sidebar-titleicon"/>
                    Refugee Shelter
                </div>

                <div className="sidebar-category" onClick={refresh}>
                    <MdRemoveShoppingCart className="sidebar-titleicon"/>
                    No Filter
                </div>
            </div>
        </div>
    )
}
