
const click = document.querySelector(".btn").addEventListener("click", student)


function student(){
    fetch('http://localhost:3000/json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log('ល.រ:', data[0]['ល.រ']);
    })  
    .catch(error => {
        console.error('Error fetching student data:', error);
    });
}

