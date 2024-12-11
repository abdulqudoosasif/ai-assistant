import React from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigation = useNavigate()
  

  const PersonalProfileForm=()=>{
       navigation("/personal-profile-form")
  }

  const FamilyRelationshipsForm=()=>{
    navigation("/family-relationships-form")
}

const DailyScheduleForm=()=>{
  navigation("/daily-schedule-form")
}

const CommunicationForm=()=>{
  navigation("/communication-form")
}

  return(
  <div className="grid grid-cols-4 gap-4 my-6">
    <div className="p-6 rounded-lg shadow bg-blue-100 cursor-pointer" onClick={PersonalProfileForm}>
      <div className="text-2xl"><IoPersonSharp /></div>
      <h3 className="text-lg font-bold mt-2">Personal Form</h3>
      <p className="text-sm">Tell Us About Yourself</p>
    </div>
    <div className="p-6 rounded-lg shadow bg-teal-100 cursor-pointer" onClick={FamilyRelationshipsForm}>
      <div className="text-2xl"><MdFamilyRestroom /></div>
      <h3 className="text-lg font-bold mt-2">Family and Relationships</h3>
      <p className="text-sm">Tell Us About Your Family</p>
    </div>
    <div className="p-6 rounded-lg shadow bg-pink-100 cursor-pointer" onClick={DailyScheduleForm}>
      <div className="text-2xl"><AiFillSchedule /></div>
      <h3 className="text-lg font-bold mt-2">Daily Schedule and Tasks</h3>
      <p className="text-sm">Plan and Prioritize Your Day</p>
    </div>
    <div className="p-6 rounded-lg shadow bg-indigo-100 cursor-pointer" onClick={CommunicationForm}>
      <div className="text-2xl"><FaPersonMilitaryToPerson /> </div>
      <h3 className="text-lg font-bold mt-2">Communication</h3>
      <p className="text-sm">Your Communication Information</p>
    </div>


    {/* part Two */}
    <div className="p-6 rounded-lg shadow bg-pink-100 cursor-pointer" onClick={DailyScheduleForm}>
      <div className="text-2xl"><AiFillSchedule /></div>
      <h3 className="text-lg font-bold mt-2">Daily Schedule and Tasks</h3>
      <p className="text-sm">Plan and Prioritize Your Day</p>
    </div>
    <div className="p-6 rounded-lg shadow bg-blue-100 cursor-pointer" onClick={PersonalProfileForm}>
      <div className="text-2xl"><IoPersonSharp /></div>
      <h3 className="text-lg font-bold mt-2">Personal Form</h3>
      <p className="text-sm">Tell Us About Yourself</p>
    </div>
    <div className="p-6 rounded-lg shadow bg-indigo-100 cursor-pointer" onClick={CommunicationForm}>
      <div className="text-2xl"><FaPersonMilitaryToPerson /> </div>
      <h3 className="text-lg font-bold mt-2">Communication</h3>
      <p className="text-sm">Your Communication Information</p>
    </div>
    <div className="p-6 rounded-lg shadow bg-teal-100 cursor-pointer" onClick={FamilyRelationshipsForm}>
      <div className="text-2xl"><MdFamilyRestroom /></div>
      <h3 className="text-lg font-bold mt-2">Family and Relationships</h3>
      <p className="text-sm">Tell Us About Your Family</p>
    </div>
  </div>
);}

export default Stats;
