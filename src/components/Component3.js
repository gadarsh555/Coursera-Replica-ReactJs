import React,{ Component } from 'react'


class Component3 extends Component {
render(){
return(
<div>
<div class ="container-fluid section1" style={{backgroundColor:"#D6EDF6"}}>
           <div class ="row">
               <div class ="col-md-6 col-sm-12">
                   <div style={{marginLeft:"5%"}}><img src ={require('../img/pinkish-half-circle.png')} alt =""/></div>
                    <div style={{marginLeft:"4%"}}><img  id ="promoimg"src ={require('../img/promoStat.png')} alt =""/></div>
               </div>
               <div class="col-md-5 col-sm-12">
                   <div class ="con-box2">
                    <p style={{fontSize:"x-large",fontWeight:"800"}}>Learner outcomes on Coursera</p>
                    <p style={{fontSize:"large"}}><b>87% of people learning </b>for professional development <b>report career benefits</b> like getting a promotion, a raise, or starting a new career</p>
                    <p style={{fontSize:"large"}}>-&nbsp;Coursera Learner Outcomes Survey (2019)</p>
                    <button className="btn-primary" style ={{margin:"10px"}}>Join for Free</button>
                    <button className="btn-primary" style ={{margin:"10px"}}>Try Coursera For Business</button>
                    </div>
               </div>
            </div> 
        </div>
</div>
);
}
}

export default Component3;