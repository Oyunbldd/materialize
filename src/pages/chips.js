import React,{useRef,useEffect} from 'react'
import FB from './4button'
import z from './a.jpeg'
import M, { Autocomplete } from 'materialize-css'
export default function Chips(){
    const chips=useRef();
    useEffect(()=>{
       M.Chips.init(chips.current,{
           autocompleteOptions:{
               data:{
                   'Apple':null,
                   'Microsoft':null,
               }
           }
        
       })
    },[chips])
    return(
        <div className='container'>
            <div className='center-align'>
                <h3>Chips & Pagination</h3>
            </div>
          <FB/>
          <div className='row'>
         <div class="chip">
         Web development
           </div>
           <div class="chip">
         Web design
           </div>
           <div class="chip">
          Programming
           </div>
         </div>

         <div className='row'>
         <div class="chip">
         <img src={z} alt="Contact Person"/>
         Jane Doe
           </div>
           <div class="chip">
         <img src={z} alt="Contact Person"/>
         Jane Doe
           </div>
           <div class="chip">
         <img src={z} alt="Contact Person"/>
         Jane Doe
           </div>
         </div>
        <div className='row'>
        <div class="chip">
    JS
    <i class="close material-icons">close</i>
  </div>
  <div class="chip">
    HTML
    <i class="close material-icons">close</i>
  </div>
  <div class="chip">
    CSS
    <i class="close material-icons">close</i>
  </div>
        </div>
        <div className='row'> 
  <div class="chips chips-autocomplete" ref={chips}></div>
        </div>
       <div className='row'>
           <ul class="pagination">
    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
    <li class="active"><a href="#!">1</a></li>
    <li class="waves-effect"><a href="#!">2</a></li>
    <li class="waves-effect"><a href="#!">3</a></li>
    <li class="waves-effect"><a href="#!">4</a></li>
    <li class="waves-effect"><a href="#!">5</a></li>
    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
  </ul>
           </div> 
        </div>
    )
}