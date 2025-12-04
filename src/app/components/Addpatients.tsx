 import { FileText, Key, Lock, Plus, Save, Shield, Users } from "lucide-react";
 import { useState } from "react";
 
 function AddPatient() {
 
    return(
 <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Patient</h1>
      <p className="text-gray-600 mb-8">register a new patient here</p>

 <div className=" max-w-3xl gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6 ">
           
            <div className="  ">
              <h2 className="text-xl text-gray-900">Patient Information</h2>
              <p className="text-sm text-gray-600">This form will be containing personal information and medical information of a patient</p>
            </div>
          </div>
          <h3 className="mb-4 flex items-center gap-2 text-gray-900">Patient Information <Plus className=" text-blue-500" /></h3>
          <div className="space-y-4 text-sm shadow-lg border-2 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Dr. John Smith"
                  className="w-full bg-purple-50 text-gray-300 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of birth</label>
                <input
                  type="email"
                  defaultValue="john.smith@hospital.com"
                  className="w-full px-4 py-2 text-gray-300 bg-purple-50 bg-gray-50 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full px-4 py-2 bg-purple-50 text-gray-300 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Phone Number</label>
                <input
                  type="text"
                  defaultValue="MD-12345678"
                  className="w-full px-4 py-2 bg-purple-50 text-gray-300 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
           
           <div className="grid grid-cols-2 gap-4">
  {/* Frequency */}
  <div>
    <label className="block text-sm font-medium text-gray-700">Gender</label>
    <select
      className="mt-2 w-full px-4 py-2 text-sm font-medium bg-purple-50 text-gray-700 border border-gray-300 rounded-lg"
    >
      <option value="" >Select Gender</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>

  {/* Duration */}
  <div>
    <label className="block text-sm font-medium text-gray-700">Insurance Provider</label>
    <select
      className="mt-2 w-full px-4 py-2 text-sm font-medium bg-purple-50 text-gray-700 border border-gray-300 rounded-lg"
    >
      <option value="" >Select Provider</option>
      <option>RSSB</option>
      <option>MMI</option>
      <option>RADIANT</option>
      <option>BRITAM</option>
    </select>
  </div>
</div>
               <div>  
              <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Number</label>
              <input
                type="text"
                placeholder="eg: take with food"
                className="w-full px-4 py-2 text-sm bg-purple-50 text-gray-400 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
         <div>
           <h3 className="mt-6 flex items-center gap-2 text-gray-900">Medical Information <Plus className=" text-blue-500" /></h3>

            <div className="space-y-4 text-sm shadow-lg border-2 rounded-lg p-6 mt-4">
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Chronic Diseases</label>
              <textarea
                className="w-full px-4 py-2 bg-purple-50 text-gray-300 border border-gray-300 rounded-lg resize-none"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
              <textarea
                className="w-full px-4 py-2 bg-purple-50 text-gray-300 border border-gray-300 rounded-lg resize-none"
                rows={3}
              />
            </div>
        </div>
        </div>
        </div>
       
        </div>
        </div>
    )
}

export default AddPatient;