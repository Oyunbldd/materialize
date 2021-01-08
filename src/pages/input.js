import React,{useRef,useEffect} from 'react'
import FB from './4button'
import M from 'materialize-css'
export default function (){
     const sel=useRef();
     useEffect(()=>{
       M.FormSelect.init(sel.current,{
       })
     },[sel ])
     const select=useRef();
     useEffect(()=>{
       M.FormSelect.init(select.current,{
       })
     },[select])
    return(
        <div class='container'>
            <h2 class='center-align'>Basic Form & Input</h2>
           <FB/>
           <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12 l12">
          <input placeholder="Name" id="first_name" type="text" class="validate"/>     
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" placeholder="john@gmail.com" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class='row'>
          <div class='input-field col s12 l12'>
          <label for='message'>Message</label>
          <br></br>
              <input id='message' placeholder="Message" class='validate'/>
          </div>
      </div>
      <div class="row">
        <div class="col s12">
          Numbers of user:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate"/>
            <label for="email_inline">#</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text aaaa</span>
          </div>
        </div>
      </div>
    </form>
  </div>
  
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" placeholder="Phone Number" type="tel" class="validate"/>
        </div>
      </div>
    </form>
  </div>
  <div class="row">
      <form class="col s12 l12">
        <div class="input-field inline col s12">
            <label>Email</label>
            <br></br>
            <input placeholder="Email"/>
        </div>
      </form>
  </div>

  <div class='row'>
  <div class="input-field col s12">
    <select multiple ref={sel}>
      <option value="" disabled selected >Select Option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
    <label>Select list</label>
     </div>
  </div>
  <div class='row'>
  <div class="input-field col s12">
    <select ref={select}>
      <optgroup label="team 1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </optgroup>
      <optgroup label="team 2">
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
      </optgroup>
    </select>
    <label>Optgroups</label>
  </div>
  </div>
  
  <div class='row'>
      
      <form class="col s12 l12">
      <form action="#">
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>Male</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Female</span> 
      </label>
    </p>
  </form>
      </form>
  </div>
<div class="row">
  <form action="#">
    <p>
      <label>
        <input type="checkbox" />
        <span>HTML</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" />
        <span>CSS</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" class="filled-in" checked="checked" />
        <span>JS</span>
      </label>
    </p>
    <p>
      <label>
        <input id="indeterminate-checkbox" type="checkbox" disabled='disabled' />
        <span>PHP</span>
      </label>
    </p>
  </form>
</div>

        </div>
    )
}