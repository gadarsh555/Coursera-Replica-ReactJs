import React,{ Component } from 'react';



class Component4 extends Component {
render(){
return(
<div>
<div class ="container-fluid section2">
            <div class ="row text-center">
                <div class ="col-md-12 col-sm-12">
                <br/>
                    <h1 >World-class learning for anyone, anywhere</h1>
                </div>
            </div><br/>
            <div class ="row">
                <div class ="col-md-2 col-sm-12"></div>
                <div class ="col-md-3 col-sm-12">
                    <div class ="section2-text-box">
                    <br/>
                        <p style ={{color:"grey"}}>TOP QUALITY</p>
                        <p style={{fontSize:"25px"}} >Learn from leading <br/>universities and companies</p>
                        <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                        <p style={{fontSize:"26px;",lineHeight:"2"}}>Start streaming on-demand video lectures today from top instructors in subjects like <b>business, computer science, data science, language learning</b>, & more.
                        </p>
                    </div>
                </div>
                <div class ="col-md-7 col-sm-12">
                    <img class="img-responsive" style={{width:"100%"}} src ={require('../img/andrewng.png')} alt=""/>
                </div>
            </div>
        </div>
        <div class ="container section3">
            <div class ="row">
            <div class ="col-md-1"></div>
                <div class ="col-md-5 col-sm-12">
                    <div class ="section3-con-box" style ={{marginTop:"20%"}}>
                    <p style ={{color:"grey"}}><b>ACCESSIBLE</b></p>
                    <p style ={{fontSize:"25px"}}>Find flexible, affordable options</p>
                    <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                    <p style ={{fontSize:"20px"}}>Choose from many options including free courses and university degrees at a breakthrough price. Learn at your own pace, 100% online.</p>
                    </div>
                </div>
                <div class ="col-md-5">
                    <br/><br/>
                    <img class="img-responsive" style={{width:"100%"}}  src ={require('../img/offerings2.png')} alt =""/>
                </div>
            </div>
        </div>
        <div class ="container-fluid section4">
           
            <div class ="row">
                <div class ="col-md-2 col-sm-12"></div>
                <div class ="col-md-3 col-sm-12">
                    <div class ="section2-text-box">
                    <br/>
                        <p style ={{color:"grey"}}>APPLIED LEARNING</p>
                        <p style={{fontSize:"25px"}} >Master skills with in-depth learning</p>
                        <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                        <p style={{fontSize:"26px;",lineHeight:"2"}}>Apply what you learn with<b> self-paced quizzes and hands-on projects.</b> Get feedback from a global community of learners.
                        </p>
                    </div>
                </div>
                <div class ="col-md-7 col-sm-12">
                    <img class="img-responsive" style={{width:"100%"}} src ={require('../img/quizCompletion.png')} alt=""/>
                </div>
            </div>
        </div>
        <div class ="container section5">
            <div class ="row">
               
                <div class ="col-md-5 col-sm-12">
                    <div class ="section5-con-box" style ={{marginTop:"30%"}}>
                    <p style ={{color:"grey"}}><b>SHAREABLE CERTIFICATES</b></p>
                    <p style ={{fontSize:"25px"}}>Earn industry-recognized credentials</p>
                    <div style ={{backgroundColor:"#2a73cc",width:"20%",height:"2px"}}></div><br/>
                    <p style ={{fontSize:"17px"}}>Demonstrate your new skills by sharing your Course <b>Certificate, Professional Certificate, MasterTrack™ Certificate</b>, or diploma with your network.</p>
                    </div>
                </div>
                <div class ="col-md-6">
                    <br/><br/>
                    <img class="img-responsive" style={{width:"100%"}} src ={require('../img/certificates4.png')} alt =""/>
                </div>
            </div>
        </div>
        <div class ="container-fluid section6" >
            <div class ="row text-center">
                <div class ="col-md-12">
                    <div style ={{marginTop:"9%"}}>
                    <h2><b>From the Coursera community</b></h2>
                    <h3 style ={{color:"grey"}} id="subheading">45+ million people are already learning on Coursera</h3>
                    </div>
                </div>
            </div>
        </div>

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <center>
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <img class="d-block w-10"  src={require('../img/julio.png')} alt="First slide"/>
      <h3 style={{backgroundColor:"lightblue",width:"70%"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </h3>
    </div>
    <div class="carousel-item">
      <img class="d-block w-10"  src={require('../img/kara.png')} alt="Second slide"/>
      <h3 style={{backgroundColor:"yellow",width:"70%"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </h3>
    </div>
    <div class="carousel-item">
      <img class="d-block w-10"  src={require('../img/mirela-decorative.png')} alt="Third slide"/>
      <h3 style={{backgroundColor:"pink",width:"70%"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </h3>
    </div>
    <div class="carousel-item">
      <img class="d-block w-10s"  src={require('../img/sabrina.png')} alt="Third slide"/>
      <h3 style={{backgroundColor:"lightgreen",width:"70%"}}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </h3>
    </div>
  </div></center>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" style={{backgroundColor:"red"}} aria-hidden="true"></span>
    <span class="sr-only"  >Previous</span>
  </a>
  <a class="carousel-control-next" style={{color:"black"}} href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" style={{backgroundColor:"red"}} aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
);
}
}
export default Component4;