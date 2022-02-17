//import fetch from "node-fetch";
//globalThis.fetch = fetch;


// fetch(URL)
// .then(data=>{return data.json()})
// .then(res=>{console.log(res)})

//import axios from 'axios';
//const axios = require('axios')
const URL='https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';
let myArr=[];

axios
  .get(URL)
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    
    myArr =res.data.split('\n');
    intify(myArr);

   // myArr.push(res.data.split('\n'));
  })
  .catch(error => {
    console.error(error)
  })

let intify=(arr)=>{
    for(let i =0;i<arr.length;i++){
        arr[i]= parseInt(arr[i]);
    }    
    arr.sort((a,b)=>(a-b));
    let one=arr.filter(num=>num===1);
    let two=arr.filter(num=>num===2);
    let three=arr.filter(num=>num===3);
    let four=arr.filter(num=>num===4);
    let five=arr.filter(num=>num===5);
    let six=arr.filter(num=>num===6);
    let seven=arr.filter(num=>num===7);
    let eight=arr.filter(num=>num===8);
    let nine=arr.filter(num=>num===9);
    let ten=arr.filter(num=>num===10);
    chartIt(one, two,three,four, five, six, seven,eight);
}


let chartIt=(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8)=>{
    const ctx = document.getElementById('histogram').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          datasets: [{
            label: 'Number of Random Numbers from random.org',
            data: [arr1.length, arr2.length, arr3.length, arr4.length, arr5.length, arr6.length, arr7.length, arr8.length],
            backgroundColor: 'lightgreen',
            fontColor: "white",
            // borderWidth: 1,
            // borderColor: "orange",
          }]
        },
        options: {
          scales: {
            xAxes: [{
              display: true,
              barPercentage: 1,
              ticks: {
                max: 8,
                fontColor: "white",
              }
            }, {
              display: false,
              ticks: {
                autoSkip: false,
                max: 8,
                fontColor: "white",
              }
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                fontColor: "white",
                
              }
              
            }],
            layout: {
                padding:150,
                fontColor: "white",
            }
          }
        }
      });
}
