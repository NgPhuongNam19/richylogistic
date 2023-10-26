const { default: axios } = require("axios");

async function getDetailInforOfSO({docEntry}) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://ttpp.richy.com.vn:9797/api/DMSLog/GetDataDMS?DocEntry=' + docEntry,
        headers: {
            'Authorization': 'Basic UlBBZG1pbjpINUFMWGFmd3g0OGttTVdUclBCOHZrZWg='
        }
    };

    return await axios.request(config)
        .then((response) => {
            const result = JSON.parse(JSON.stringify(response.data));
            // console.log(result);
            if (result.isOK == true) {
                console.log(1);
                console.log(result.data[0]);
                return result.data[0].item;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

export default getDetailInforOfSO;