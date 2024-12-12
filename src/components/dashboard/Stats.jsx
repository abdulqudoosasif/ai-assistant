import React, { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdFamilyRestroom, MdHealthAndSafety, MdTravelExplore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PersonalProfileForm from "../../Forms/PersonalProfileForm";
import FamilyRelationshipsForm from "../../Forms/FamilyRelationshipsForm";
import DailyScheduleForm from "../../Forms/DailyScheduleForm";
import CommunicationForm from "../../Forms/CommunicationForm";
import { RiInformation2Fill } from "react-icons/ri";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-pink-400 to-red-600 text-white rounded-md p-2 w-fit">
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white rounded-md p-2 w-fit">
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-green-500 to-teal-700 text-white rounded-md p-2 w-fit">
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-md p-2 w-fit">
        <RiInformation2Fill />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Financial Information</h3>
        <p className="text-sm leading-4">"Your Income and Expense Information</p>
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-indigo-500 via-blue-400 to-sky-300 text-white rounded-md p-2 w-fit">
        <MdHealthAndSafety />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Health and Fitness
        </h3>
        <p className="text-sm leading-4">Share Your Health and Fitness Goals</p>
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-md p-2 w-fit">
        <MdTravelExplore />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Travel
        </h3>
        <p className="text-sm leading-4">Update Your Travel Plans</p>
      </div>
      {showDailyScheduleForm && (
        <DailyScheduleForm onClose={() => setShowDailyScheduleForm(false)} />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowCommunicationForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-gray-400 to-blue-500 text-white rounded-md p-2 w-fit">
        <BsFileEarmarkPersonFill />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Personal Preferences</h3>
        <p className="text-sm leading-4">Your Personal Choices and Interests</p>
      </div>
      {showCommunicationForm && (
        <CommunicationForm onClose={() => setShowCommunicationForm(false)} />
      )}
       <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowPersonalProfileForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-pink-400 to-red-600 text-white rounded-md p-2 w-fit">
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white rounded-md p-2 w-fit">
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-green-500 to-teal-700 text-white rounded-md p-2 w-fit">
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-md p-2 w-fit">
        <RiInformation2Fill />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Financial Information</h3>
        <p className="text-sm leading-4">"Your Income and Expense Information</p>
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
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-indigo-500 via-blue-400 to-sky-300 text-white rounded-md p-2 w-fit">
        <MdHealthAndSafety />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Health and Fitness
        </h3>
        <p className="text-sm leading-4">Share Your Health and Fitness Goals</p>
      </div>
      {showFamilyRelationshipForm && (
        <FamilyRelationshipsForm
          onClose={() => setShowFamilyRelationshipForm(false)}
        />
      )}

    </div>
  );
};

export default Stats;
