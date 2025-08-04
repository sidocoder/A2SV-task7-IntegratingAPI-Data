import { Opportunity } from '../types/opportunity';
import { CalendarDays, Clock3, MapPin, Info, PhoneCall, Mail, Globe, Pin } from 'lucide-react';

const categoryColors: Record<string, string> = {
  IT: 'bg-blue-100 text-blue-500',
  Marketing: 'bg-green-100 text-green-500',
  Design: 'bg-pink-100 text-pink-500',
  Art: 'bg-yellow-100 text-yellow-500',
  Development: 'bg-purple-100 text-purple-500',
  Analytics: 'bg-indigo-100 text-indigo-500 ',
  Support: 'bg-red-100 text-red-500',
  "Data Science": 'bg-teal-100 text-teal-500',
  "Customer Service": 'bg-orange-100 text-orange-500',
  
};


function Description({ opp }: { opp: Opportunity }) {
  return (    
    <div className="bg-white text-gray-800 min-h-screen sm:p-12 font-poppins">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 ">

        <div className="lg:col-span-3 space-y-8 shadow border-gray-400 bg-gray-50 p-10">
          <section>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">company Info.</h1>
            <Info size={16} className="icon" />
            <p className="text-gray-700">{opp.orgName}</p>
            <Pin size={16} className="icon"/>
            <p className="text-gray-700">{opp.orgID}</p>
            <PhoneCall size={16} className="icon"/>
            <p className="text-gray-700">{opp.orgPrimaryPhone}</p>
            <Mail size={16} className="icon" />
            <p className="text-gray-700">{opp.orgEmail}</p>
            <Globe  size={16} className="icon"/>
            <p className="text-gray-700">{opp.orgWebsite}</p>
          </section>
          <section>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Description</h1>
            <p className="text-gray-700">{opp.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Responsibilities</h2>
            <ul className=" pl-6 text-gray-700 space-y-1">
              {opp.responsibilities}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Requirements</h2>
            <ul className=" pl-6 text-gray-700 space-y-1">
              {opp.requirements}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Ideal Candidate We Want</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {opp.idealCandidate}                  
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">When & Where</h2>
            <div className="flex items-center gap-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p>{opp.whenAndWhere}</p>
            </div>
          </section>
        </div>

        <aside className="space-y-5 col-span-1">
          <div className="bg-gray-50 shadow border-gray-200 rounded-md p-4 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">About</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays size={16} className="icon" />
              <span>Posted On <strong className="block">{opp.datePosted}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock3 size={16} className="icon" />
              <span>Deadline <strong className="block">{opp.deadline}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin size={16} className="icon" />
              <span>Location<strong className="block">{opp.location}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays size={16} className="icon" />
              <span>Start Date<strong className="block">{opp.startDate}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays size={16} className="icon" />
              <span>End Date <strong className="block">{opp.endDate}</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <CalendarDays size={16} className="icon" />
              <span>Type <strong className="block">{opp.opType}</strong></span>
            </div>
          </div>
            <hr />
          <div className="bg-gray-50 shadow border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Categories</h3>
            <div className="flex gap-2 flex-wrap">
              {opp?.categories?.length ? (
                opp.categories.map((cat: string, idx: number) => {
                  const colorClass = categoryColors[cat] || 'bg-gray-100 text-gray-800';
                  return (
                    <span
                      key={idx}
                      className={`${colorClass} text-sm px-4 font-semibold py-1 rounded-full`}
                    >
                      {cat}
                    </span>
                  );
                })
              ) : (
                <p className="text-sm text-gray-500">No categories listed.</p>
              )}
            </div>

          </div>
              <hr/>
          <div className="bg-gray-50 shadow border-gray-200 rounded-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Required Skills</h3>
            <ul className="flex flex-wrap gap-2 text-sm text-blue-800">
              {opp?.requiredSkills?.length ? (
                opp.requiredSkills.map((skill: string, idx: number) => (
                  <li key={idx} className="bg-blue-100 px-2 py-1 rounded list-none">
                    {skill}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No skills listed.</li>
              )}
            </ul>
          </div>

        </aside>
      </div>
    </div>
     
  );
};

export default Description;