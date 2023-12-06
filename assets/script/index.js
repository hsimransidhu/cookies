'use strict';

// Import necessary functions from utils.js
import { onEvent, setCookie, getCookies , getCookie, getBrowser, getOS, select, selectAll } from './utils.js';

function showFirstModal() {
    const cookiesEnabled = navigator.cookieEnabled;
    const storedCookies = getCookies('cookiesAccepted');

    if (!cookiesEnabled || storedCookies === null) {
        setTimeout(() => {
            const firstModal = select('.modal');
            if (firstModal) {
               
                firstModal.style.display = 'flex';
                                onEvent('click', '.modal .button.is-primary', () => {
                                    logAllOptions();
                                    console.log('Cookies accepted');                              
                                });
                                 
                // Disable scroll
                document.body.style.overflow = 'hidden';
            } else {
                console.error('Element not found for selector: .modal:first-of-type');
            }
        }, 2000); 
}
}

function logAllOptions() {
    const browser = getBrowser();
    const os = getOS();
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    console.log('Browser:', browser);
    console.log('Operating System:', os);
    console.log('Screen Width:', screenWidth);
    console.log('Screen Height:', screenHeight);
}

function showSecondModal() {
    // Hide the first modal
    select('.modal').style.display = 'none';

    // Delay before showing the second modal
    setTimeout(() => {
        // Display the second modal
        const secondModal = select('.modal2');
        if (secondModal) {
            // Center the second modal
            secondModal.style.display = 'flex';
             
            const options = selectAll('.switch input');
            options.forEach(option => {
                option.checked = true;
            });
        } else {
            console.error('Element not found for selector: .modal2');
        }
    }, 300);
}

// Function to hide the first modal
function hideFirstModal() {
    // Hide the first modal
    select('.modal').style.display = 'none';
    // Enable scroll
    document.body.style.overflow = 'auto';
}
 
 // Function to save preferences
function savePreferences(selectedOptions) {
    
    if (select('#os input').checked) {
        console.log('Operating System:', getOS());
    }

    if (select('#browser input').checked) {
        console.log('Browser:', getBrowser());
    }

    if (select('#width input').checked) {
        console.log('Window Width:', window.innerWidth);
    }

    if (select('#height  input').checked) {
        console.log('Window Height:', window.innerHeight);
    }
    if (selectedOptions.length ) {
       
        console.log('Cookies accepted');
    } else  {
        console.log(' some cookies rejected');
    }

    // Set cookies based on the user's preferences
    setCookie('browser', getBrowser(), 13);
    setCookie('OS', getOS(), 13);
    setCookie('screenWidth', select('#width input').checked ? 'enabled' : 'disabled', 13);
    setCookie('screenHeight', select('#height input').checked ? 'enabled' : 'disabled', 13);
    // Close the second modal after saving preferences
    select('.modal2').style.display = 'none';
    // Enable scroll
    document.body.style.overflow = 'auto';
}
 
// Event listeners
onEvent('click', '.modal .button.is-primary', hideFirstModal);
onEvent('click', '.modal2 .button.is-primary', savePreferences);
// Event listener for showing the second modal when clicking on the settings button
onEvent('click', '.modal .button.is-grey', showSecondModal);

// Initialize the application
showFirstModal();
 
 

 
