import { Opportunity } from "../types/opportunity";
import Link from "next/link";
import '../app/globals.css'


const img = 'job1.png'
export default function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (

      <Link href={`/opportunity/${opportunity.id}`}>
        <div
          className='border border-gray-200 shadow rounded-2xl px-6 py-4 mt-8 grid grid-cols-1 sm:grid-cols-11 gap-4
                      transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer'
        >
          <div className='sm:col-span-2 flex justify-center sm:justify-start'>
            <img
              src={opportunity.logoUrl  || img}
              alt="opportunity"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className='sm:col-span-9'>
            <h1 className='text-gray-700 font-bold text-xl'>{opportunity.title}</h1>
            <p className='text-gray-500 mt-1 text-sm'>{opportunity.orgName} • {opportunity.location}</p>
            <p className='text-gray-800 mt-2 text-sm'>{opportunity.description}</p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="bg-green-100 text-teal-600 font-semibold px-5 py-1.5 rounded-full text-sm flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-green-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                {opportunity.viewsCount}
              </span>
              <div className='w-px h-7 bg-gray-300'></div>
              <span className="border border-yellow-400 text-yellow-500 font-semibold px-5 py-1.5 rounded-full text-sm flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-amber-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>

                {opportunity.applicantsCount}
              </span>
              <span className="border border-indigo-800 text-indigo-800 font-semibold px-5 py-1.5 rounded-full text-sm">
                {opportunity.status}
              </span>
              <span className="border border-indigo-800 text-indigo-800 font-semibold px-5 py-1.5 rounded-full text-sm">
                {opportunity.whenAndWhere}
              </span>
            </div>
          </div>
        </div>
      </Link>

  );
}
