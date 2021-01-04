import React,{useRef,useEffect}  from 'react'
import M from 'materialize-css'
import FButton from './4button'
export default function AButton(){
      const btn= useRef();
      useEffect(() => {
      M.FloatingActionButton.init(btn.current,{ 
       toolbarEnabled:true,
   })      
      }, [btn])
    
    return(
        <div class='container'>
          
          <h3 class='center-align'>Floating & Fixed Action Buttons</h3>
          <FButton/>
          <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
          <a class="btn-floating btn-small waves-effect waves-light blue"><i class="material-icons">create</i></a>
          <a class="btn-floating btn-small pulse waves-light green"><i class="material-icons">file_upload</i></a>
           
          <div class="fixed-action-btn toolbar" ref={btn}>
  <a class="btn-floating btn-large red">
    <i class="large material-icons">mode_edit</i>
  </a>
  <ul>
    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
    <li><a ><i class="material-icons">format_quote</i></a></li>
    <li><a ><i class="material-icons">publish</i></a></li>
    <li><a ><i class="material-icons">attach_file</i></a></li>
  </ul>
</div>

        </div>
    )
}