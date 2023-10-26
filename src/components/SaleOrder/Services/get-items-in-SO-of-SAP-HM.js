const { default: axios } = require("axios");

async function getItemsInSOofSAP_HM({ sapCode, dataType, docEntry }) {
    console.log(id);
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://hrm.richy.com.vn:5757/api/RichyPortal/SAPData/Gets?' + 'SapCode=' + sapCode + '&DataType=' + dataType + '&DocEntry=' + docEntry,
        headers: {
            'Authorization': 'Basic UlBBZG1pbjpINUFMWGFmd3g0OGttTVdUclBCOHZrZWg='
        }
    };

    return await axios.request(config)
        .then((response) => {
            const result = JSON.parse(JSON.stringify(response.data));
            if (result.isOK == true) {
                console.log(1);
                return result.data[0];
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export default getItemsInSOofSAP_HM;