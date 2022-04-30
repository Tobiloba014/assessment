import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import { getListOfQuestions } from "../../services/questions";
import store from "../../store";
import AssessmentQuestions from "./assessment-question";
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()

    useEffect(() => {
        getListOfQuestions()
    }, [])
    const questionsHandler = () => {
        navigate("/questions")

    }
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div>

                </div>
            </div>
            <div className="bg-red-100">

                <p style={{ textAlign: "center" }}>
                    <h2 style={{ flex: 1, justifyContent: 'center', alignItems: "center", lineHeight: "100px" }}>Homepage</h2>
                    <div onClick={questionsHandler}>Assessment Questions</div>
                </p>
            </div>
        </div>
    )
}
export default Home