import { useState } from "@hookstate/core";
import React, { useEffect } from "react";
import { getListOfQuestions } from "../../services/questions";
import store from "../../store";
import AssessmentQuestions from "./assessment-question";

function Home() {
    const { user, questions } = useState(store)
    useEffect(() => {
        getListOfQuestions()
    }, [])
    return (
       <div className="bg-red-100">
           <AssessmentQuestions listOfQuestions={questions.get()}/>
       </div>
    )
}
export default Home