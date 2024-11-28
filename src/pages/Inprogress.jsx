import React, { useState } from "react";
import "../css/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Inprogress = () => {
    const [clientData, setClientData] = useState({
        agenda: [],
        product: [],
        meetingStatus: "",
        clientGoal: "",
        clientOccupation: "",
        firstSIPDate: null,
        followUpTime: "",
        showPopup: false,
        selectedField: "",
        temporaryProductSelection: [],
    });

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let updatedValues = [...clientData.temporaryProductSelection];
        if (checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((item) => item !== value);
        }
        setClientData((prevData) => ({
            ...prevData,
            temporaryProductSelection: updatedValues,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const togglePopup = (field) => {
        setClientData((prevData) => ({
            ...prevData,
            showPopup: !prevData.showPopup,
            selectedField: field,
            temporaryProductSelection: prevData[field] || [],
        }));
    };

    const handleSave = () => {
        if (clientData.selectedField) {
            setClientData((prevData) => ({
                ...prevData,
                [prevData.selectedField]: prevData.temporaryProductSelection,
                showPopup: false,
            }));
        }
    };

    const handleCancel = () => {
        setClientData((prevData) => ({
            ...prevData,
            temporaryProductSelection: [],
            showPopup: false,
        }));
    };

    const handleSelection = (item) => {
        setClientData((prevData) => ({
            ...prevData,
            [prevData.selectedField]: item,
            showPopup: false,
        }));
    };

    return (
        <div className="inprogress-page-container">
            <form action="" className="inprogress-form">
            <div className="inprogress-page-details">
            
                <div className="inprogress-page-row">
                    <label className="inprogress-page-label">Meeting Status:</label>
                    <input
                        type="text"
                        name="meetingStatus"
                        value={clientData.meetingStatus || "Click to select status"}
                        onClick={() => togglePopup("meetingStatus")}
                        className="inprogress-page-input"
                        readOnly
                    />
                </div>

                {/* Meeting Agenda */}
                <div className="inprogress-page-row">
                    <label className="inprogress-page-label">Meeting Agenda:</label>
                    <input
                        type="text"
                        name="agenda"
                        value={clientData.agenda.join(", ") || "Click to select an agenda"}
                        onClick={() => togglePopup("agenda")}
                        className="inprogress-page-input"
                        readOnly
                    />
                </div>

                {/* Products */}
                <div className="inprogress-page-row">
                    <label className="inprogress-page-label">Products:</label>
                    <input
                        type="text"
                        name="product"
                        value={clientData.product.join(", ") || "Click to select a product"}
                        onClick={() => togglePopup("product")}
                        className="inprogress-page-input"
                        readOnly
                    />
                </div>

                {/* Other fields */}
                <div className="inprogress-page-row">
                    <label className="inprogress-page-label">Conveyance Amount:</label>
                    <input
                        type="text"
                        name="clientGoal"
                        placeholder="Amount in INR"
                        value={clientData.clientGoal}
                        onChange={handleInputChange}
                        className="inprogress-page-input"
                    />
                </div>

                <div className="inprogress-page-row">
                    <label className="inprogress-page-label">Remark:</label>
                    <input
                        type="text"
                        name="clientOccupation"
                        placeholder="Share your remark here..."
                        value={clientData.clientOccupation}
                        onChange={handleInputChange}
                        className="inprogress-page-input"
                    />
                </div>

                <div className="inprogress-page-row">
                    <div className="inprogress-page-field">
                        <label className="inprogress-page-label">Follow-up Date:</label>
                        <DatePicker
                            selected={clientData.firstSIPDate}
                            onChange={(date) =>
                                setClientData((prevData) => ({
                                    ...prevData,
                                    firstSIPDate: date,
                                }))
                            }
                            className="inprogress-page-input full-width-datepicker"
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select a date"
                        />
                    </div>
                    <div className="inprogress-page-field">
                        <label className="inprogress-page-label">Follow-up Time:</label>
                        <input
                            type="time"
                            name="followUpTime"
                            value={clientData.followUpTime}
                            onChange={handleInputChange}
                            className="inprogress-page-input"
                        />
                    </div>
                </div>

                <div className="inprogress-page-row">
                    <button className="inprogress-page-submit-button">Submit</button>
                </div>
            </div>
            </form>
            {/* Popup */}
            {clientData.showPopup && (
                <div className="inprogress-page-popup">
                    <div className="inprogress-page-popup-content">
                        <ul>
                            {clientData.selectedField === "agenda"
                                ? ["Portfolio", "New Business", "Services", "Task by BA"].map(
                                      (item, index) => (
                                          <li key={index}>
                                              <label>
                                                  <input
                                                      type="checkbox"
                                                      value={item}
                                                      checked={clientData.temporaryProductSelection.includes(item)}
                                                      onChange={handleCheckboxChange}
                                                  />
                                                  {item}
                                              </label>
                                          </li>
                                      )
                                  )
                                : clientData.selectedField === "product"
                                ? ["Mutual Funds", "Fixed Deposit", "Insurance", "Others"].map(
                                      (item, index) => (
                                          <li key={index}>
                                              <label>
                                                  <input
                                                      type="checkbox"
                                                      value={item}
                                                      checked={clientData.temporaryProductSelection.includes(item)}
                                                      onChange={handleCheckboxChange}
                                                  />
                                                  {item}
                                              </label>
                                          </li>
                                      )
                                  )
                                : ["Completed", "Pending", "Rescheduled", "Cancelled"].map(
                                      (item, index) => (
                                          <li key={index} onClick={() => handleSelection(item)}>
                                              {item}
                                          </li>
                                      )
                                  )}
                        </ul>
                        {(clientData.selectedField === "agenda" ||
                            clientData.selectedField === "product") && (
                            <div className="inprogress-page-popup-buttons">
                                <button className="inprogresspopup-btnsave" onClick={handleSave}>Save</button>
                                <button className="inprogresspopup-btncancel" onClick={handleCancel}>Cancel</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inprogress;
