import React,{useRef,useEffect} from 'react'
import M from 'materialize-css'
import FButton from './4button'
export default function Collection(){
    const drop=useRef();
    useEffect(()=>{
     M.Dropdown.init(drop.current,{
        hover:true,
        coverTrigger:false,
        constrainWidth:false,
     });
    },[drop])
    return(
        <div class='container'>
         <h3 class='center-align'>Collections & Badges</h3>
         <FButton/>
         <ul class="collection">
      <li class="collection-item" style={{fontSize:'20px'}}>First Item</li>
      <li class="collection-item" style={{fontSize:'20px'}}>Second Item</li>
      <li class="collection-item" style={{fontSize:'20px'}}>Third Item</li>
      <li class="collection-item" style={{fontSize:'20px'}}>Fourth Item</li>
    </ul>
    <br></br>
    <ul class="collection">
      <li class="collection-item teal-text" style={{fontSize:'20px'}}>First Item</li>
      <li class="collection-item teal-text" style={{fontSize:'20px'}}>Second Item</li>
      <li class="collection-item teal-text" style={{fontSize:'20px'}}>Third Item</li>
      <li class="collection-item teal-text" style={{fontSize:'20px'}}>Fourth Item</li>
      <li class='collection-item teal-text' style={{fontSize:'20px'}}><span class='badge'>44</span>Fifth Item</li>
      <li class='collection-item teal-text' style={{fontSize:'20px'}}><span class='new badge'>3</span>Six Item</li>
    </ul>
    <br></br>
    <ul class="collection with-header">
        <li class="collection-header"><h4>Items</h4></li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
      </ul>
      <br></br>
      <ul class="collection with-header">
        <li class="collection-header"><h4>Items</h4></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">clear</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">clear</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">clear</i></a></div></li>
        <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">clear</i></a></div></li>
      </ul>
      <br></br>
      <ul className="collection">
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">John doe</span>
                    <p>jdoe@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">Steve Smith</span>
                    <p>steve@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">Karen Johnson</span>
                    <p>karen@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle blue">contacts</i>
                    <span className="title">Mary Williams</span>
                    <p>mary@gmail.com <br></br>555-555-5555</p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </ul>
            <br></br>
            <a class='dropdown-trigger btn text-white center-align' href='#' data-target='dropdown1' ref={drop} style={{width:'200px'}} >Dropdown<i className="material-icons right">arrow_drop_down</i></a>
           <ul id='dropdown1' class='dropdown-content'>
           <li><a href="#!">one</a></li>
           <li><a href="#!">two</a></li>
          <li><a href="#!">three</a></li>
          <li><a href="#!">four</a></li>
 

  </ul>

        </div>
    )
}