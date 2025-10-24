import React, { useState } from "react";
import { Link } from "react-router-dom";

function Students(){
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCollege, setFilterCollege] = useState("all");
    const [filterProgress, setFilterProgress] = useState("all");

    const students = [
    {
      id: 1,
      name: "Samantha Lee",
      college: "MIT",
      progress: 80,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      status: "active",
      applications: 5,
      essays: 3,
      transcripts: 2
    },
    {
      id: 2,
      name: "Rahul Verma",
      college: "Stanford",
      progress: 50,
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
      status: "active",
      applications: 3,
      essays: 2,
      transcripts: 1
    },
    {
      id: 3,
      name: "Jessica Moore",
      college: "Harvard",
      progress: 95,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      status: "completed",
      applications: 8,
      essays: 6,
      transcripts: 4
    },
    {
      id: 4,
      name: "Deepak Singh",
      college: "ASU",
      progress: 20,
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      status: "pending",
      applications: 1,
      essays: 0,
      transcripts: 1
    },
    {
      id: 5,
      name: "Emily Chen",
      college: "Caltech",
      progress: 66,
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      status: "active",
      applications: 4,
      essays: 3,
      transcripts: 2
    },
    {
      id: 6,
      name: "Carlos Sanchez",
      college: "Yale",
      progress: 37,
      avatar: "https://randomuser.me/api/portraits/men/66.jpg",
      status: "active",
      applications: 2,
      essays: 1,
      transcripts: 1
    },
  ];

  const colleges = ["all", "MIT", "Stanford", "Harvard", "ASU", "Caltech", "Yale"];
  const progressRanges = [
    { value: "all", label: "All Progress" },
    { value: "0-25", label: "0-25%" },
    { value: "26-50", label: "26-50%" },
    { value: "51-75", label: "51-75%" },
    { value: "76-100", label: "76-100%" }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.college.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCollege = filterCollege === "all" || student.college === filterCollege;
    const matchesProgress = filterProgress === "all" || 
      (filterProgress === "0-25" && student.progress <= 25) ||
      (filterProgress === "26-50" && student.progress > 25 && student.progress <= 50) ||
      (filterProgress === "51-75" && student.progress > 50 && student.progress <= 75) ||
      (filterProgress === "76-100" && student.progress > 75);
    
    return matchesSearch && matchesCollege && matchesProgress;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "completed": return "bg-green-100 text-green-800";
      case "active": return "bg-blue-100 text-blue-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return(
    <div className="pt-24 px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Management</h1>
            <p className="text-gray-600">Track and manage student applications and progress</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <input 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-600" 
                        type="text" 
                        placeholder="Search by name or college..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">College</label>
                    <select 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-600"
                        value={filterCollege}
                        onChange={(e) => setFilterCollege(e.target.value)}
                    >
                        {colleges.map(college => (
                            <option key={college} value={college}>
                                {college === "all" ? "All Colleges" : college}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Progress</label>
                    <select 
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-600"
                        value={filterProgress}
                        onChange={(e) => setFilterProgress(e.target.value)}
                    >
                        {progressRanges.map(range => (
                            <option key={range.value} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-end">
                    <button 
                        onClick={() => {
                            setSearchTerm("");
                            setFilterCollege("all");
                            setFilterProgress("all");
                        }}
                        className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                    >
                        Clear Filters
                    </button>
                </div>
            </div>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map(student=>(
                <Link key={student.id} to={`/student/${student.id}`} className="block">
                    <div className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-all hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                            <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-full border-2 border-blue-100"/>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                                {student.status}
                            </span>
                        </div>
                        
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">{student.name}</h3>
                            <p className="text-blue-700 font-medium">{student.college}</p>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Application Progress</span>
                                <span>{student.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 h-3 rounded-xl">
                                <div
                                    className={`h-3 rounded-xl transition-all ${getProgressColor(student.progress)}`}
                                    style={{ width: `${student.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-blue-50 rounded-lg p-3">
                                <div className="text-lg font-bold text-blue-600">{student.applications}</div>
                                <div className="text-xs text-gray-600">Applications</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3">
                                <div className="text-lg font-bold text-green-600">{student.essays}</div>
                                <div className="text-xs text-gray-600">Essays</div>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-3">
                                <div className="text-lg font-bold text-purple-600">{student.transcripts}</div>
                                <div className="text-xs text-gray-600">Transcripts</div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

        {filteredStudents.length === 0 && (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
        )}
    </div>
  );
}

export default Students;