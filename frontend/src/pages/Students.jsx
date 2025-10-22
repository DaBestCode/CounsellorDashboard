import React from "react";

function Students(){
    const students = [
    {
      id: 1,
      name: "Samantha Lee",
      college: "MIT",
      progress: 80,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Rahul Verma",
      college: "Stanford",
      progress: 50,
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      id: 3,
      name: "Jessica Moore",
      college: "Harvard",
      progress: 95,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "Deepak Singh",
      college: "ASU",
      progress: 20,
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 5,
      name: "Emily Chen",
      college: "Caltech",
      progress: 66,
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      id: 6,
      name: "Carlos Sanchez",
      college: "Yale",
      progress: 37,
      avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    },
  ];


  return(
    <div className="pt-24 px-8 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
            <input className="border border-gray-300 rounded-full px-6 py-3 w-full max-w-lg focus:outline-blue-600 shadow-sm transition" type="text" placeholder="Search Students by name or college..."/>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map(student=>(
                <div key={student.id} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:shadow-lg transition">
                    <img src={student.avatar} alt={student.name} className="w-20 h-20 rounded-full mb-4 border-4 border-blue-100 shadow"/>
                    <div className="font-semibold text-lg text-gray-900">{student.name}</div>
                    <div className="text-blue-700 mb-3">{student.college}</div>

                    <div className="w-full">
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{student.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-3 rounded-xl">
                        <div
                        className="bg-blue-500 h-3 rounded-xl transition-all"
                        style={{ width: `${student.progress}%` }}
                        ></div>
                    </div>
                    </div>

                </div>
            ))}
        </div>
    </div>
  );
}

export default Students;