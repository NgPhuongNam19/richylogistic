const { default: axios } = require("axios");

async function postTimeStart({deliveryNumber}) {
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://apiportal.richy.com.vn:6969/api/Logistic/StartDelivering?deliveryNumber=' + deliveryNumber,
        headers: { 
            'Authorization': 'Basic UlBBZG1pbjpINUFMWGFmd3g0OGttTVdUclBCOHZrZWg='
          }
    };

    return await axios.request(config)
        .then((response) => {
            // const result = JSON.parse(JSON.stringify(response.data));
            // if (result.isOK == true) {
            //     console.log(1);
            // }
            return true;
        })
        .catch((error) => {
            console.log('Lỗi khi update thời gian bắt đầu' + error);
            return false;
        });
};

export default postTimeStart;