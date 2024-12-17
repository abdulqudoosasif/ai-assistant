import React, { useState } from "react";
import { AiFillSchedule } from "react-icons/ai";
import { FaGamepad, FaPersonMilitaryToPerson } from "react-icons/fa6";
import { IoBarChartSharp, IoCarSport, IoPersonSharp } from "react-icons/io5";
import { MdFamilyRestroom, MdHealthAndSafety, MdSecurity, MdTipsAndUpdates, MdTravelExplore, MdWork } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PersonalProfileForm from "../../Forms/PersonalProfileForm";
import FamilyRelationshipsForm from "../../Forms/FamilyRelationshipsForm";
import EducationForm from "../../Forms/EducationForm";
import WorkForm from "../../Forms/WorkForm";
import { RiInformation2Fill } from "react-icons/ri";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { FaHistory } from "react-icons/fa";
import { GiBookmarklet, GiGlassCelebration } from "react-icons/gi";
import TravelHistoryForm from "../../Forms/TravelHistoryForm";
import HealthInfoForm from "../../Forms/HealthInfoForm";
import RealEstateForm from "../../Forms/RealEstateForm";
import VehicleForm from "../../Forms/VehicleForm";
import TravelMembershipsForm from "../../Forms/TravelMembershipsForm";
import PersonalPreferencesForm from "../../Forms/PersonalPreferencesForm";
import MortgageForm from "../../Forms/MortgageForm";
import CelebrationsForm from "../../Forms/CelebrationsForm";
import InsuranceForm from "../../Forms/InsuranceForm";

const Stats = () => {
  const [showPersonalProfileForm, setShowPersonalProfileForm] = useState(false);
  const [showFamilyRelationshipForm, setShowFamilyRelationshipForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showWorkForm, setShowWorkForm] = useState(false);
  const [showTravelForm, setShowTravelForm] = useState(false);
  const [showHealthInfoForm, setShowHealthInfoForm] = useState(false);
  const [showRealEstateForm, setShowRealEstateForm] = useState(false);
  const [showVehicleForm, setShowVehicleForm] = useState(false);
  const [showTravelMembershipsForm, setShowTravelMembershipsForm] = useState(false);
  const [showPersonalPreferencesForm, setShowPersonalPreferencesForm] = useState(false);
  const [showMortgageForm, setShowMortgageForm] = useState(false);
  const [showCelebrationsForm, setShowCelebrationsForm] = useState(false);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);
  
return (
   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
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
        onClick={() => setShowEducationForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white rounded-md p-2 w-fit">
        <GiBookmarklet />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Education
        </h3>
        <p className="text-sm leading-4">Tell Us About Your Educational Background</p>
      </div>
      {showEducationForm && (
        <EducationForm onClose={() => setShowEducationForm(false)} />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowWorkForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-green-500 to-teal-700 text-white rounded-md p-2 w-fit">
        <MdWork />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Work</h3>
        <p className="text-sm leading-4">Share Your Professional Journey</p>
      </div>
      {showWorkForm && (
        <WorkForm onClose={() => setShowWorkForm(false)} />
      )}
      {/* 2 */}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowCelebrationsForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-md p-2 w-fit">
        <GiGlassCelebration />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Celebration</h3>
        <p className="text-sm leading-4">Share the Details of Your Upcoming Celebration</p>
      </div>
      {showCelebrationsForm && (
        <CelebrationsForm
          onClose={() => setShowCelebrationsForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowHealthInfoForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-indigo-500 via-blue-400 to-sky-300 text-white rounded-md p-2 w-fit">
        <MdHealthAndSafety />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Health and Fitness
        </h3>
        <p className="text-sm leading-4">Share Your Health and Fitness Goals</p>
      </div>
      {showHealthInfoForm && (
        <HealthInfoForm
          onClose={() => setShowHealthInfoForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowTravelForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-md p-2 w-fit">
        <MdTravelExplore />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Travel
        </h3>
        <p className="text-sm leading-4">Update Your Travel Plans</p>
      </div>
      {showTravelForm && (
        <TravelHistoryForm onClose={() => setShowTravelForm(false)} />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowPersonalPreferencesForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-gray-400 to-blue-500 text-white rounded-md p-2 w-fit">
        <BsFileEarmarkPersonFill />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Personal Preferences</h3>
        <p className="text-sm leading-4">Your Personal Choices and Interests</p>
      </div>
      {showPersonalPreferencesForm && (
        <PersonalPreferencesForm onClose={() => setShowPersonalPreferencesForm(false)} />
      )}
       <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowMortgageForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-blue-700 to-cyan-500 text-white rounded-md p-2 w-fit">
        <LiaDigitalTachographSolid />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Mortgage</h3>
        <p className="text-sm leading-4">Provide Your Mortgage Information to Get Started</p>
      </div>
      {showMortgageForm && (
        <MortgageForm
          onClose={() => setShowMortgageForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowRealEstateForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-md p-2 w-fit">
        <IoBarChartSharp />

        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Real Estate
        </h3>
        <p className="text-sm leading-4">Tell Us About Your Property Preferences</p>
      </div>
      {showRealEstateForm && (
        <RealEstateForm
          onClose={() => setShowRealEstateForm(false)}
        />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowVehicleForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-indigo-400 to-sky-400 text-white rounded-md p-2 w-fit">
        <IoCarSport />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
       Car
        </h3>
        <p className="text-sm leading-4">Provide Information About the Car You Own</p>
      </div>
      {showVehicleForm && (
        <VehicleForm onClose={() => setShowVehicleForm(false)} />
      )}
      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowInsuranceForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-purple-400 to-indigo-500 text-white rounded-md p-2 w-fit">
        <FaHistory />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">Insurance </h3>
        <p className="text-sm leading-4">Share the Details of Your Insurance Plan</p>
      </div>
      {showInsuranceForm && (
        <InsuranceForm onClose={() => setShowInsuranceForm(false)} />
      )}

      <div
        className="p-6 rounded-lg shadow bg-white  cursor-pointer"
        onClick={() => setShowTravelMembershipsForm(true)}
      >
        <div className="text-2xl flex items-start justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-md p-2 w-fit">
        <FaGamepad />
        </div>
        <h3 className="text-lg font-bold mt-2 mb-1 leading-5">
        Travel Memberships
        </h3>
        <p className="text-sm leading-4">Share the Details of Your Travel Membership</p>
      </div>
      {showTravelMembershipsForm && (
        <TravelMembershipsForm
          onClose={() => setShowTravelMembershipsForm(false)}
        />
      )}

    </div>
  );
};

export default Stats;
