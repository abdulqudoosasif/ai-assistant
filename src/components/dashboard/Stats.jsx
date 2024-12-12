import React, { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PersonalProfileForm from "../../Forms/PersonalProfileForm";
import FamilyRelationshipsForm from "../../Forms/FamilyRelationshipsForm";
import DailyScheduleForm from "../../Forms/DailyScheduleForm";
import CommunicationForm from "../../Forms/CommunicationForm";

const Stats = () => {
  const [showPersonalProfileForm, setShowPersonalProfileForm] = useState(false);
  const [showFamilyRelationshipForm, setShowFamilyRelationshipForm] =
    useState(false);
  const [showDailyScheduleForm, setShowDailyScheduleForm] = useState(false);
  const [showCommunicationForm, setShowCommunicationForm] = useState(false);

  const navigation = useNavigate();


  return (
    <div className="grid grid-cols-4 gap-4 my-6">
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowPersonalProfileForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <IoPersonSharp />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Personal Form</h3>
        <p className="text-sm leading-4">Tell Us About Yourself</p>
      </div>
      {showPersonalProfileForm && (
        <PersonalProfileForm
          onClose={() => setShowPersonalProfileForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowFamilyRelationshipForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <MdFamilyRestroom />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
          Family and Relationships
        </h3>
        <p className="text-sm leading-4">Tell Us About Your Family</p>
      </div>
      {showFamilyRelationshipForm && (
        <FamilyRelationshipsForm
          onClose={() => setShowFamilyRelationshipForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowDailyScheduleForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <AiFillSchedule />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
          Daily Schedule and Tasks
        </h3>
        <p className="text-sm leading-4">Plan and Prioritize Your Day</p>
      </div>
      {showDailyScheduleForm && (
        <DailyScheduleForm onClose={() => setShowDailyScheduleForm(false)} />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowCommunicationForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <FaPersonMilitaryToPerson />{" "}
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Communication</h3>
        <p className="text-sm leading-4">Your Communication Information</p>
      </div>
      {showCommunicationForm && (
        <CommunicationForm onClose={() => setShowCommunicationForm(false)} />
      )}


      {/* 2 */}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowPersonalProfileForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <IoPersonSharp />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Personal Form</h3>
        <p className="text-sm leading-4">Tell Us About Yourself</p>
      </div>
      {showPersonalProfileForm && (
        <PersonalProfileForm
          onClose={() => setShowPersonalProfileForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowFamilyRelationshipForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <MdFamilyRestroom />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
          Family and Relationships
        </h3>
        <p className="text-sm leading-4">Tell Us About Your Family</p>
      </div>
      {showFamilyRelationshipForm && (
        <FamilyRelationshipsForm
          onClose={() => setShowFamilyRelationshipForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowDailyScheduleForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <AiFillSchedule />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
          Daily Schedule and Tasks
        </h3>
        <p className="text-sm leading-4">Plan and Prioritize Your Day</p>
      </div>
      {showDailyScheduleForm && (
        <DailyScheduleForm onClose={() => setShowDailyScheduleForm(false)} />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowCommunicationForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-md p-2 w-fit">
          <FaPersonMilitaryToPerson />{" "}
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Communication</h3>
        <p className="text-sm leading-4">Your Communication Information</p>
      </div>
      {showCommunicationForm && (
        <CommunicationForm onClose={() => setShowCommunicationForm(false)} />
      )}
      
    </div>
  );
};

export default Stats;
