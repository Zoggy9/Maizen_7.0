import React, { useState } from 'react';
import { Menu, Plus, Settings, Home, CalendarDays, ListChecks, Folder, Archive } from 'lucide-react';

export default function GoogleClassroomClone() {
  const [selectedTab, setSelectedTab] = useState('stream');
  
  const classes = [
    { name: 'Mathematics', section: 'Period 1', color: 'bg-blue-600', teacher: 'Mr. Johnson' },
    { name: 'English Literature', section: 'Period 2', color: 'bg-green-600', teacher: 'Ms. Davis' },
    { name: 'Physics', section: 'Period 3', color: 'bg-purple-600', teacher: 'Dr. Smith' },
    { name: 'History', section: 'Period 4', color: 'bg-orange-600', teacher: 'Mrs. Wilson' },
  ];

  const announcements = [
    { class: 'Mathematics', teacher: 'Mr. Johnson', time: '2 hours ago', message: 'Homework for Chapter 5 is due tomorrow. Please review the examples we discussed in class.' },
    { class: 'English Literature', teacher: 'Ms. Davis', time: '1 day ago', message: 'Essay submissions are now open. Remember to follow the MLA format guidelines.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                  <path fill="#137333" d="M1.6 3.6C1.6 2.18 2.78 1 4.2 1h9.6c1.42 0 2.6 1.18 2.6 2.6v7.8H1.6V3.6z"/>
                  <path fill="#0B8043" d="M16.4 11.4V19c0 1.42-1.18 2.6-2.6 2.6H4.2C2.78 21.6 1.6 20.42 1.6 19v-7.6h14.8z"/>
                  <path fill="#EA4335" d="M16.4 3.6c0-1.42 1.18-2.6 2.6-2.6h1c1.42 0 2.6 1.18 2.6 2.6v16.4h-6.2V3.6z"/>
                  <path fill="#FBBC04" d="M1.6 11.4h14.8v3.2H1.6z"/>
                </svg>
              </div>
              <span className="text-xl text-gray-700 font-normal">Classroom</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Plus className="w-6 h-6 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="w-6 h-6 text-gray-700" />
            </button>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium ml-2">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 min-h-screen bg-white">
          <nav className="py-2">
            <button className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-100 text-gray-700">
              <Home className="w-5 h-5" />
              <span>Classes</span>
            </button>
            <button className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-100 text-gray-500">
              <CalendarDays className="w-5 h-5" />
              <span>Calendar</span>
            </button>
            <button className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-100 text-gray-500">
              <ListChecks className="w-5 h-5" />
              <span>To-do</span>
            </button>
            <div className="border-t border-gray-200 my-2"></div>
            <div className="px-6 py-2">
              <p className="text-xs text-gray-500 font-medium mb-2">Enrolled</p>
              {classes.map((cls, idx) => (
                <button key={idx} className="w-full flex items-center gap-3 py-2 hover:bg-gray-100 rounded text-gray-700 text-sm">
                  <div className={`w-6 h-6 ${cls.color} rounded`}></div>
                  <span className="truncate">{cls.name}</span>
                </button>
              ))}
            </div>
            <div className="border-t border-gray-200 my-2"></div>
            <button className="w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-100 text-gray-500">
              <Archive className="w-5 h-5" />
              <span>Archived classes</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50">
          <div className="max-w-5xl mx-auto p-6">
            {/* Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {classes.map((cls, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    if (cls.name === 'Mathematics') {
                      window.open('about:blank', '_blank');
                      
                      // TO EDIT THE ABOUT:BLANK PAGE:
                      // If you want to add content to the blank page, you can do it like this:
                      // const newWindow = window.open('about:blank', '_blank');
                      // newWindow.document.write('<html><body><h1>Your content here</h1></body></html>');
                      // newWindow.document.close();
                    }
                  }}
                >
                  <div className={`${cls.color} h-24 p-4 text-white relative`}>
                    <h3 className="text-xl font-medium mb-1">{cls.name}</h3>
                    <p className="text-sm opacity-90">{cls.section}</p>
                    <button className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{cls.teacher}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stream Section */}
            <div className="bg-white rounded-lg shadow">
              <div className="border-b border-gray-200 flex">
                <button 
                  onClick={() => setSelectedTab('stream')}
                  className={`px-6 py-3 font-medium ${selectedTab === 'stream' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                >
                  Stream
                </button>
                <button 
                  onClick={() => setSelectedTab('classwork')}
                  className={`px-6 py-3 font-medium ${selectedTab === 'classwork' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                >
                  Classwork
                </button>
                <button 
                  onClick={() => setSelectedTab('people')}
                  className={`px-6 py-3 font-medium ${selectedTab === 'people' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                >
                  People
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                {announcements.map((announcement, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                        {announcement.teacher[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{announcement.teacher}</span>
                          <span className="text-sm text-gray-500">• {announcement.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{announcement.class}</p>
                        <p className="text-gray-900 mt-2">{announcement.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
