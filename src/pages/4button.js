import React,{useEffect,useRef}  from 'react'
import M from 'materialize-css'
export default function FButton(){
    const drop=useRef();
    useEffect(()=>{
     M.Dropdown.init(drop.current,{
        hover:true,
        coverTrigger:false,
        constrainWidth:false,
     });
    },[drop])
    return(
        <div class='container row '>
       
          
<a class="waves-effect waves-light btn btn-large  blue col  col-content s6 l3" >CSS1</a>

<a class="waves-effect waves-light btn btn-large green   col s6 l3" >CSS2</a>

<a class="waves-effect waves-light btn btn-large  black-text yellow  col s6 l3">JS1</a>

<a class='dropdown-trigger btn btn-large  red text-white  col s6 l3'href='#' data-target='dropdown1' ref={drop} >Drop Me!</a>

  <ul id='dropdown1' class='dropdown-content'>
  <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!">four</a></li>
 

  </ul>
{/* <a class="waves-effect waves-light btn btn-large  black-text red" style={{marginLeft:'90px',height:'60px',width:'150px'}}>JS2</a> */}

        </div>
    )
}