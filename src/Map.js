import React, {useContext,useEffect,useState} from 'react';
import { usercontext } from './App';
import {useNavigate} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Aurum from './Aurum.png';
import './style.css';
import pin from './place.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map (props) {
	const [data, setData] = useState([]);
	const [lt, setLat] = useState('');
	const [lg, setLng] = useState('');
	
	const [atm, setAtm] = useState('');
	const [atm2, setAtm2] = useState('');

	const [school, setSchool] = useState('');
	const [school2, setSchool2] = useState('');

	const [rest, setRest] = useState('');
	const [rest2, setRest2] = useState('');

	const [shop, setShop] = useState('');
	const [shop2, setShop2] = useState('');

	const [hosp, setHosp] = useState('');
	const [hosp2, setHosp2] = useState('');

	const [gas, setGas] = useState('');
	const [gas2, setGas2] = useState('');

	const [rt, setAtmrate] = useState();
	const [rt2, setAtmrate2] = useState();

	const history = useNavigate();
	const {state, dispatch} = useContext(usercontext);

	useEffect(() => {
		fetch('http://localhost:8000/ams')
		.then(response => response.json())
		.then(json => setData(json))
	},[]);
	const [sdata, setSdata] = useState('');
	const [lat, setLt] = useState('');
	const [lng, setLg] = useState('');
	const [angle, setAngle] = useState({
	  center: {
		  lat: lat || 18.4690,
		  lng: lng || 73.8641
		},
		zoom: 10
  });
  
// d
  
	const [dat2, setDat2] = useState([]);
	useEffect(() => {
	  fetch('http://localhost:8000/data')
	  .then(response => response.json())
	  .then(json => setDat2(json))
  }, []);
  

const get = () => {
	history('/predictForm');
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
			{/* <h3>{props.val}</h3>
			<button onClick = {get}>Click</button> */}
<div className='sub-brd'>
			{data.filter((val) => {
                if(props.val === '') {
                   return ''
                } else if (val.Location.toLowerCase().includes(props.val.toLowerCase())) {
                   return val
                }
            }).map((val,id) => {
				// console.log(val);
				if(
					// val.atm_rating !== atmrate
val.LAT !== lt && val.LNG !== lg && val.ATM_name !== atm &&
val.School_name !== school && val.Restaurant_name !== rest && val.Shopping_name !== shop && val.hosp_name !== hosp && val.atm_rating !== rt
) {
					setLat(val.LAT);
					setLng(val.LNG);

					const st=val.ATM_name.replace("[","");
					const ft=st.replace("]","");
					const myname=ft.split(",");

					setAtm(myname.slice(0,1));
					setAtm2(myname.slice(1,2));

					const atr=val.atm_rating.replace("[","");
					const atrr=atr.replace("]","");
					const mynamr=atrr.split(",");

const repatr=val.atm_rating.replace("[","");
const gy = repatr.replace("]","");
const rep=gy.split(",");
const arraye = []
for(var i=1;i<=2;i++){
	try{
		const ad = rep[i].replace("[","")
		const ap = ad.replace("]","")
		arraye.push(ap);
	}
	catch{
		const af = rep[i].replace("[","")
		arraye.push(af);
	
	}
	// console.log(arraye)

}
					setAtmrate(arraye[0]);
					setAtmrate2(arraye[1]);

					const sch=val.School_name.replace("[","");
					const sch2=sch.replace("]","");
					const mysch=sch2.split(",");

					setSchool(mysch.slice(0,1));
					setSchool2(mysch.slice(1,2));

					const rest=val.Restaurant_name.replace("[","");
					const rest2=rest.replace("]","");
					const myrest=rest2.split(",");

					setRest(myrest.slice(0,1));
					setRest2(myrest.slice(1,2));

					const shp=val.Shopping_mall_name.replace("[","");
					const shp2=shp.replace("]","");
					const myshp=shp2.split(",");

					setShop(myshp.slice(0,1));
					setShop2(myshp.slice(1,2));

					const hsp=val.hosp_name.replace("[","");
					const hsp2=hsp.replace("]","");
					const myhsp=hsp2.split(",");

					setHosp(myhsp.slice(0,1));
					setHosp2(myhsp.slice(1,2));

					const gas=val.Gas_station_name.replace("[","");
					const gas2=gas.replace("]","");
					const mygas=gas2.split(",");

					setGas(mygas.slice(0,1));
					setGas2(mygas.slice(1,2));
				}
})}
<div style = {{width: '600px', height: '530px'}}>
<div className='place-name'>
	<label className = 'display-6' style = {{'font-size':'32px'}}>Location Name</label>
	<div className = 'place-value'>{props.val}</div>
</div>
	<label className = 'display-6' style = {{'margin-top':'3px','font-size':'32px'}}>Nearby Amnities</label>
<div className = 'amnety-name'>

<div className = 'Am-name'>ATM</div>
<div className = "subam-name">{atm}</div>
{/* {rt} */}
<div className = "subam-name2">{atm2}</div>

<div className = 'Am-name'>School</div>
<div className = "subam-name">{school}</div>
<div className = "subam-name2">{school2}</div>

<div className = 'Am-name'>Restaurant</div>
<div className = "subam-name">{rest}</div>
<div className = "subam-name2">{rest2}</div>

<div className = 'Am-name'>Shop</div>
<div className = "subam-name">{shop}</div>
<div className = "subam-name2">{shop2}</div>

<div className = 'Am-name'>Hospital</div>
<div className = "subam-name">{hosp}</div>
<div className = "subam-name2">{hosp2}</div>

<div className = 'Am-name'>Gas Station</div>
<div className = "subam-name">{gas}</div>
<div className = "subam-name2">{gas2}</div>

{/* <br/>
{rt}{rt2} */}
</div>
</div>
{/* <div className = 'box1' style = {{border: '1px solid red'}}> */}
  <div className = 'map'>
{/* <select onChange = {(e) => changehandle(e)}>
{dat2.map(val => {
    return <option value = {val.Location}>{val.Location}</option>
  })}
</select> */}
{dat2.filter((val) => {
                if(props.val === '') {
                   return ''
                } else if (val.Location.toLowerCase().includes(props.val.toLowerCase())) {
                   return val
                }
            }).map((val,id) => {
              if(val.LAT !== lat && val.LNG !== lng) {
                setLt(val.LAT);
                setLg(val.LNG);
              }
})}
<div style={{ height: '400px', width: '700px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDnMhXAnHfhsmvOLH3Q3z8wzKip_R2wPLk' }}
          defaultCenter={angle.center}
          defaultZoom={angle.zoom}
        >
          <AnyReactComponent
            lat={lat || 18.5204}
            lng={lng || 73.8641}
            text = {<img style = {{'color':'red'}} src = {pin} width = "30px" height = "30px"  />}
          />
        </GoogleMapReact>
</div>
</div>
</div>
<button className='next btn btn-primary' onClick = {get}>Next Step</button>
</div>
		</>
	)
}