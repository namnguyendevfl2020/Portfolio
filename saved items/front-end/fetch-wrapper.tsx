import { Signal } from 'lib/global/types';
import getConfig from 'next/config';

// import { userService } from 'services';

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

const headers = new Headers();
headers.append("Content-Type", "application/json");

interface Options {
    method: string;
    headers: Headers;
    body?: string;
    signal?: any;
}

async function fetchJson (url: string, options: Options) {
    try {
        const response = await fetch(url, options);
        console.log(response);
        if (response.status === 204) return null;

        const payload = await response.json();
        console.log(payload)
        if (payload.error) return Promise.reject({message: payload.error});

        return payload.data
    } catch(error: any) {
        if (error.name !== "AbortError") {
            console.log(error.stack);
            return Promise.reject({message: error.message})
        }
    }
}

function get(url: string, signal: any) {
    const requestOptions = {
        method: 'GET',
        // headers: authHeader(url),
        headers: headers,
        signal,
    };
    return fetchJson(url, requestOptions)
    // return fetch(url, requestOptions).then(handleResponse);
}

function post(url: string, body: string, signal: Signal) {
    const requestOptions = {
        method: 'POST',
        headers: headers,
        // headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        credentials: 'include',
        body: JSON.stringify(body),
        signal
    };
    return fetchJson(url, requestOptions)

    // return fetch(url, requestOptions).then(handleResponse);
}

function put(url: string, body: string, signal: Signal) {
    const requestOptions = {
        method: 'PUT',
        headers: headers,
        // headers: { 'Content-Type': 'application/json', ...authHeader(url) },
        body: JSON.stringify(body),
        signal
    };
    return fetchJson(url, requestOptions)
    // return fetch(url, requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url: string, signal: Signal) {
    const requestOptions = {
        method: 'DELETE',
        // headers: authHeader(url),
        headers: headers,
        signal
    };
    return fetchJson(url, requestOptions)
    // return fetch(url, requestOptions).then(handleResponse);
}


// helper functions

// function authHeader(url) {
//     // return auth header with jwt if user is logged in and request is to the api url
//     const user = userService.userValue;
//     const isLoggedIn = user && user.token;
//     const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
//     if (isLoggedIn && isApiUrl) {
//         return { Authorization: `Bearer ${user.token}` };
//     } else {
//         return {};
//     }
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
        
//         if (!response.ok) {
//             if ([401, 403].includes(response.status) && userService.userValue) {
//                 // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//                 userService.logout();
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }