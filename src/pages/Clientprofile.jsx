
import React, { useState, useEffect } from 'react'; 
import profileImage from '../assets/profileImage.png';

const Clientprofile = () => {
  const [formData, setFormData] = useState({
    clientAge: '',
    clientAgeWithUs: '',
    totalAUM: '',
    totalSIPAmount: '',
    clientAnnualIncome: '',
    clientGoal: [],
    clientOccupation: '',
    firstSIPDate: '',
    firstLumpsumDate: '',
    lastBusinessProduct: '',
    lastMeetingDate: '',
    averageReturn: '',
    clientBehavior: '',
    clientReactsMarket: '',
    favoriteAssetClass: [],
    familyMember: '',
    termInsurance: '',
    mediclaim: '',
    carInsurance: '',
    otherInsurances: ''
  });


  const [isGoalPopupVisible, setIsGoalPopupVisible] = useState(false);
  const [isAssetClassPopupVisible, setIsAssetClassPopupVisible] = useState(false);
  const [popupSelections, setPopupSelections] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');
  const [showAgePopup, setShowAgePopup] = useState(false); 
  const [showAgeWithUsPopup, setShowAgeWithUsPopup] = useState(false);
  const [showIncomePopup, setShowIncomePopup] = useState(false); 
  const [showOccupationPopup, setShowOccupationPopup] = useState(false); 
  const [showBehaviorPopup, setShowBehaviorPopup] = useState(false);
  const [showMarketReactionPopup, setShowMarketReactionPopup] = useState(false);
  const [showFamilyMemberPopup, setShowFamilyMemberPopup] = useState(false);
  const [showTermInsurancePopup, setShowTermInsurancePopup] = useState(false);
  const [showMediclaimPopup, setShowMediclaimPopup] = useState(false);
  const [showCarInsurancePopup, setShowCarInsurancePopup] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleInputClick = (goal) => {
    if (goal === "ClientGoal") {
      setIsGoalPopupVisible(true);
    } else if (goal === "favoriteAssetClass") {
      setIsAssetClassPopupVisible(true);
    }
  };

  const closePopup = () => {
    setIsGoalPopupVisible(false);
    setIsAssetClassPopupVisible(false);
  };

  const handlePopupOptionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setPopupSelections((prevSelections) => [...prevSelections, value]);
    } else {
      setPopupSelections((prevSelections) =>
        prevSelections.filter((option) => option !== value)
      );
    }
  };

  const handleSave = () => {
    if (isGoalPopupVisible) {
      setFormData((prevData) => ({
        ...prevData,
        clientGoal: popupSelections,
      }));
      setIsGoalPopupVisible(false);
    } else if (isAssetClassPopupVisible) {
      setFormData((prevData) => ({
        ...prevData,
        favoriteAssetClass: popupSelections,
      }));
      setIsAssetClassPopupVisible(false);
    }

    setPopupSelections([]);
  };

  const handleCancel = () => {
    setPopupSelections([]);
    if (isGoalPopupVisible) {
      setIsGoalPopupVisible(false);
    } else if (isAssetClassPopupVisible) {
      setIsAssetClassPopupVisible(false);
    }
  };

  const toggleDropdown = () => {
    console.log("Toggling dropdown...", isDropdownVisible);
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setIsDropdownVisible(false);
  };

  const handleClickOutside = (e) => {
    const dropdown = document.getElementById('dropdown-popup');
    if (dropdown && !dropdown.contains(e.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  // Client Age Input component logic
  const handleAgeInputClick = () => {
    setShowAgePopup(!showAgePopup);
  };

  const handleAgeWithUsInputClick = () => {
    setShowAgeWithUsPopup(!showAgeWithUsPopup); // Toggle visibility
  };

  const handleAgeSelectOption = (value) => {
    setFormData({
      ...formData,
      clientAge: value,
    });
    setShowAgePopup(false); // Hide the popup after selection
  };

  const handleAgeWithUsSelectOption = (value) => {
    setFormData({
      ...formData,
      clientAgeWithUs: value, // Set the selected value
    });
    setShowAgeWithUsPopup(false); // Close the popup after selection
  };

  const handleIncomeInputClick = () => {
    setShowIncomePopup(!showIncomePopup); // Toggle visibility
  };

  // Handle dropdown selection for Annual Income
  const handleIncomeSelectOption = (value) => {
    setFormData({
      ...formData,
      clientAnnualIncome: value, // Set the selected value
    });
    setShowIncomePopup(false); // Close the popup after selection
  };

  const handleOccupationInputClick = () => {
    setShowOccupationPopup(!showOccupationPopup); // Toggle visibility
  };

  // Handle dropdown selection for Occupation
  const handleOccupationSelectOption = (value) => {
    setFormData({
      ...formData,
      clientOccupation: value, // Set the selected value
    });
    setShowOccupationPopup(false); // Close the popup after selection
  };

  const handleBehaviorInputClick = () => {
    setShowBehaviorPopup(!showBehaviorPopup); // Toggle visibility
  };

  // Handle 'Market Reaction' input field click
  const handleMarketReactionInputClick = () => {
    setShowMarketReactionPopup(!showMarketReactionPopup); // Toggle visibility
  };

  // Handle dropdown selection for Behavior
  const handleBehaviorSelectOption = (value) => {
    setFormData({
      ...formData,
      clientBehavior: value, // Set the selected value for Behavior
    });
    setShowBehaviorPopup(false); // Close the popup after selection
  };

  // Handle dropdown selection for Market Reaction
  const handleMarketReactionSelectOption = (value) => {
    setFormData({
      ...formData,
      clientReactsMarket: value, // Set the selected value for Market Reaction
    });
    setShowMarketReactionPopup(false); // Close the popup after selection
  };

  const handleFamilyMemberInputClick = () => {
    setShowFamilyMemberPopup(!showFamilyMemberPopup);
  };

  // Handle input field click for Term Insurance
  const handleTermInsuranceInputClick = () => {
    setShowTermInsurancePopup(!showTermInsurancePopup);
  };

  // Handle input field click for Mediclaim
  const handleMediclaimInputClick = () => {
    setShowMediclaimPopup(!showMediclaimPopup);
  };

  // Handle input field click for Vehicle Insurance
  const handleCarInsuranceInputClick = () => {
    setShowCarInsurancePopup(!showCarInsurancePopup);
  };

  // Handle selection for Family Member
  const handleFamilyMemberSelectOption = (value) => {
    setFormData({
      ...formData,
      familyMember: value,
    });
    setShowFamilyMemberPopup(false); // Close the popup after selection
  };

  // Handle selection for Term Insurance
  const handleTermInsuranceSelectOption = (value) => {
    setFormData({
      ...formData,
      termInsurance: value,
    });
    setShowTermInsurancePopup(false); // Close the popup after selection
  };

  // Handle selection for Mediclaim
  const handleMediclaimSelectOption = (value) => {
    setFormData({
      ...formData,
      mediclaim: value,
    });
    setShowMediclaimPopup(false); // Close the popup after selection
  };

  // Handle selection for Vehicle Insurance
  const handleCarInsuranceSelectOption = (value) => {
    setFormData({
      ...formData,
      carInsurance: value,
    });
    setShowCarInsurancePopup(false); // Close the popup after selection
  };


return (
  <form className="clientprofile-form" onSubmit={handleSubmit}>
      <div className="clientprofile-profile-section">
    <div className="clientprofile-img">
      <img
        src={profileImage}
        alt="client-profile"
        className="client-profile"
      />
    </div>
    <div className="clientprofile-profile-section">
        <div className="clientprofile-img">
          <img
            src="profileImage"
            alt="client-profile"
            className="client-profile"
          />
        </div>

        <div className="clientprofile-details">
          <div>
            <p className="detailspara">
              <strong>{formData.clientName || "John Does"}</strong>
            </p>
            <p className="detailspara">{formData.clientCity || "Germany"}</p>
            <p className="detailspara">{formData.clientPhone || "1234567890"}</p>
            <div className="buttons-container">
              <button className="new-btn">New</button>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        </div>
      </div>
  </div>

     <div className="clientprofile-input-group">
        <label className="clientprofile-label">Client Age</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="clientAge"
            value={formData.clientAge || 'Select Age Range'}
            onClick={handleAgeInputClick} 
            readOnly
          />
          {showAgePopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleAgeSelectOption('Below 18')}>Below 18</li>
                <li onClick={() => handleAgeSelectOption('18 to 25')}>18 to 25</li>
                <li onClick={() => handleAgeSelectOption('26 to 41')}>26 to 41</li>
                <li onClick={() => handleAgeSelectOption('41 to 60')}>41 to 60</li>
                <li onClick={() => handleAgeSelectOption('Above 60')}>Above 60</li>
              </ul>
            </div>
          )}
        </div>
      </div>

<div className="clientprofile-input-group">
        <label className="clientprofile-label">Client Age with Us</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="clientAgeWithUs"
            value={formData.clientAgeWithUs || 'Select Age with Us'}
            onClick={handleAgeWithUsInputClick} // Toggle popup for 'Age with Us'
            readOnly
          />
          {showAgeWithUsPopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleAgeWithUsSelectOption('0 to 2 years')}>0 to 2 years</li>
                <li onClick={() => handleAgeWithUsSelectOption('2 to 5 years')}>2 to 5 years</li>
                <li onClick={() => handleAgeWithUsSelectOption('5 to 10 years')}>5 to 10 years</li>
                <li onClick={() => handleAgeWithUsSelectOption('Above 10 years')}>Above 10 years</li>
              </ul>
            </div>
          )}
        </div>
      </div>



    <div  className="clientprofile-input-group">
      <label className="clientprofile-label">Total Client AUM</label>
      <input
        className="clientprofile-input"
        type="text"
        name="totalAUM"
        value={formData.totalAUM}
        onChange={handleChange}
        required
      />
    </div>

    <div className="clientprofile-input-group">
      <label className="clientprofile-label">Total SIP Amount</label>
      <input
        className="clientprofile-input"
        type="text"
        name="totalSIPAmount"
        value={formData.totalSIPAmount}
        onChange={handleChange}
        required
      />
    </div>


<div className="clientprofile-input-group">
        <label className="clientprofile-label">Client Annual Income</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="clientAnnualIncome"
            value={formData.clientAnnualIncome || 'Select Annual Income Range'}
            onClick={handleIncomeInputClick} // Toggle popup for Annual Income
            readOnly
          />
          {showIncomePopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleIncomeSelectOption('Below 5 Lakhs')}>Below 5 Lakhs</li>
                <li onClick={() => handleIncomeSelectOption('5 Lakhs to 10 Lakhs')}>5 Lakhs to 10 Lakhs</li>
                <li onClick={() => handleIncomeSelectOption('10 Lakhs to 20 Lakhs')}>10 Lakhs to 20 Lakhs</li>
                <li onClick={() => handleIncomeSelectOption('Above 20 Lakhs')}>Above 20 Lakhs</li>
              </ul>
            </div>
          )}
        </div>
      </div>

<div className="clientprofile-input-group">
  <label className="clientprofile-label">Client Goal</label>

  <div>
    <input
      className="clientprofile-input"
      type="text"
      name="clientGoal"
      value={formData.clientGoal.join(', ')} 
      onClick={() => handleInputClick("ClientGoal")}
      readOnly
      required
    />
  </div>

 
  {isGoalPopupVisible  && (
    <div className="clientprofile-popup">
      <div className="clientprofilepopup-content">
        <label>
          <input
            type="checkbox"
            value="Education"
            checked={popupSelections.includes("Education")}
            onChange={handlePopupOptionChange}
          />
          <span>Education</span> 
        </label>
        <label>
          <input
            type="checkbox"
            value="Home Purchase"
            checked={popupSelections.includes("Home Purchase")}
            onChange={handlePopupOptionChange}
          />
        <span> Home Purchase </span>  
        </label>
        <label>
          <input
            type="checkbox"
            value="Retirement"
            checked={popupSelections.includes("Retirement")}
            onChange={handlePopupOptionChange}
          />
          <span> Retirement </span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Vacation"
            checked={popupSelections.includes("Vacation")}
            onChange={handlePopupOptionChange}
          />
         <span>  Vacation </span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Wealth Building"
            checked={popupSelections.includes("Wealth Building")}
            onChange={handlePopupOptionChange}
          />
          <span>  Wealth Building  </span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Vehicle Purchase"
            checked={popupSelections.includes("Vehicle Purchase")}
            onChange={handlePopupOptionChange}
          />
           <span> Vehicle Purchase  </span>
        </label>
        <div className="clientprofile-popup-buttons">
          <button onClick={handleSave} className='clientprofilepopup-btnsave'>Save</button>
          <button onClick={handleCancel} className='clientprofilepopup-btncancel'>Cancel</button>
        </div>
      </div>
    </div>
  )}
</div>

<div className="clientprofile-input-group">
        <label className="clientprofile-label">Client Occupation</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="clientOccupation"
            value={formData.clientOccupation || 'Select Occupation'}
            onClick={handleOccupationInputClick} // Toggle popup for Occupation
            readOnly
          />
          {showOccupationPopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleOccupationSelectOption('Business')}>Business</li>
                <li onClick={() => handleOccupationSelectOption('Professional')}>Professional</li>
                <li onClick={() => handleOccupationSelectOption('Government Employee')}>Government Employee</li>
                <li onClick={() => handleOccupationSelectOption('Private Sector Employee')}>Private Sector Employee</li>
                <li onClick={() => handleOccupationSelectOption('Student')}>Student</li>
                <li onClick={() => handleOccupationSelectOption('Retired')}>Retired</li>
                <li onClick={() => handleOccupationSelectOption('Housewife')}>Housewife</li>
              </ul>
            </div>
          )}
        </div>
      </div>


      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">First SIP Date</label>
        <input
          className="clientprofile-input"
          type="text"
          name="firstSIPDate"
          placeholder="Enter First SIP Date (MM/DD/YYYY)"
          value={formData.firstSIPDate}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">First Lumpsum Date</label>
        <input
         className="clientprofile-input"
          type="text"
          name="firstLumpsumDate"
          placeholder="Enter First Lumpsum Date (MM/DD/YYYY)"
          value={formData.firstLumpsumDate}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Last Business Product</label>
        <input
          className="clientprofile-input"
          type="text"
          name="lastBusinessProduct"
          placeholder="Enter Last Business Product"
          value={formData.lastBusinessProduct}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Last Meeting Date</label>
        <input
        className="clientprofile-input"
          type="date"
          name="lastMeetingDate"
          value={formData.lastMeetingDate}
          onChange={handleChange}
        />
      </div>

      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Average Return</label>
        <input
          className="clientprofile-input"
          type="text"
          name="averageReturn"
          value={formData.averageReturn}
          onChange={handleChange}
        />
      </div>

      <div className="clientprofile-input-group">
        <label className="clientprofile-label">Client Behavior</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="clientBehavior"
            value={formData.clientBehavior || 'Select Client Behavior'}
            onClick={handleBehaviorInputClick} // Toggle popup for Behavior
            readOnly
          />
          {showBehaviorPopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleBehaviorSelectOption('Aggressive')}>Aggressive</li>
                <li onClick={() => handleBehaviorSelectOption('Moderate')}>Moderate</li>
                <li onClick={() => handleBehaviorSelectOption('Conservative')}>Conservative</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Client Reacts with Market */}
      <div className="clientprofile-input-group">
        <label className="clientprofile-label">Client Reacts with Market</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="clientReactsMarket"
            value={formData.clientReactsMarket || 'Select Reaction to Market'}
            onClick={handleMarketReactionInputClick} // Toggle popup for Market Reaction
            readOnly
          />
          {showMarketReactionPopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleMarketReactionSelectOption('Positive')}>Positive</li>
                <li onClick={() => handleMarketReactionSelectOption('Negative')}>Negative</li>
                <li onClick={() => handleMarketReactionSelectOption('Neutral')}>Neutral</li>
              </ul>
            </div>
          )}
        </div>
      </div>



     <div className="clientprofile-input-group">
  <label className="clientprofile-label">Client Favourite Asset Class</label>

  <div>
    <input
      className="clientprofile-input"
      type="text"
      name="favoriteAssetClass"
      value={formData.favoriteAssetClass.join(', ')} 
      onClick={() => handleInputClick("favoriteAssetClass")}
      readOnly
      required
    />
  </div>

  {isAssetClassPopupVisible && (
    <div className="clientprofile-popup">
      <div className="clientprofilepopup-content">
      
        <label>
          <input
            type="checkbox"
            value="Stocks"
            checked={popupSelections.includes("Stocks")}
            onChange={handlePopupOptionChange}
          />
          <span>Stocks</span> 
        </label>
        <label>
          <input
            type="checkbox"
            value="Bonds"
            checked={popupSelections.includes("Bonds")}
            onChange={handlePopupOptionChange}
          />
          <span>Bonds</span>  
        </label>
        <label>
          <input
            type="checkbox"
            value="Real Estate"
            checked={popupSelections.includes("Real Estate")}
            onChange={handlePopupOptionChange}
          />
          <span>Real Estate</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="Commodities"
            checked={popupSelections.includes("Commodities")}
            onChange={handlePopupOptionChange}
          />
          <span>Commodities</span>
        </label>

  
        <div className="clientprofile-popup-buttons">
          <button  className="clientprofilepopup-btnsave" onClick={handleSave}>Save</button>
          <button className="clientprofilepopup-btncancel" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )}
</div>
 
     
      
<div className="clientprofile-input-group">
        <label className="clientprofile-label">Family Member</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="familyMember"
            value={formData.familyMember || 'Select Family Member'}
            onClick={handleFamilyMemberInputClick}
            readOnly
          />
          {showFamilyMemberPopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleFamilyMemberSelectOption('Spouse')}>Spouse</li>
                <li onClick={() => handleFamilyMemberSelectOption('Parent')}>Parent</li>
                <li onClick={() => handleFamilyMemberSelectOption('Sibling')}>Sibling</li>
                <li onClick={() => handleFamilyMemberSelectOption('Child')}>Child</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Term Insurance */}
      <div className="clientprofile-input-group">
        <label className="clientprofile-label">Term Insurance</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="termInsurance"
            value={formData.termInsurance || 'Select'}
            onClick={handleTermInsuranceInputClick}
            readOnly
          />
          {showTermInsurancePopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleTermInsuranceSelectOption('Yes')}>Yes</li>
                <li onClick={() => handleTermInsuranceSelectOption('No')}>No</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mediclaim */}
      <div className="clientprofile-input-group">
        <label className="clientprofile-label">Mediclaim</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="mediclaim"
            value={formData.mediclaim || 'Select'}
            onClick={handleMediclaimInputClick}
            readOnly
          />
          {showMediclaimPopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleMediclaimSelectOption('Yes')}>Yes</li>
                <li onClick={() => handleMediclaimSelectOption('No')}>No</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Vehicle Insurance */}
      <div className="clientprofile-input-group">
        <label className="clientprofile-label">Vehicle Insurance</label>
        <div className="clientprofile-input-container">
          <input
            className="clientprofile-input"
            name="carInsurance"
            value={formData.carInsurance || 'Select'}
            onClick={handleCarInsuranceInputClick}
            readOnly
          />
          {showCarInsurancePopup && (
            <div className="clientprofile-page-popup">
              <ul>
                <li onClick={() => handleCarInsuranceSelectOption('Yes')}>Yes</li>
                <li onClick={() => handleCarInsuranceSelectOption('No')}>No</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div  className="clientprofile-input-group">
        <label className="clientprofile-label">Other Insurances</label>
        <input
          className="clientprofile-input"
          type="text"
          name="otherInsurances"
          placeholder="Enter Other Insurances"
          value={formData.otherInsurances}
          onChange={handleChange}
        />
      </div>   
      <button type="submit"  className='save-btn' >Save</button>
    </form>

);
};

export default Clientprofile;