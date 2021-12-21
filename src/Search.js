import React, {useState,useContext,useEffect} from 'react';
import { usercontext } from './App';
import {useNavigate} from 'react-router-dom';
import Aurum from './Aurum.png';
import './style.css';

export default function Search () {
	const history = useNavigate();
	const [data, setData] = useState('');
	const [data2, setData2] = useState([]);
	const [disp, setDisp] = useState({
		'display':'block',
		'cursor':'pointer'
	});
	
	const [butn, setButn] = useState({
		'display':'block'
	})

	const {state, dispatch} = useContext(usercontext);
	const submit = () => {
		dispatch({type:'USER', payload:data});
		history('/map');
	}

	useEffect(() => {
		fetch('http://localhost:8000/data')
		.then(response => response.json())
		.then(json => setData2(json))
	},[]);
	
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
		<h1 className='display-6 head'>Lorem Ipsum Doller tempor</h1>
		<div className = 'inp'>
			<input type = "text" className = "form-control form"
			placeholder='Search Location'
			 onChange = {(e) => {
				 setData(e.target.value);
				 setButn({
					 'display':'none'
				 })
				}}
			  value = {data}
			  />
<div className = "box">
{data2.filter((val) => {
	if(data === '') {
	   return ''
	} else if (val.Location.toLowerCase().includes(data.toLowerCase())) {
	   return val
	}
}).map((val,id) => {
	return (
		<p onClick = {() => {
			setData(val.Location);
			setDisp({
				'display':'none'
			});
			setButn({
				'display':'block'
			})
		}}
			style = {disp}
		>
			{val.Location}
		</p>
	)
})}
</div>
</div>
<div className = 'bsub'>
	<button style = {butn} className = "btn btn-danger btns" onClick = {submit}>Search</button>
</div>
</div>
		</>
	)
}