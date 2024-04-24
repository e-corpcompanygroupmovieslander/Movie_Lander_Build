import { MONITORINGPOST } from "../../Modules/Module.js";

export const MONITORING = (INFO) => {
    // Get all data from local storage
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        allData[key] = localStorage.getItem(key);
    }

    // Get all data from session storage
    const sessionData = {};
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        sessionData[key] = sessionStorage.getItem(key);
    }

    
    // Construct data object
    const DATA = {
        "UserCode": localStorage.getItem('User'),
        "Data": INFO,
        "Time": new Date()
    };

    // Send data to server
    POSTPACKAGE(MONITORINGPOST, 'no-cors', DATA, (data) => {
       
    });
};
