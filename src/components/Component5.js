import React,{ Component } from 'react';



class Component5 extends Component {
render(){
return(
<div>
<div class ="container-fluid section7" style ={{marginTop:"20px",backgroundColor:"#FCF4CF",paddingBottom:"60px"}}>
            <div class ="row">
                <div class ="col-md-2 col-sm-12"></div>
                <div class ="col-md-4 col-sm-12">
                    <img src ={require('../img/secondary-consumer-hero-img.png')} alt=""/>
                </div>
                <div class ="col-md-5 col-sm-12">
                    <h2 style ={{fontWeight:"400"}}><b>Take the next step</b> toward<br/> your personal and professional<br/> goals with Coursera.</h2>
                    <p style={{fontSize:"20px"}}>Join now to receive personalized recommendations from the full Coursera catalog.</p>
                    <button className="btn-primary" >Join for Free</button>
                </div>
            </div> 
        </div>
</div>
);
}
}

export default Component5;