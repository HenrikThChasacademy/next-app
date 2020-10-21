var axios = require('axios');

class todoService {
    getAll = async () => {
        var config = {
            method: 'get',
            url: 'https://nameless-sea-91978.herokuapp.com/api/todoItem',
            headers: { }
        };
        try {
            let response = await axios(config);
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    getAllSync () {
        var config = {
            method: 'get',
            url: 'https://nameless-sea-91978.herokuapp.com/api/todoItem',
            headers: { }
        };
        axios(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

}

export default new todoService();