import React from 'react'
import M from 'materialize-css'
export default function Typography() {
    return (
        <div class='container'>
           <h2 class='center-align '>Basic Typography</h2>
           {/* <div class='row'>
           <button class='blue white-text '>CSS1</button>
           <button class='green white-text'>CSS2</button>
           <button class='yellow black-text'>JS1</button>
           <button class='red white-text'>JS2</button>
           </div> */}
           <h1>Heading one</h1>
           <h2>Heading two</h2>
           <h3>Heading three</h3>
           <h4>Heading four</h4>
           <h5>Heading five</h5>
           <h6>Heading six</h6>
           <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
           <blockquote>
           This is an example quotation that uses the blockquote tag.
            </blockquote>
           <p className="flow-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget dui urna. Phasellus diam leo, posuere a turpis et, tempus sodales orci.</p>
            <div class='row '>
            <p class='left-align col s4'>Left aligned text</p>
            <p class='rigth-align col s6'>Right aligned text</p>
            <p class='center-align col s5'>Center aligned text</p>
            </div>
            <div class="valign-wrapper  blue-grey lighten-5" style={{height:'300px'}} >
             <h5>This should be vertically aligned</h5>
            </div>
             <div style={{margin:'20px'}}>
             <div class='left-align col s4'>Pellentesque habitant morbi tristique </div>
             <div class='right-align col s4 '>Pellentesque qwrtrysdfhabita</div>
             <div class='left-align col s4'>Pellentesque habitant morbi tristiqufames ac turpis egestas.</div>
             </div>
            
           
        </div>
    )
}