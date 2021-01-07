import React from 'react'
import Fbutton from './4button'
export default function Grid(){
return(
    <div class="container">
     <h3 class='center-align'>Grid</h3>
     <Fbutton />
     <br></br>
     <div class='row '>
      <div   class=" col box s1">1</div>
      <div class=" col box s1">2</div>
      <div class=" col box s1">3</div>
      <div class=" col box s1">4</div>
      <div class=" col box s1">5</div>
      <div class=" col box s1">6</div>
      <div class=" col box s1">7</div>
      <div class=" col box s1">8</div>
      <div class=" col box s1">9</div>
      <div class=" col box s1">10</div>
      <div class=" col box s1">11</div>
      <div class=" col box s1">12</div>
     </div>
     <div class='row '>
         <div class="col box s4">1</div>
         <div class="col box s4">2</div>
         <div class="col box s4">3</div>
     </div>
     <br></br>
     <div class='row '>
         <div class="col box s6">1</div>
         <div class="col box s6">2</div>
     </div>
     <br></br>
     <div class='row '>
         <div class="col box s7">1</div>
         <div class="col box s5">2</div>
     </div>
     <br></br>
     <div class='row '>
         <div class="col box s8">1</div>
         <div class="col box s4">2</div>
     </div>
     <br></br>
     <div class='row '>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
         <div class="col box s12 l1">12</div>
     </div>

     <br></br>
     <div class='row '>
         <div class="col box s12 l4">1</div>
         <div class="col box s12 l4">2</div>
         <div class='col box s12 l4'>3</div>
     </div>
     <br></br>

     <div class='row '>
         <div class="col box s12 l9">1</div>
         <div class="col box s12 l3">2</div>
     </div>
     <br></br>

  <div class='row '>
    <div class="col box s5 l5">1</div>
    <div class="col box s7 l7">2</div>
   </div>
   <br></br>
   <div class='row '>
    <div class="col box s6 push-s3 pull-s3 l6 push-l3 pull-s3 ">Login</div>
   </div>

    </div>
)

}