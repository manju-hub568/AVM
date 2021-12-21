import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css';
import Aurum from './Aurum.png';
import axios from 'axios';

function PredictForm() {

    const [data, setData] = useState({
        Carpet_Area:200,
        BHK:2,
        Covered_Parking:0,
        Open_Parking:1,
        Project_name:'sun',
        Balcony:2,
        Location:'pimpri'
    });

    let name, value;
    const setValue = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;
        setData({...data, [name]:value});
    }

    const Predict = async (e) => {
        e.preventDefault();
        // var formData = new FormData();

        // formData.append('Carpet_Area', data.Carpet_Area);
        // formData.append('BHK', data.BHK);
        // formData.append('Covered_Parking', data.Covered_Parking);
        // formData.append('Open_Parking', data.Open_Parking);
        // formData.append('Project_name', data.Project_name);
        // formData.append('Balcony', data.Balcony);
        // formData.append('Location', data.Location);

        // const config = {     
        //     headers: { 'content-type': 'multipart/form-data' }
        // }
        // const d = await fetch('http://3.110.225.189:5000/predict', {
        //     data
        // });
        // console.log(d);
    
        // const res = await axios.post('http://3.110.225.189:5000/predict', {data});
        // console.log(res);
        // console.log(data);

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Access-Control-Allow-Origin", "*");
// myHeaders.append('Referrer-Policy','origin');

//         var requestOptions = {
//             method: 'POST',
//             headers: myHeaders,
//           mode:'no-cors',
//             body: data,
//             redirect: 'follow'
//           };
          
//           fetch("http://3.110.225.189:5000/predict", requestOptions)
//             .then(response => response.text())
//             .then(result => console.log(result))
//             .catch(error => console.log('error', error));
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append('Referrer-Policy','origin');

var raw = JSON.stringify({
  "Carpet_Area": data.Carpet_Area,
  "BHK": data.BHK,
  "Covered_Parking": data.Covered_Parking,
  "Open_Parking":data.Open_Parking,
  "Project_name":data.Project_name,
  "Balcony":data.Balcony,
  "Location":data.Location
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  mode:'no-cors',
  body: raw,
  redirect: 'follow'
};

const dt = await fetch("http://3.108.228.235:5000/predict", requestOptions);
console.log(dt);

}

    return (
        <>
<div className = "border">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
		<img src = {Aurum} width = "200px" height = "50px" />
	</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div className='form-inpts' style = {{'height':'500px'}}>
        <div className = 'form2'>
            <div className = "inpt">   
                <input type = "text" className='form-control h' name = "Carpet_Area" placeholder='Carpet Area'
                    onChange = {setValue}
                    value = {data.Carpet_Area}
                />
                <input type = "text" className='form-control h' name = "BHK" placeholder='BHK'
                    onChange = {setValue}
                    value = {data.BHK}
                />
            </div>
            <div className = "inpt">   
                <input type = "text" className='form-control h' name = "Covered_Parking" placeholder='Covered Parking'
                    onChange = {setValue}
                    value = {data.Covered_Parking}
                />
                <input type = "text" className='form-control h' name = "Open_Parking" placeholder='Open Parking'
                    onChange = {setValue}
                    value = {data.Open_Parking}
                />
            </div>
            <div className = "inpt">    
                <input type = "text" className='form-control h' name = "Project_name" placeholder='Project Name'
                    onChange = {setValue}
                    value = {data.Project_name}
                />
                <input type = "text" className='form-control h' name = "Balcony" placeholder='Balcony'
                    onChange = {setValue}
                    value = {data.Balcony}
                />
            </div>
            <div className = "inpt">   
                <input type = "text" className='form-control h k' name = "Location"  placeholder='Location'
                    onChange = {setValue}
                    value = {data.Location}
                />
            </div>
            <div className = "inpt">    
                <button className = "btn btn-primary pred" onClick = {Predict}>Predict</button>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default PredictForm;