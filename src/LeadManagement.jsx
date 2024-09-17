import React, { useState } from 'react'
import { Search, Settings, Bell, Calendar, User, Briefcase, Users, BarChart2, Phone, Mail, PlusCircle, ChevronDown, MoreHorizontal, RefreshCw, Menu } from 'lucide-react'

const TopNav = () => (
  <nav className="flex items-center justify-between w-full p-4 text-white bg-gray-900">
    <div className="flex items-center space-x-4">
      <button className="p-1 lg:hidden" aria-label="Menu"><Menu className="w-5 h-5" /></button>
      <button className="p-1" aria-label="Search"><Search className="w-5 h-5" /></button>
      <h1 className="text-xl font-bold">Test</h1>
    </div>
    <div className="flex items-center space-x-4">
      <button className="hidden p-1 sm:block" aria-label="Settings"><Settings className="w-5 h-5" /></button>
      <button className="hidden p-1 sm:block" aria-label="Notifications"><Bell className="w-5 h-5" /></button>
      <button className="hidden p-1 sm:block" aria-label="Calendar"><Calendar className="w-5 h-5" /></button>
      <button className="w-8 h-8 bg-purple-500 rounded-full" aria-label="User profile"></button>
    </div>
  </nav>
)

const Sidebar = ({ isOpen, setIsOpen }) => (
  <aside className={`${isOpen ? 'block' : 'hidden'} lg:block fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 lg:w-16`}>
    <div className="flex flex-col items-center py-4 space-y-6">
      <button className="p-2 text-white bg-red-500 rounded" aria-label="Dashboard"><Briefcase className="w-6 h-6" /></button>
      <button className="p-2 text-gray-600" aria-label="Users"><User className="w-6 h-6" /></button>
      <button className="p-2 text-gray-600" aria-label="Teams"><Users className="w-6 h-6" /></button>
      <button className="p-2 text-gray-600" aria-label="Analytics"><BarChart2 className="w-6 h-6" /></button>
    </div>
  </aside>
)

const LeadHeader = () => (
  <div className="w-full mb-6">
    <div className="mb-2 text-sm text-gray-500">Dashboard / Lead / LE-010071</div>
    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
      <h2 className="mb-2 text-2xl font-bold sm:mb-0">LE-010071</h2>
      <div className="flex flex-wrap gap-2">
        <button className="p-2 text-gray-600" aria-label="Add"><PlusCircle className="w-5 h-5" /></button>
        <button className="p-2 text-gray-600" aria-label="Assign"><User className="w-5 h-5" /></button>
        <button className="p-2 text-gray-600" aria-label="More options"><MoreHorizontal className="w-5 h-5" /></button>
        <button className="p-2 text-gray-600" aria-label="Refresh"><RefreshCw className="w-5 h-5" /></button>
        <button className="px-4 py-2 text-white bg-blue-900 rounded">Mark as Converted</button>
      </div>
    </div>
  </div>
)

const LeadStages = () => (
  <div className="flex flex-wrap w-full gap-2 mb-6">
    {['New', 'Contacted', 'Nurturing', 'Qualified', 'Unqualified'].map((stage, index) => (
      <button key={index} className={`px-3 py-1 rounded ${index === 1 ? 'bg-orange-100 text-orange-600' : 'bg-gray-200 text-gray-600'}`}>
        {stage}
      </button>
    ))}
  </div>
)

const LeadInfo = () => (
  <div className="w-full p-4 mb-6 bg-white rounded-lg shadow sm:p-6">
    <div className="flex flex-col items-start justify-between mb-4 sm:flex-row sm:items-center">
      <div>
        <div className="mb-1 font-medium text-orange-500">• Contacted</div>
        <h3 className="mb-1 text-2xl font-bold">Mamta Naik</h3>
        <div className="flex items-center text-sm text-gray-500">
          <div className="w-6 h-6 mr-2 bg-purple-500 rounded-full"></div>
          Anirudh Naidu
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500 sm:mt-0">
        <span className="block mr-4 sm:inline">Pending Actions</span>
        <button className="mr-2 text-green-500">Create Account</button>
        <button className="text-yellow-500">Create Contact</button>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 text-sm">
      {['Basic Details', 'Account Details', 'Lead Details', 'Team', 'Other Contacts'].map((tab, index) => (
        <button key={index} className={`pb-2 ${index === 4 ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}>
          {tab}
        </button>
      ))}
    </div>
  </div>
)

const OtherContacts = () => (
  <div className="w-full p-4 mb-6 bg-white rounded-lg shadow sm:p-6">
    <div className="flex flex-col gap-4 mb-4 sm:flex-row">
      <div className="w-full sm:w-1/2">
        <label className="block mb-1 text-sm font-medium text-gray-700">Account</label>
        <div className="relative">
          <select className="w-full p-2 border rounded appearance-none">
            <option>Select Option</option>
          </select>
          <ChevronDown className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 right-2 top-1/2" />
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <label className="block mb-1 text-sm font-medium text-gray-700">Contact</label>
        <div className="relative">
          <select className="w-full p-2 border rounded appearance-none">
            <option>Select Option</option>
          </select>
          <ChevronDown className="absolute w-5 h-5 text-gray-400 transform -translate-y-1/2 right-2 top-1/2" />
        </div>
      </div>
    </div>
    <div className="space-y-4">
      {[
        { name: 'Pranab Biyani', role: 'Associate VP', position: 'Sales Head' },
        { name: 'Nayan Johal', role: 'Associate VP', position: 'Sales Head' },
      ].map((contact, index) => (
        <div key={index} className="flex items-center justify-between">
          <div>
            <div className="font-medium">{contact.name}</div>
            <div className="text-sm text-gray-500">{contact.role}</div>
          </div>
          <div className="text-sm">{contact.position}</div>
        </div>
      ))}
    </div>
  </div>
)

const ActivityTabs = () => (
  <div className="w-full p-4 mb-6 bg-white rounded-lg shadow sm:p-6">
    <div className="flex flex-wrap gap-4 mb-6 text-sm">
      {['Activity', 'Actionables', 'Tasks', 'Note & File'].map((tab, index) => (
        <button key={index} className={`pb-2 ${index === 0 ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}>
          {tab}
        </button>
      ))}
    </div>
    <div className="flex flex-wrap gap-2 mb-6">
      <button className="flex items-center px-4 py-2 space-x-2 bg-gray-100 rounded">
        <Phone className="w-4 h-4" />
        <span>Log a Call</span>
      </button>
      <button className="flex items-center px-4 py-2 space-x-2 text-red-600 bg-red-100 rounded">
        <Mail className="w-4 h-4" />
        <span>Email</span>
      </button>
      <button className="flex items-center px-4 py-2 space-x-2 bg-gray-100 rounded">
        <Calendar className="w-4 h-4" />
        <span>Event</span>
      </button>
    </div>
    <form className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Input Text" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Add People</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Input Text" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Due Date</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Time</label>
          <input type="time" className="w-full p-2 border rounded" />
        </div>
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
        <textarea className="w-full p-2 border rounded" rows="3" placeholder="Input Text"></textarea>
      </div>
      <button className="flex items-center space-x-2 text-gray-500">
        <PlusCircle className="w-4 h-4" />
        <span>Add Team Member</span>
      </button>
      <div className="text-right">
        <button className="px-4 py-2 text-white bg-blue-900 rounded">Submit</button>
      </div>
    </form>
  </div>
)

const UpcomingEvents = () => (
  <div className="w-full p-4 bg-white rounded-lg shadow sm:p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-medium">Upcoming & Overdue</h3>
      <button className="text-sm text-blue-500">View All</button>
    </div>
    <div className="space-y-4">
      {[
        { title: 'Arrange a Call', start: '27/08/2024', end: '27/08/2024', startTime: '12:00pm', endTime: '01:00pm' },
        { title: 'Follow Up Email', start: '27/08/2024', end: '', startTime: '02:00pm', endTime: '' },
        { title: 'Arrange a Call', start: '28/08/2024', end: '28/08/2024', startTime: '10:00am', endTime: '10:30am' },
      ].map((event, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Phone className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex-grow">
            <div className="font-medium">{event.title}</div>
            <div className="text-sm text-gray-500">
              Start: {event.start} {event.startTime}
            </div>
            {event.end && (
              <div className="text-sm text-gray-500">
                End: {event.end} {event.endTime}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const StageHistory = () => (
  <div className="w-full p-4 bg-white rounded-lg shadow sm:p-6">
    <h3 className="mb-4 font-medium">Stage History</h3>
    <h4 className="mb-4 text-lg font-semibold">August 2024</h4>
    <div className="space-y-4">
      {[
        { date: '28/08', time: '09:00am', type: 'Team', description: 'Created Jiya Gopal' },
        { date: '28/08', time: '10:00am', type: 'Team', description: 'Assigned to Anirudh Naidu' },
        { date: '28/08', time: '12:00pm', type: 'Event', description: 'Arrange a Call' },
        { date: '28/08', time: '04:00pm', type: 'Lead Update', description: 'Marked as Contacted' },
      ].map((event, index) => (
        <div key={index} className="flex items-start">
          <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4 bg-gray-200 rounded-full">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-medium">{event.description}</p>
            <p className="text-xs text-gray-500">{event.type} | {event.time}</p>
          </div>
          <div className="flex-shrink-0 text-xs text-gray-500">{event.date}</div>
        </div>
      ))}
    </div>
  </div>
)

export default function LeadManagement() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      <TopNav />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className="flex-1 w-full overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container w-full px-4 py-8 mx-auto sm:px-6">
            <LeadHeader />
            <LeadStages />
            <div className="flex flex-col w-full lg:flex-row lg:space-x-6">
              <div className="w-full space-y-6 lg:w-2/3">
                <LeadInfo />
                <OtherContacts />
                <ActivityTabs />
                <UpcomingEvents />
              </div>
              <div className="w-full mt-6 lg:w-1/3 lg:mt-0">
                <StageHistory />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}