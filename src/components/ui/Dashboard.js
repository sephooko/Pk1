import React from "react";
import {Header} from "./Header"
import {Cards} from "../widgets/Cards"
import {Notes} from "../widgets/Notes"
import {Spotify} from "../widgets/Spotify"
import {Timer} from "../widgets/Timer"
import {ToDo} from "../widgets/ToDo"
import {Background} from "./Background";


const Dashboard=()=>{
    return(
        <>
            <Header/>
            <br/>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col"><Timer/><br/></div>
                    <div className="col"><ToDo/><br/></div>
                    <div className="col"><Notes/><br/></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col"><br/></div>
                    <div className="col"><Cards/><br/></div>
                    <div className="col"></div>
                </div>
            </div>
            <Spotify/>

        </>
    )
}

export default Dashboard;
