import axios from 'axios'
import { showLoader, hideLoader } from '../store/loader/actions';
import { store } from '../store/index'
import { toast } from 'react-toastify'
import i18n from '../i18n'

var baseURL = 'https://mbank.imowww.uz';

const axiosClient = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

const axiosFile = axios.create({
    baseURL: baseURL,
    withCredentials: false,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        "withCredentials": true,
    },
});

const axiosFileDownload = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "withCredentials": true,
    },
});

export async function get(url, payload = {}, settings = {}) {
    var params = "";
    if (Object.entries(payload).length > 0) {
        params = getPath(payload);
    }

    if (settings.loader) store.dispatch(showLoader());

    const data = await axiosClient.get(
        url + params,
        {
            headers: {
                Authorization: settings.guest ? '' : `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
        .catch(
            error => {
                if (settings.loader) store.dispatch(hideLoader());
                httpStatusChecker(error)
                return error.response
            }
        )
    store.dispatch(hideLoader());

    return data
}

export async function post(url, payload = {}, settings = {}) {
    if (settings.loader) store.dispatch(showLoader());

    const data = await axiosClient.post(
        url,
        payload,
        {
            headers: {
                Authorization: settings.guest ? '' : `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
        .catch(
            error => {
                if (settings.loader) store.dispatch(hideLoader());
                httpStatusChecker(error)
                return error.response
            }
        )
    store.dispatch(hideLoader());
    if (data.status === 200) {
        toast.success(data.data.message)
    }

    return data
}

function httpStatusChecker(error) {
    toast.dismiss();

    if (error?.response?.status === 400) {
        toast.error(error.response.data.message)
        return;
    }
    if (error?.response?.status === 403) {
        toast.error(error.response.data.message)
        return;
    }
    if (error?.response?.status === 401) {
        // if (process.env.NODE_ENV === 'production') {
        //     window.location.href = "https://cabinet.mison.uz/auth/login";
        // } else {
        //     window.location.href = "http://localhost:3007/auth/login";
        // }

        toast.error(i18n.t('Неправильный логин или пароль'))
        return;
    }
    if (error?.response?.status === 404) {
        toast.error(i18n.t('not_found'))
        return;
    }
    if (error?.response?.status === 415) {
        toast.error(i18n.t('error'))
        return;
    }
    if (error?.response?.status === 500) {
        var message = ""
        if (error.response.data.file) {
            message += error.response.data.file
        }
        if (error.response.data.line) {
            message += error.response.data.line
        }
        if (error.response.data.message) {
            message += error.response.data.message
        }
        toast.error(message)
        return;
    }
    if (!error.status) { // если нету интернета то выходит эта ошибка
        return
    }
}

function getPath(payload, url) {
    let iterations = Object.entries(payload).length;
    var pathArr = "?";
    if (url)
        url.includes("?") ? pathArr = '&' : pathArr = '?'

    for (let key in payload) {
        if (!--iterations) {
            pathArr += key + "=" + payload[key];
        } else {
            pathArr += key + "=" + payload[key] + "&";
        }
    }
    return pathArr;
}

export function httpOk(response) {
    if (response?.status < 400) {
        return true
    } else {
        return false
    }
}