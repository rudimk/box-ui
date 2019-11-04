import { stringify } from 'query-string'
import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE,
} from 'react-admin'


const apiUrl = `http://localhost:8888`

export default (type, resource, params) => {
	let url = ''
	const options = {
		headers: new Headers({
			'Accept': 'application/json',
			'Access-Control-Allow-Origin': '*',
		}),
	}

	switch(type) {
		case GET_LIST: {
			url = `${apiUrl}/${resource}`
			break
		}

		case GET_ONE: {
			url = `${apiUrl}/${resource}/${params.id}`
			break
		}

		case CREATE: {
			url = `${apiUrl}/${resource}`
			options.method = 'POST'
			options.body = JSON.stringify(params.data)
			break
		}

		case UPDATE: {
			url = `${apiUrl}/${resource}/${params.id}`
			options.method = 'PUT'
			options.body = JSON.stringify(params.data)
			break
		}

		case DELETE: {
			url = `${apiUrl}/${resource}/${params.id}`
			options.method = 'DELETE'
			break
		}

		default: {
            throw new Error(`Unsupported Data Provider request type ${type}`)
		}
	}

	return fetch(url, options)
        .then(res => {return res.json()})
        .then(response => {
        	console.log(response)
            switch(type) {
            	case GET_LIST: 
            		return {
            			data: response.data,
            			total: response.total,
            		}
            	case GET_ONE:
            		return {
            			data: response.data,
            			total: 1,
            		}
            	case CREATE:
            		return {
            			data: {...params.data, id: response.data.id},
            		}
            	case UPDATE:
            		return {
            			data: {...params.data, id: response.data.id},
            		}
            	case DELETE:
            		return {
            			data: null,
            		}
            }
        })
}

