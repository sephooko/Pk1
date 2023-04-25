// import React, { useState, useEffect } from 'react';

// export const Timer = ({ hours, minutes }) => {
//   const [timeLeft, setTimeLeft] = useState({ hours, minutes, seconds: 0 });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTimeLeft => {
//         const { hours, minutes, seconds } = prevTimeLeft;
//         if (hours === 0 && minutes === 0 && seconds === 0) {
//           clearInterval(timer);
//           return prevTimeLeft;
//         }
//         if (seconds === 0) {
//           if (minutes === 0) {
//             return { hours: hours - 1, minutes: 59, seconds: 59 };
//           } else {
//             return { hours, minutes: minutes - 1, seconds: 59 };
//           }
//         } else {
//           return { hours, minutes, seconds: seconds - 1 };
//         }
//       });
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div className='card' style={{width:'18rem'}}>
//         <div className='card-header'>
//             <h1>Timer</h1>
//         </div>
//         <div className='class-body'>
//             <ul className='list-group list-group-horizontal'>
//                 <li className='list-group-item'>
//                     Hours: {timeLeft.hours}</li>
//                 <li className='list-group-item'>
//                     Minutes: {timeLeft.minutes}</li>
//                 <li className='list-group-item'>
//                     Seconds: {timeLeft.seconds}</li>
//             </ul>
//         </div>
//     </div>
//   );
// };

// export default Timer;

import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
      let interval = null;
      if (isActive && (hours !== 0 || minutes !== 0 || seconds !== 0)) {
        interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          } else if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isActive, hours, minutes, seconds]);

    const handleStart = () => {
      setIsActive(true);
    };

    const handlePause = () => {
      setIsActive(false);
    };

    const handleReset = () => {
      setIsActive(false);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    };

    return (
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-header">Timer</div>
        <div className="card-body">

          <label className="form-label">Hours:</label>
            <input type="number" min="0" className="form-control" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />

          <label className="form-label">Minutes:</label>
            <input type="number" min="0" className="form-control" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} />

          <label className="form-label">Seconds:</label>
            <input type="number" min="0" className="form-control" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))} />
          <br></br>
          <div className="text-center">
            <button className="btn btn-primary mr-2" onClick={handleStart}>Start</button>
            <button className="btn btn-warning mr-2" onClick={handlePause}>Pause</button>
            <button className="btn btn-danger" onClick={handleReset}>Restart</button>
          </div>
        </div>
      </div>
    );
};

export default Timer;
