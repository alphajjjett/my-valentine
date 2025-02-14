import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function CodeEntryPage() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim() === import.meta.env.VITE_SECRET_CODE) {
      navigate('/surprise');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'รหัสไม่ถูกต้อง',
        text: 'ลองใส่วันครบรอบสิ ❤️',
        confirmButtonColor: '#ec4899'
      });
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-purple-300">
      <h1 className="text-4xl font-bold mb-8 text-pink-500 transition transform hover:scale-105">
        ใส่รหัสลับ ❤️
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="วันสำคัญ..."
          className="p-4 border border-gray-300 rounded-md mb-4 text-black w-80 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="p-4 bg-pink-500 text-white rounded-md w-80 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-pink-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// หน้าสอง: Surprise Page (Full Screen)
function SurprisePage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-300 to-pink-300">
      <h1 className="text-5xl text-center font-bold mb-8 text-pink-500 transition duration-300 ease-in-out transform hover:scale-110">
        Happy <br /> Valentine’s <br /> Day!
      </h1>
      <p className="text-xl text-pink-500 transition duration-300 ease-in-out transform hover:scale-105">
        รักเธอเสมอนะครับ 💝
      </p>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodeEntryPage />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Router>
  );
}

export default App;
