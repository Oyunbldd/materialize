import React,{useRef,useEffect}from 'react'
import FB from './4button'
export default function Footer(){
return(
    <div class='container'>
        <h2 class='center-align'>Breadcrumbs & Footer</h2>
        <FB/>
    <nav>
    <div class="nav-wrapper">
      <div class="col s12 l12 white-text blue">
        <a href="#!" class="breadcrumb">First</a>
        <a href="#!" class="breadcrumb">Second</a>
        <a href="#!" class="breadcrumb">Third</a>
      </div>
    </div>
  </nav>
  <br></br>
  <br></br>
  <br></br>
    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h3 class="white-text">About us</h3>
                <p class="grey-text text-lighten-4"> You can use rows and columns here to organize your footer content.You can use rows and columns here to organize your footer content.You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            Copyright  © 2021
            <a class="grey-text text-lighten-4 right" href="#!">Terms & Conditions</a>
            </div>
          </div>
        </footer>
            
    </div>
)
}