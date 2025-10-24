import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

function StudentView() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("profile");

  // Mock student data - in real app, this would come from API
  const student = {
    id: parseInt(id),
    name: "Samantha Lee",
    college: "MIT",
    progress: 80,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    status: "active",
    email: "samantha.lee@email.com",
    phone: "+1 (555) 123-4567",
    gpa: 3.8,
    sat: 1520,
    act: 34,
    major: "Computer Science",
    graduationYear: 2024,
    applications: 5,
    essays: 3,
    transcripts: 2,
    activities: [
      { name: "Robotics Club", role: "President", duration: "2 years" },
      { name: "Math Olympiad", role: "Team Captain", duration: "3 years" },
      { name: "Volunteer Tutoring", role: "Tutor", duration: "1 year" }
    ],
    notes: [
      { date: "2024-01-15", content: "Strong academic performance, needs help with essay writing", author: "Dr. Smith" },
      { date: "2024-01-10", content: "Interested in MIT and Stanford, should focus on CS programs", author: "Dr. Smith" }
    ]
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "chatbot", label: "LOR Generator", icon: "🤖" },
    { id: "colleges", label: "Colleges", icon: "🏫" },
    { id: "essays", label: "Essays", icon: "📝" },
    { id: "notes", label: "Notes", icon: "📋" }
  ];

  const renderProfile = () => (
    <div className="space-y-6">
      {/* Basic Info */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <p className="text-gray-900">{student.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="text-gray-900">{student.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <p className="text-gray-900">{student.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Major</label>
            <p className="text-gray-900">{student.major}</p>
          </div>
        </div>
      </div>

      {/* Academic Stats */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{student.gpa}</div>
            <div className="text-sm text-gray-600">GPA</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{student.sat}</div>
            <div className="text-sm text-gray-600">SAT Score</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{student.act}</div>
            <div className="text-sm text-gray-600">ACT Score</div>
          </div>
        </div>
      </div>

      {/* Activities */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Extracurricular Activities</h3>
        <div className="space-y-3">
          {student.activities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{activity.name}</h4>
                <p className="text-sm text-gray-600">{activity.role} • {activity.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resume</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-600 mb-4">No resume uploaded yet</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Upload Resume
          </button>
        </div>
      </div>

      {/* Transcript */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Transcript</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-600 mb-4">No transcript uploaded yet</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Upload Transcript
          </button>
        </div>
      </div>
    </div>
  );

  const renderChatbot = () => (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">LOR Generator</h3>
      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">Generate Recommendation Letter</h4>
          <p className="text-blue-700 text-sm">AI-powered LOR generation for {student.name}</p>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Student Strengths</label>
            <textarea 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-600"
              rows="3"
              placeholder="Describe the student's key strengths and achievements..."
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specific Examples</label>
            <textarea 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-600"
              rows="3"
              placeholder="Provide specific examples of the student's work or character..."
            ></textarea>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">College/Program</label>
            <input 
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-600"
              placeholder="Which college/program is this LOR for?"
            />
          </div>
          
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Generate LOR
          </button>
        </div>
      </div>
    </div>
  );

  const renderColleges = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Target Colleges</h3>
        <div className="space-y-4">
          {[
            { name: "MIT", status: "Applied", deadline: "Jan 1, 2024", priority: "High" },
            { name: "Stanford", status: "In Progress", deadline: "Jan 2, 2024", priority: "High" },
            { name: "Harvard", status: "Applied", deadline: "Jan 1, 2024", priority: "Medium" },
            { name: "Caltech", status: "Not Started", deadline: "Jan 3, 2024", priority: "Low" }
          ].map((college, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{college.name}</h4>
                <p className="text-sm text-gray-600">Deadline: {college.deadline}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  college.status === "Applied" ? "bg-green-100 text-green-800" :
                  college.status === "In Progress" ? "bg-yellow-100 text-yellow-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {college.status}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  college.priority === "High" ? "bg-red-100 text-red-800" :
                  college.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {college.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEssays = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Essay Submissions</h3>
        <div className="space-y-4">
          {[
            { title: "Personal Statement", college: "MIT", status: "Completed", wordCount: 650 },
            { title: "Why MIT Essay", college: "MIT", status: "In Review", wordCount: 300 },
            { title: "Leadership Essay", college: "Stanford", status: "Draft", wordCount: 200 }
          ].map((essay, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{essay.title}</h4>
                <p className="text-sm text-gray-600">{essay.college} • {essay.wordCount} words</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  essay.status === "Completed" ? "bg-green-100 text-green-800" :
                  essay.status === "In Review" ? "bg-yellow-100 text-yellow-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {essay.status}
                </span>
                <button className="text-blue-600 hover:text-blue-700 text-sm">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNotes = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Counselor Notes</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add Note
          </button>
        </div>
        <div className="space-y-4">
          {student.notes.map((note, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{note.author}</span>
                <span className="text-sm text-gray-600">{note.date}</span>
              </div>
              <p className="text-gray-700">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-24 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <Link to="/students" className="text-blue-600 hover:text-blue-700">
            ← Back to Students
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-full border-2 border-blue-100"/>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{student.name}</h1>
            <p className="text-gray-600">{student.college} • {student.progress}% Complete</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Application Progress</span>
          <span>{student.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-xl">
          <div 
            className="bg-blue-500 h-3 rounded-xl transition-all"
            style={{ width: `${student.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && renderProfile()}
        {activeTab === "chatbot" && renderChatbot()}
        {activeTab === "colleges" && renderColleges()}
        {activeTab === "essays" && renderEssays()}
        {activeTab === "notes" && renderNotes()}
      </div>
    </div>
  );
}

export default StudentView;
