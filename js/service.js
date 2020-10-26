class Service {
    constructor() {
        this.host = 'http://127.0.0.1:8000';
        this.resource = 'resource';
    }
    get = (key, type) => {
        return new Promise((resolve, reject) => {
            fetch(`${this.host}/${this.resource}?key=${key}&type=${type}`, { 
                method: 'get'
            })
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject({'error' :`Error on search service ${error}`}))
        });
    }
}

export default Service;