const { default: axios } = require("axios");

async function GetAllCargoes({ id }) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://apiportal.richy.com.vn:6969/api/Logistic/GetShipmentInfoByDriver?DriverCode=' + id + '&FromDate=09-27-2023&ToDate=09-27-2023',
        headers: {
            'Authorization': 'Basic UlBBZG1pbjpINUFMWGFmd3g0OGttTVdUclBCOHZrZWg='
        }
    };

    return await axios.request(config)
        .then((response) => {
            const result = JSON.parse(JSON.stringify(response.data));
            if (result.IsOK == true) {
                console.log(1);
                return result.Data;
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export default GetAllCargoes;