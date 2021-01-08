import React,{useRef,useEffect} from 'react'
import Fb from './4button'
import noUiSlider from 'nouislider'
import wNumb from 'wnumb'
import M from 'materialize-css'
export default function (){
    const slider=useRef();
    const time=useRef();
    useEffect(()=>{
       M.Timepicker.init(time.current,{
           showClearBtn:true,
       })
    },[time])
    useEffect(()=>{
          noUiSlider.create(slider.current,{
            start: [20, 80],
            connect: true,
            step: 1,
            orientation: 'horizontal', 
            range: {
              'min': 0,
              'max': 100,
            },
            format: wNumb({
                decimals: 0
              })
            })
    },[slider])
    const datepicker=useRef();
    useEffect(()=>{
       M.Datepicker.init(datepicker.current,{
         showClearBtn:true,
       })
    },[datepicker])

 return(
     <div class='container'>
         <h3 className='center-align'>Fancy Form & Input</h3>
          <Fb></Fb>
      <div className='row'>
  <div class="switch">
    <label>
      Disable
      <input type="checkbox"/>
      <span class="lever"></span>
      Enable
    </label>
  </div>
  <div class="switch">
    <label>
      Disable
      <input disabled type="checkbox"/>
      <span class="lever"></span>
      Enable
    </label>
  </div>
  </div>    
  <div className='row'>
  <form action="#">
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file" multiple/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Upload one or more files"/>
      </div>
    </div>
  </form>
  </div>
  <div className='row'>
  <form action="#">
    <p class="range-field">
      <input type="range" id="test5" min="0" max="100" ref={slider}/>
    </p>
  </form>
  </div>
  <div className='form'>
  <label>Choose a Date</label>
  <input type="text" class="datepicker" ref={datepicker} />
  </div>
  <div className='row'> 
  <label>Choose a Time</label>
  <input type="text" class="timepicker" ref={time}></input>
  </div>
  <div className='row'>
        <div class="input-field ">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
        </div>
  </div>
  <div className='row'>
    
<a class="waves-effect waves-light btn">Submit</a>
  </div>
     </div>
 )
}