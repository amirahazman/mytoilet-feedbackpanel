import Vue from 'vue';
import axios from 'axios'

class NetworkService {

    static uri(path) {
       
        //call api from env
        let ROOT_URL = process.env.VUE_APP_API_URL
        return ROOT_URL + path
    }

    static request(endpoint, params) {

        let headers = (!NetworkService.getToken())
            ? NetworkService.headers() : NetworkService.headerWithToken()

        // console.log(headers)
        let options = Object.assign({}, {
            url: endpoint,
            headers,
        }, params)

        // console.log(options)


        return axios(endpoint, options)
            .then(NetworkService.handleResponse)
            .catch(NetworkService.handleError)
    }


    //init request with token
    static headerWithToken() {
        return Object.assign(NetworkService.headers(), {
            'Authorization': 'Bearer ' + NetworkService.getToken()
        })
    }

    static headers() {
        return {
            'Content-Type': 'application/json',
            // 'accept': 'application/json',
        }
    }

    static post(endpoint, payload, options) {
        options = Object.assign({}, options, {
            data: JSON.stringify(payload),
            method: 'POST'
        })

        return NetworkService.request(NetworkService.uri(endpoint), options)
    }

    static get(endpoint, options) {
        options = Object.assign({}, options, {
            method: 'GET', 
            // data: null
        })
        return NetworkService.request(NetworkService.uri(endpoint),options)
    }

 

    static put(endpoint, payload, options) {
        options = Object.assign({}, options, {
            data: JSON.stringify(payload),
            method: 'PUT'
        })

        return NetworkService.request(NetworkService.uri(endpoint), options)
    }

    static delete(endpoint, options) {
        options = Object.assign({}, options, {
            
            method: 'DELETE', 
        })
        return NetworkService.request(NetworkService.uri(endpoint), options)
    }

    static handleResponse(res) {
        const { status, data } = res
        
        return (status >= 200 && status <= 300) ? data : null
    }

    static handleError(error) {
        const errs = error && error.response ? error.response.data : error
        console.warn('[ERROR]', errs)
        return errs
    }

    static getToken() {
        //temp method .  need get from vuex
        // return $cookies.get("token")
        // return sessionStorage.getItem('token')
    }
}

export default NetworkService


