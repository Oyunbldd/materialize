import React,{useRef,useEffect} from 'react'
import Fb from './pages/4button'
import cu from './pages/cu.jpg'
import ck from './pages/ck.png'
import d from './pages/7.jpg'
import mc from './pages/mc.png'
import s from './pages/s.jpg'
import bk from './pages/bk.png'
import sup from './pages/sup.jpg'
import apple from './pages/apple.jpg'
import nike from './pages/nike.jpeg'
import M from 'materialize-css'

export default function Carousel(){
    const carousel=useRef();
    const cl=useRef();
    const gg=useRef();
    useEffect(()=>{  
        M.Carousel.init(gg.current,{
            fullWidth:true,
            indicators:true
        })
   },[gg])
    useEffect(()=>{  
        M.Carousel.init(cl.current,{
            fullWidth:true,
        })
   },[cl])
     useEffect(()=>{  
          M.Carousel.init(carousel.current,{
          })
     },[carousel])
    return(
        <div className='container'>
         <h3 className='center-align'>Carousel</h3>
         <Fb/>  
         <div className='row'>
         <div class="carousel" ref={carousel}>
    <a class="carousel-item" href="#one!"><img src={cu}/></a>
    <a class="carousel-item" href="#one!"><img src={ck}/></a>
    <a class="carousel-item" href="#one!"><img src={d}/></a>
    <a class="carousel-item" href="#one!"><img src={mc}/></a>
    <a class="carousel-item" href="#one!"><img src={bk}/></a>
  </div>
         </div>
         <div className='row'>
         <div class="carousel carousel-slider" ref={cl} style={{width:'100%',height:'800px'}}>
         <a class="carousel-item" href="#one!"><img src={sup} /></a>
    <a class="carousel-item" href="#one!"><img src={s} /></a>
    <a class="carousel-item" href="#one!"><img src={apple} /></a>
    <a class="carousel-item" href="#one!"><img src={nike} style={{height:'100%'}}/></a>
   
  </div>
         </div>
         <div className='row'>
         <div class="carousel carousel-slider center" ref={gg}>
    <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2">button</a>
    </div>
    <div class="carousel-item red white-text" href="#one!">
      <h2>First Panel</h2>
      <p class="white-text">This is your first panel</p>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">This is your second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <h2>Third Panel</h2>
      <p class="white-text">This is your third panel</p>
    </div>
    <div class="carousel-item blue white-text" href="#four!">
      <h2>Fourth Panel</h2>
      <p class="white-text">This is your fourth panel</p>
    </div>
  </div>
         </div>
        </div>
    )
}