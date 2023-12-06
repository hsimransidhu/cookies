 'use strict';
 
function onEvent(event, selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(event, callback);
        return element;
    } else {
        console.error('Element not found for selector:', selector);
        return null;
    }
}

function setCookie(name, value, seconds) {
    const expires = new Date();
    expires.setTime(expires.getTime() + seconds * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}
 
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
       "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
     ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function getBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) {
        return 'Chrome';
    } else if (userAgent.includes('Firefox')) {
        return 'Firefox';
    } else if (userAgent.includes('Safari')) {
        return 'Safari';
    } else if (userAgent.includes('Edge')) {
        return 'Edge';
    } else {
        return 'Unknown Browser';
    }
}

function getOS() {
    const platform = navigator.platform;
    if (platform.includes('Win')) {
        return 'Windows';
    } else if (platform.includes('Mac')) {
        return 'MacOS';
    } else if (platform.includes('Linux')) {
        return 'Linux';
    } else {
        return 'Unknown OS';
    }
}
 
function getCookies(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}

// Add the select and selectAll functions
function select(selector) {
    return document.querySelector(selector);
}

function selectAll(selector) {
    return document.querySelectorAll(selector);
}

// Export the select and selectAll functions
export { onEvent, setCookie, getCookie, getBrowser, getCookies, getOS, select, selectAll };

 
