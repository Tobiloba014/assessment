import { useState } from "react";
import { useFormik } from "formik";
 import { useState as useGlobalState } from "@hookstate/core";
 import store from "../../store";
 
const AssessmentQuestions = ({  }) => {
    const { user, questions } = useGlobalState(store)
    const listOfQuestions = questions.get()
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
   const [processing, setProcessing] = useState(false)
   const formik = useFormik({
 
 
       initialValues: { 
 
       },
       onSubmit: async (values) => {
           setProcessing(true)
           console.log("I am here")
       },
   })
   const questionsIndex = currentQuestionIndex
   const q = listOfQuestions[questionsIndex]
   const next = () => {
           setCurrentQuestionIndex(currentQuestionIndex + 1) }
 
   let buttonHtml;
   if (questionsIndex === 0) {
       buttonHtml = (
           <>
               <button onClick={next} type="button"> Next</button>
           </>
       );
   } else if (questionsIndex === listOfQuestions.length - 1) {
       buttonHtml = (
           <>
               <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} type="button"> Previous</button>
               <button type="button"> Submit</button>
           </>
       );
   } else {
       <>
           <button type="button"> Previous</button>
           <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} type="button"> Next</button>
       </>;
 
   }
   return (
       <form onSubmit={formik.handleSubmit}>
           <div className="bg-sky-300 h-screen">
               <div className="text-center pt-20" key={`questions${questionsIndex}`}>
                   <div className="text-left">Question {questionsIndex + 1}</div>
                   <div>{q?.question}</div>
                   <div>{q?.type === "multiple-choice" ?
                       <>{q?.options.map((o, optionsIndex) => {
                           return <div key={`option${optionsIndex}`}>
                               <input type="radio"
                                   id={`option${optionsIndex}`}
                                   name={`option${optionsIndex}`}
                                   value="" />
                               {o}
                           </div>
 
 
                       })}</>
                       :
 
                       <div>
                           Answer:<input id="Answer" name="Answer" placeholder='Enter Answer' />
                       </div>
                   }</div>
 
 
               </div>
               )
               <div className="text-center">
                   {buttonHtml}
               </div>
           </div>
 
       </form>
 
   );
};
 
export default AssessmentQuestions;

