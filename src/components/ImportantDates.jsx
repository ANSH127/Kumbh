
// // import './ImportantDates.css'; // Assuming you have a CSS file for styles





// const ImportantDates = () => {
//   const dates = [
//     { day: 13, month: 'Jan', event: 'Paush Poornima' },
//     { day: 14, month: 'Jan', event: 'Makar Sankranti' },
//     { day: 29, month: 'Jan', event: 'Mauni Amavasya' },
//     { day: 3, month: 'Feb', event: 'Basant Panchami' },
//   ];

//   return (
//     <>
//       {/* Mobile View */}
//       <div className="w-full flex justify-center mt-[-70vw] 
//       sm:mt-[-9vw]  md:hidden
//        ">
//         <div className="w-[90%] h-auto bg-[#F88820] rounded-[4vw] z-20 p-[4vw] flex flex-col items-center shadow-lg">
//           <h1 className="font-bold  mb-1 md:my-0 sm:font-semibold text-sm md:text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
//             IMPORTANT DATES OF MAHAKUMBH 2025
//           </h1>

//           <div className="grid grid-cols-4 md:gap-[2vw] w-full">
//             {dates.map((date, index) => (
//               <div key={index} className="flex flex-col items-center gap-1">
//                 <div className="flex flex-col items-center bg-[#D9D9D9] rounded-[5vw] px-[6vw] py-4">
//                   <h1 className="text-xl font-extrabold leading-none">{date.day}</h1>
//                   <h2 className=" text-sm font-bold leading-none text-center">{date.month}</h2>
//                 </div>
//                 <div className=" text-xs font-bold text-center ">
//                   <h1>{date.event.split(' ')[0]}</h1>
//                   <h1 className="leading-none">{date.event.split(' ')[1]}</h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Desktop View */}
//       <div className="w-full flex justify-center mt-[-30%] sm:mt-[-8%] hidden md:flex">
//         <div className="w-[65%] md:w-[70%] h-auto bg-[#F88820] rounded-2xl md:rounded-3xl z-20 p-4 md:p-6 lg:px-12 lg:py-4 flex flex-col items-center shadow-lg">
//           <h1 className="font-bold sm:font-semibold text-[3.5vw] md:text-[1.7vw] text-center mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
//             Shahi Snan DATES OF MAHAKUMBH 2025
//           </h1>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-6 w-full">
//             {dates.map((date, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="flex flex-col items-center bg-[#D9D9D9] lg:rounded-[50px] rounded-[5vw] px-6 py-4 md:px-8 lg:px-11 md:py-6">
//                   <h1 className="text-[9vw] md:text-[5vw] font-extrabold leading-none mb-1">{date.day}</h1>
//                   <h2 className="text-[5vw] md:text-[2.5vw] font-bold md:font-semibold leading-none text-center">{date.month}</h2>
//                 </div>
//                 <div className="text-[3vw] md:text-[1.5vw] font-bold text-center mt-2 mb-2">
//                   <h1>{date.event.split(' ')[0]}</h1>
//                   <h1 className="leading-none">{date.event.split(' ')[1]}</h1>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ImportantDates;





const ImportantDates = () => {
  const dates = [
    { day: 13, month: 'Jan', event: 'Paush Poornima' },
    { day: 14, month: 'Jan', event: 'Makar Sankranti' },
    { day: 29, month: 'Jan', event: 'Mauni Amavasya' },
    { day: '03', month: 'Feb', event: 'Basant Panchami' },
  ];

  return (
    <>
      {/* Mobile View */}
      <section
        className="w-full flex justify-center mt-[-65vw] sm:mt-[-9vw] md:hidden"
        aria-labelledby="important-dates-mobile-title"
      >
        <div
          className="w-[90%] h-auto bg-[#F88820] rounded-[3vw] z-20 py-[2vw] px-[4vw] flex flex-col items-center shadow-lg"
          role="region"
          aria-label="Important Dates Mobile View"
        >
          <h1
            id="important-dates-mobile-title"
            className="font-bold mb-2 md:my-0 sm:font-semibold text-sm md:text-lg text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Shahi Snan Dates of Mahakumbh 2025
          </h1>

          <div className="grid grid-cols-4 md:gap-[2vw] w-full">
            {dates.map((date, index) => (
              <article key={index} className="flex flex-col items-center gap-1">
                <div
                  className="flex flex-col items-center bg-[#D9D9D9] rounded-[4vw] px-[4vw] py-2"
                  aria-label={`Date: ${date.day} ${date.month}`}
                >
                  <p className="text-2xl font-extrabold leading-none">{date.day}</p>
                  <p className="text-sm font-bold leading-none text-center">{date.month}</p>
                </div>
                <div className="text-xs font-medium text-center leading-3">
                  <p>{date.event}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* tab view */}
      <section
        className="w-[90%] flex mx-auto justify-center mt-[-34vw] hidden md:flex lg:hidden"
        aria-labelledby="important-dates-mobile-title"
      >
        <div className="w-[90%] h-auto bg-[#F88820] rounded-[3vw] z-20 py-[2vw] px-[4vw] flex flex-col items-center shadow-lg">
          <h1 className="font-bold mb-2 md:my-0 sm:font-semibold text-sm md:text-lg text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Shahi Snan Dates of Mahakumbh 2025
          </h1>

          <div className="grid grid-cols-4 md:gap-[2vw] w-full">
            {dates.map((date, index) => (
              <article key={index} className="flex flex-col items-center gap-1">
                <div className="flex flex-col items-center bg-[#D9D9D9] rounded-[4vw] px-[4vw] py-2">
                  <p className="text-2xl font-extrabold leading-none">{date.day}</p>
                  <p className="text-sm font-bold leading-none text-center">{date.month}</p>
                </div>
                <div className="text-xs font-medium text-center leading-3">
                  <p>{date.event}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop View */}
      <section
        className="w-full flex justify-center mt-[-30%] sm:mt-[-8%] hidden lg:flex"
        aria-labelledby="shahi-snan-desktop-title"
      >
        <div
          className="w-[65%] md:w-[70%] h-auto bg-[#F88820] rounded-2xl md:rounded-3xl z-20 p-4 md:p-6 lg:px-12 lg:py-4 flex flex-col items-center shadow-lg"
          role="region"
          aria-label="Important Dates Desktop View"
        >
          <h2
            id="shahi-snan-desktop-title"
            className="font-bold sm:font-semibold text-[3.5vw] md:text-[1.7vw] text-center mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Shahi Snan Dates of Mahakumbh 2025
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-6 w-full">
            {dates.map((date, index) => (
              <article key={index} className="flex flex-col items-center">
                <div
                  className="flex flex-col items-center bg-[#D9D9D9] lg:rounded-[50px] rounded-[5vw] px-6 py-4 md:px-8 lg:px-11 md:py-6"
                  aria-label={`Date: ${date.day} ${date.month}`}
                >
                  <p className="text-[9vw] md:text-[5vw] font-bold leading-none mb-1">
                    {date.day}
                  </p>
                  <p className="text-[5vw] md:text-[2.5vw] font-bold md:font-semibold leading-none text-center">
                    {date.month}
                  </p>
                </div>
                <div className="text-[3vw] md:text-[1.2vw] font-semibold text-center mt-2 mb-2">
                  <p>{date.event}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImportantDates;
