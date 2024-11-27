import React, { useState } from "react";
import "../css/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Inprogress = () => {
    // State initialization
    const [clientData, setClientData] = useState({
        totalClientAUM: [],
        product: "",
        clientGoal: "",
        clientOccupation: "",
        firstSIPDate: null,
        followUpTime: "",
    });

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let updatedValues = [...clientData.totalClientAUM];
        if (checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((item) => item !== value);
        }
        setClientData((prevData) => ({
            ...prevData,
            totalClientAUM: updatedValues,
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            [name]: value,
        });
    };

    return (
        <div className="inprogress-container">
            <div className="inprogress-details">
                <div className="inprogress-row">
                    <div className="inprogress-field">
                        <label className="inprogress-label">Meeting Status:</label>
                        <select
                            name="totalClientAUM"
                            value={clientData.totalClientAUM}
                            onChange={handleInputChange}
                            className="inprogress-input inprogress-dropdown"
                        >
                            <option value="">Select Status</option>
                            <option value="300000">Close</option>
                            <option value="100000">In progress from client side</option>
                            <option value="200000">In progress from my side</option>
                            <option value="500000">Others</option>
                        </select>
                    </div>
                </div>

                <div className="inprogress-row">
                    <label className="inprogress-label">Meeting Agenda:</label>
                    <div className="inprogress-checkbox-group">
                        {["Portfolio", "New Business", "Services", "Task by BA"].map((agenda) => (
                            <label key={agenda}>
                                <input
                                    type="checkbox"
                                    name="totalClientAUM"
                                    value={agenda}
                                    checked={clientData.totalClientAUM.includes(agenda)}
                                    onChange={handleCheckboxChange}
                                />
                                &nbsp;{agenda}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="inprogress-row">
                    <label className="inprogress-label">Products:</label>
                    <div className="inprogress-radio-group">
                        {["Mutual Funds", "Fixed Deposit", "Insurance", "Others"].map((product) => (
                            <label key={product}>
                                <input
                                    type="radio"
                                    name="product"
                                    value={product}
                                    checked={clientData.product === product}
                                    onChange={handleInputChange}
                                />
                                &nbsp;{product}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="inprogress-row">
                    <div className="inprogress-field">
                        <label className="inprogress-label">Conveyance Amount:</label>
                        <input
                            type="text"
                            name="clientGoal"
                            placeholder="Amount in INR"
                            value={clientData.clientGoal}
                            onChange={handleInputChange}
                            className="inprogress-input"
                        />
                    </div>
                    <div className="inprogress-field">
                        <label className="inprogress-label">Remark:</label>
                        <input
                            type="text"
                            name="clientOccupation"
                            placeholder="Share your remark here..."
                            value={clientData.clientOccupation}
                            onChange={handleInputChange}
                            className="inprogress-input"
                        />
                    </div>
                </div>

                <div className="inprogress-row">
                    <div className="inprogress-field">
                        <label className="inprogress-label">Follow-up Date:</label>
                        <DatePicker
                            selected={clientData.firstSIPDate}
                            onChange={(date) => handleInputChange({ target: { name: "firstSIPDate", value: date } })}
                            className="inprogress-datepicker"
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Select a date"
                            popperPlacement="bottom"
                        />
                    </div>
                    <div className="inprogress-field">
                        <label className="inprogress-label">Follow-up Time:</label>
                        <input
                            type="time"
                            name="followUpTime"
                            value={clientData.followUpTime}
                            onChange={handleInputChange}
                            className="inprogress-input"
                        />
                    </div>
                </div>

                <div className="inprogress-row">
                    <button className="inprogress-submit-button">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Inprogress;
