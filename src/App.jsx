import { useState, useEffect } from 'react';
import MainCard from './Compontes/MainCard/MainCard';
import TaskStatus from './Compontes/TaskStatus/TaskStatus';
import Resolved from './Compontes/Resolved/Resolved';
import Banner from './Compontes/Banner/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from './Compontes/Navber/Navber';
import Fotter from './Compontes/Footer/Fotter';

// Fetch data
const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
};

function App() {
  const [tickets, setTickets] = useState([]);    
  const [history, setHistory] = useState([]);       
  const [resolved, setResolved] = useState([]);     

  // Load tickets
  useEffect(() => {
    fetchData().then((data) => {
      setTickets(data);
    });
  }, []);

  // MainCard click -> add to In-Progress
  const handleComplete = (title) => {
    if (!history.includes(title)) {
      setHistory([...history, title]);
      toast.success('In-Progress');
    }
  };

  // TaskStatus Complete click -> move to Resolved and remove from MainCard
  const handleResolved = (title) => {
    setHistory(history.filter((t) => t !== title));
    setResolved([...resolved, title]);
    setTickets(tickets.filter((t) => t.title !== title));
    toast.success('Complete');
  };

  return (
    <>
    <Navber></Navber>
      {/* Banner */}
      
      <Banner count={history.length} resolved={resolved.length} />

      <div className="max-w-[1200px] mx-auto mt-10 flex flex-col md:flex-row gap-6">
        
        {/* Left Section - Customer Tickets */}
        <div className="w-full md:w-2/3">
          <h2 className="text-black font-bold mb-4">Customer Tickets</h2>
          <MainCard data={tickets} handleComplete={handleComplete} />
        </div>

        {/* Right Section*/}
        <div className="w-full md:w-1/3 flex flex-col gap-8">
          
          {/* In-Progress  */}
          <div>
            <h2 className=" text-black font-bold ">Task Status</h2>
            <TaskStatus history={history} handleResolved={handleResolved} />
          </div>

          {/* Resolved Tasks */}
          <div>
            <h2 className="text-black font-bold">Resolved Tasks</h2>
            <Resolved resolved={resolved} />
          </div>

        </div>

      </div>

      <ToastContainer />

      <Fotter></Fotter>
    </>
  );
}

export default App;
