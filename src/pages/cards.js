import React,{useRef,useEffect} from 'react'
import zurag from './download.jpeg'
import M from 'materialize-css'
import zz from './z.jpg'
import st from './a.jpg'
export default function Cards(){
   const tab=useRef();
   useEffect(()=>{
     M.Tabs.init(tab.current,{

     })
   },[tab])
    return(
        <div class='container'>
     <div class="row">
     <div class='col s12 m6 l6'>   
    <div class="col s12 m12 l12">
      <div class="card ">
        <div class="card-content black-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        </div>
        <div >
        <div class="card red ">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        </div>
      </div>
      </div>    
    </div>
    <div class="row">
    <div class="col s12 m6">
      <div class="card ">
        <div class="card-content black-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">Read more</a>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  </div>
   </div>


      <div class='row'>
      <div class='col s12 m6 l6'>
      <div class='card '> 
       <div class='card-image'>
           <img src={zurag}/>
           <span class='card-title'>Card Image</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">Read more</a>
          <a href="#">Read more</a>
        </div>
       </div>
      </div>
      <div class='col s12 m6 l6'>
      <div class='card '> 
       <div class='card-image'>
           <img src={zurag}/>
           <span class='card-title'>Image & Button  </span>
           <a class="btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
       </div>
      </div>
     </div>

     <div class='row '>
       <div class='col s12 m6 l6 row'>
         <div class='card col s12 m12 l12'>
              <div class='card-image col s6 m6 l6'>
                <img src={zz}/>
              </div>
              <div class='card-content col s6 m6 l6'>
                <h5 class='center-align'>Horizontal</h5>
              <p>I am a very simple card. I am good at containing small bits of information.</p>
         </div>
         </div>
       </ div>
       <div class='col s12 l6 m6 row'>
          <div class='card'>
          <div class="card-image waves-effect waves-block waves-light">
           <img class="activator" src={zz}/>
             </div>
             <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>  
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
          </div>  
      </div>
     </div>


   <div class='row'>
    <div class='col s12 m6 l6'>
    <div class="card">
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width" ref={tab} >
        <li class="tab"><a href="#test4">Test 1</a></li>
        <li class="tab"><a class="active" href="#test5">Test 2</a></li>
        <li class="tab"><a href="#test6">Test 3</a></li>
      </ul>
    </div>
    <div class="card-content grey lighten-4">
      <div id="test4">Test 1</div>
      <div id="test5">Test 2</div>
      <div id="test6">Test 3</div>
    </div>
   </div>
    </div>
    <div class='col s12 m6 l6'>
    <div class="card">
    <div class="card-content orange white-text">
      <h3 >Tabbed card</h3>
      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively 
      am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
      am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively..</p>
    </div>
    <div class="card-tabs">
      <ul class="tabs tabs-fixed-width white" ref={tab}>
        <li class="tab"><a href="#test41">Test 1</a></li>
        <li class="tab"><a class="active" href="#test41">Test 2</a></li>
        <li class="tab"><a href="#test41">Test 3</a></li>
      </ul>
    </div>
    <div class="card-content black white-text en-4">
      <div id="test41">This is content for tab 1</div>
      <div id="test41">This is content for tab  2</div>
      <div id="test41">This is content for tab  3</div>
    </div>
  </div>
    </div>
   </div>

 <div class='row'>
   <div class='col s4 m4 l4'>
   <div class="card small">
        <div class="card-image">
          <img src={st}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
   </div>
   <div class='col s4 m4 l4'>
   <div class="card medium">
        <div class="card-image">
          <img src={st}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
     
   </div>
   <div class='col s4 m4 l4'>
   <div class="card large ">
        <div class="card-image">
          <img src={st}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
   </div>
 </div>
 <div class='row'>
   <div class='col s6 m6 l3 '>
   <div class="card-panel blue ">
        <span class="black-text ">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
   </div>
   <div class='col s6 m6 l3'>
   <div class="card-panel pink">
        <span class="white-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
   </div>
   <div class='col s6 m6 l3'>
   <div class="card-panel teal">
        <span class="black-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
   </div>
   <div class='col s6 m6 l3'>
   <div class="card-panel yellow">
        <span class="black-text">I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span>
      </div>
   </div>
 </div>
    
        </div>
    )
}