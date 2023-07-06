//정부 데이터 포털 대구 의료기기 판매
function fetchdatagokr(){
let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=shXGlOstQIWQOOfPljMPg6P3VUTQ5J24ARIyi6xDOJVfG8EwoL1GT52w3SkPDaqPWaodvM%2BbD8YG0SgKMyVFgw%3D%3D&currentPage=1&perPage=10&SN=1';
let request = fetch(url)
    .then(result => {
        result.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(erroMeg => {
        console.log(erroMeg);
    });
}

//자동차 정보 상세
function fetchCarInforDetail(){
    let url = 'http://127.0.0.1:8080/selectDetail/CI002';
    let request = fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch(erroMeg => {
            console.log(erroMeg);
        });
    }

    //자동차 정보 삭제
function fetchCarInforupdate(){
    // 192.168.0.52:8080/update
    // {
    //     "CAR_NAME": "코나",
    //     "CAR_INFOR_ID": "CAR-02"
    // }
    let url = 'http://127.0.0.1:8080/update';
    let option = {
        method : "PUT",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({
        "CAR_NAME": "그랜져",
        "CAR_INFOR_ID": "CI005"
    })
    }
    let request = fetch(url, option)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch(erroMeg => {
            console.log(erroMeg);
        });
    }
    //자동차 정보 변경?
    function fetchCarInforselectAll(){
        let url = 'http://127.0.0.1:8080/selectAll/CI002';

        let request = fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                let outHtml = ``;
                for (let car_hashmap of data) {   
                  console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
                  outHtml = `${outHtml}<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
                }
                outHtml += ``; 
                let carTableBody = document.querySelector('#carTableBody'); 
                carTableBody.innerHTML = outHtml;
            })
            .catch(erroMeg => {
                console.log(erroMeg);
            });
        }