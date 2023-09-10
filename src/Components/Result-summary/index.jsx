
export default function Summary() {
  return (
    <div className="flex flex-col justify-center items-center  md:flex-row md:mt-28 rounded-3xl md:shadow-xl shadow-[#aec1ff6c]" >

      <div className="w-[18rem] h-[20rem] md:h-[23rem] flex flex-col justify-center items-center rounded-b-3xl md:rounded-3xl bg-gradient-to-b from-[#5339ff] to-[#3338c9] px-5 " >
        <h1 className=" font-bold text-lg text-slate-300 sm:mt-2  pb-4 md:mt-[-1rem] m">Your Result</h1>
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-gradient-to-b from-[#4c10d8] to-[#331be700] rounded-full">
          <h2 className="text-6xl font-bold text-white">76</h2>
          <p className="text-slate-400 text-sm font-bold">of 100</p>
        </div>
        <div className="flex flex-col items-center px-2 mt-6">
          <h2 className="text-2xl font-bold text-white mb-3">Great</h2>
          <p className="text-slate-300 text-sm font-medium text-center sm:px-0 md:px-4">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div >



      <div className="flex flex-col w-[18rem] h-[21rem]
      ] md:h-[23rem] px-8 py-5 md:py-8">
        <h1 className="font-bold mb-4 text-lg">Summary</h1>
        <ul className="flex flex-col">
          <li className=" justify-between  my-1 inline-flex items-center p-2 bg-[#ffd3d333] rounded-lg">
            <span className="inline-flex items-center">
              <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 20 20"><path stroke="#f55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" /></svg>
              <p className="text-red-400 font-bold text-sm">Reaction</p>
            </span>
            <span>
              <p className="text-slate-400 ml-2 font-bold"> <span className="text-black"> 80 </span> / 100</p>
            </span>
          </li>
          <li className="inline-flex my-1 justify-between items-center p-2 rounded-lg bg-[#faedc342]">
            <span className="inline-flex items-center">
              <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858" /><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858" /><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0" /></svg>
              <p className="text-yellow-400 font-bold text-sm">Memory</p>
            </span>
            <span>
              <p className="text-slate-400 ml-2 font-bold"><span className="text-black"> 92 </span> / 100</p>
            </span>
          </li>
          <li className="inline-flex my-1 justify-between items-center p-2 rounded-lg bg-[#a4ebbf34]">
            <span className="inline-flex items-center">
              <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="14" height="" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z" /></svg>
              <p className="text-green-400 font-bold text-sm">Verbal</p>
            </span>
            <p className="text-slate-400 ml-2 font-bold">
              <span className="text-black">61</span> / 100
            </p>
          </li>
          <li className="inline-flex my-1 justify-between items-center p-2 rounded-lg bg-[#a4abeb34]">
            <span className="inline-flex items-center">
              <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" /><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z" /></svg>
              <p className="text-blue-400 font-bold text-sm">Visual</p>
            </span>
            <p className="text-slate-400 ml-2 font-bold"><span className="text-black">72</span> / 100</p>
          </li>
        </ul>
        <button className="focus:bg-slate-800
       items-center bg-[#3b41e2]  rounded-3xl w-full h-10 mt-4 md:mt-6 text-white font-bold text-sm">Continue</button>
      </div>
    </div >
  )
}
// bg - gradient - to - b from - [#5439ffe5] to - [#3b41e2]



// export default function Summary() {
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center rounded-3xl shadow-xl shadow-[#aec1ff6c]">
//       <div className="sm:w-auto md:w-[18rem] h-[23rem] bg-gradient-to-b from-[#5339ff] to-[#3338c9] px-5 py-8 md:py-0">
//         <h1 className="font-bold text-lg text-slate-300 my-7">Your Result</h1>
//         <div className="flex items-center justify-center w-full h-auto bg-gradient-to-b from-[#4c10d8] to-[#331be700] rounded-full mb-6 mx-auto sm:mx-0">
//           <h2 className="text-6xl font-bold text-white">76</h2>
//           <p className="text-slate-400 text-sm font-bold ml-2">of 100</p>
//         </div>
//         <div className="flex flex-col items-center px-2 text-center">
//           <h2 className="text-xl font-bold text-white mb-3">Great</h2>
//           <p className="text-slate-300 text-sm font-medium leading-relaxed">You scored higher than 65% of the people who have taken these tests.</p>
//         </div>
//       </div>

//       <div className="w-full sm:w-auto md:w-[18rem] h-[23rem] px-4 py-md mt-md">
//         ... // Código restante sin cambios
//       </div>
//     </div >
//   );
// }