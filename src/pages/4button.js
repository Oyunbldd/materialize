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
        <div class='container center-align'>
<a class="waves-effect waves-light btn btn-large  blue" style={{marginLeft:'0px',height:'60px',width:'150px'}}>CSS1</a>

<a class="waves-effect waves-light btn btn-large green "style={{marginLeft:'90px',height:'60px',width:'150px'}} >CSS2</a>

<a class="waves-effect waves-light btn btn-large  black-text yellow" style={{marginLeft:'90px',height:'60px',width:'150px'}}>JS1</a>

<a class='dropdown-trigger btn red text-white center-align' href='#' data-target='dropdown1' ref={drop} style={{marginLeft:'90px',width:'150px',height:'60px'}} >Drop Me!</a>

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