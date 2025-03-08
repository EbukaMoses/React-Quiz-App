import { useEffect, useState } from 'react'
import './index.css'
// import img from "/images/img.jpg"
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
import { questions, Qust } from '.'


const App = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [start, setStart] = useState(false)
  const [end, setEnd] = useState("")

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1 < questions.length ? prevIndex + 1 : 0;
          setCurrentQuestion(questions[nextIndex]);
          return nextIndex;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [start]);




  return (
    <div className='flex items-center justify-center'>
      <div className="flex bg-[#22202A] w-[50%] h- overflow-hidden pb-20 my-20 rounded-xl">
        {/* <img src={img} alt="" /> */}
        <div className="flex flex-col items-center">
          <div className="bg-[#613BFF] w-[50vw] h-[30vh]">
            <button className='px-10 py-3 block bg-[#fff] text-[#F87600] mt-14  rounded-md font-bold mx-auto' onClick={() => setStart(true)}>Statr Quiz</button>
          </div>
          <div className="flex flex-col items-center bg-[#1D124E] w-[600px] -mt-14 mx-10 rounded-2xl p-10">
            <h1 className='text-white font-bold text-xl'>Question <span className='text-[#F87600]'>{currentIndex}/10</span></h1>
            <h3 className='text-white font-bold mt-5'>Score</h3>
            <p className='text-white'>-----------------------------------------</p>
            <h4 className='text-xl text-white font-bold mt-4'>

              {currentQuestion.questionText}

            </h4>
          </div>

          <div className="flex flex-col gap-6 mt-14 mx-10 w-full px-10">

            {currentQuestion.questionOptions.map((option, index) => (

              <button key={index} className='flex items-center justify-between font-bold bg-red-400 px-8 py-4 rounded-md'><span> {option.answerText} {option.isCorrect ? "(Correct)" : ""}</span><span className='text-3xl text-white flex'><IoCheckmarkCircleSharp /> <MdCancel /></span></button>
            ))}



          </div>

          {/* <button className='px-10 py-3 mx-10 block bg-[#FF710F] mt-14 w-full rounded-md font-bold text-white'>Next Question</button> */}

        </div>
      </div>
    </div>
  )
}

export default App
