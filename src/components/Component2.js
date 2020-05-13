import React,{ Component } from 'react'


class Component2 extends Component {
render(){
return(
<div>
    <div class ="container-fluid collaborator">
    <div class ="row text-center">
        <div class ="col-md-12 col-sm-12" style={{margin:"20px"}}>
            <p>We collaborate with <u>190+ leading universities and companies</u></p>
        </div>
        <div class ="col-md-12 col-sm-12">
            <div class ="container">
                <div class ="row text-center">
                    <div class ="col-md-12" >
                        <img style={{margin:"20px"}} src ={require('../img/illinois.png')} alt=""/>
                        <img style={{margin:"20px"}} src ={require('../img/duke.png')} alt=""/>
                        <img style={{margin:"20px"}} src ={require('../img/google.png')} alt=""/>
                        <img style={{margin:"20px"}} src ={require('../img/umich.jpg')} alt=""/>
                        <img style={{margin:"20px"}} src ={require('../img/ibm.png')} alt=""/>
                        <img style={{margin:"20px"}} src ={require('../img/imperial.png')} alt=""/>
                        <img style={{margin:"20px"}} src ={require('../img/stanford.png')} alt=""/>
                        <img style={{margin:"20px"}} src ={require('../img/penn.png')} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr/>
</div>
<div class ="container-fluid features">
            <div class ="row text-center">
                <div class ="col-md-12 col-sm-12">
                    <h1 id="amitfeaturehead">Achieve your goals with Coursera</h1>
                </div>
            </div><br/><br/>
            <div class ="container">
                <div class ="row text-center">
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={require('../img/SvgaLearn.png')} alt =""/>
                            <h3>Learn the latest skills</h3>
                            <p>like business analytics, graphic design, Python, and more</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={require('../img/teacher-img.png')} alt =""/>
                            <h3>Get ready for a career</h3>
                            <p>in high-demand fields like IT, AI and cloud engineering</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={require('../img/SvgaColorCertificate.png')} alt =""/>
                            <h3>Earn a certificate or degree</h3>
                            <p>from a leading university in business, computer science, and more</p>
                        </div>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <div class ="con-box" >
                            <img src ={require('../img/SvgaCommunity.png')} alt =""/>
                            <h3>Upskill your organization</h3>
                            <p>with on-demand training and development programs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
);
}
}

export default Component2;