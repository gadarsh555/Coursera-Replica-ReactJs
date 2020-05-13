import React,{ Component } from 'react';

class Footer extends Component {
render(){
return(
    <div>
    <div class ="container-fluid" style ={{backgroundColor:"#F8F8F8",padding:"40px"}}>
    <div class ="row">
        <div class ="col-md-3 col-sm-12">
        <ul style ={{listStyle:"none"}}><li><b>Top Online Courses</b></li></ul>
            <ul style ={{listStyle:"none"}}>
                <li>AI for Everyone</li>
                <li>Introduction to TensorFlow</li>
                <li>Neural Networks and Deep Learning</li>
                <li>Algorithms, Part 1</li>
                <li>Algorithms, Part 2</li>
                <li>Machine Learning</li>
            </ul>
        </div>
        <div class ="col-md-3 col-sm-12">
        <ul style ={{listStyle:"none"}}><li><b>Top Online Specializations</b></li></ul>
        <ul style={{listStyle:"none"}}>
            <li>Deep Learning</li>
            <li>Python for Everybody</li>
            <li>Data Science</li>
            <li>Applied Data Science with Python</li>
            <li>Business Foundations</li>
            <li>Architecting with Google Cloud Platform</li>
        </ul>
        </div>
        <div class ="col-md-3 col-sm-12">
        <ul style ={{listStyle:"none"}}><li><b>Online Certificates</b></li></ul>
        <ul style={{listStyle:"none"}}>
            <li>Google IT Support</li>
            <li>IBM Customer Engagement Specialist</li>
            <li>IBM Data Science</li>
            <li>Applied Project Management</li>
            <li>IBM Applied AI Professional Certificate</li>
            <li>Machine Learning for Analytics</li>

        </ul>
        </div>
        <div class ="col-md-3 col-sm-12">
        <ul style ={{listStyle:"none"}}><li><b>Online Degree Program</b></li></ul>
        <ul style={{listStyle:"none"}}>
            <li>Master's in Data Science</li>
            <li>Bachelors Degree in Computer Science</li>
            <li>Computer Science and Engineering Degrees</li>
            <li>Master's in Machine Learning</li>
            <li>MBA and Business Degrees</li>
            <li>Master's in Electrical Engineering</li>
        </ul>
        </div>
    </div>
    <hr/>
</div>
<div class =" container">
            <div class ="row">
                <div class ="col-md-7 col-sm-12">
                        <div class ="row">
                            <div class ="col-md-4 col-sm-12">
                                <ul style ={{listStyle:"none"}}><li><b>Coursera</b></li></ul>
                                <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Leadership</li>
                                    <li>Careers</li>
                                    <li>Catalog</li>
                                    <li>Certificates</li>
                                    <li>Degrees</li>
                                </ul>
                            </div>
                            <div class ="col-md-4 col-sm-12">
                            <ul style ={{listStyle:"none"}}><li><b>Community</b></li></ul>
                            <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Leadership</li>
                                    <li>Careers</li>
                                    <li>Catalog</li>
                                    <li>Certificates</li>
                                    <li>Degrees</li>
                                </ul>
                            </div>
                            <div class ="col-md-4 col-sm-12">
                            <ul style ={{listStyle:"none"}}><li><b>More</b></li></ul>
                            <ul style ={{listStyle:"none"}}>
                                    <li>About</li>
                                    <li>Leadership</li>
                                    <li>Careers</li>
                                    <li>Catalog</li>
                                    <li>Certificates</li>
                                    <li>Degrees</li>
                                </ul>
                            </div>
                        </div>
                </div>
                   <div class ="col-md-5 col-sm-12">
                        <div>
                            <ul style ={{listStyle:"none"}}>
                                <li><img src ={require('../img/download_on_the_app_store_badge_en.svg')} alt="" width="200" height="60"/></li>
                                <li><img src ={require('../img/playstore.png')} alt=""width="200" height="60"/></li>
                            </ul>
                        </div>
                   </div>
                </div>
                <hr/>
                <div class ="row">
                    <div class ="col-md-9 col-sm-12">
                        <p>© 2020 Coursera Inc. All rights reserved.</p>
                    </div>
                    <div class ="col-md-3 col-sm-12">
                        <img src ={require('../img/facebook.png')} alt="" style={{padding:"10px"}}/>
                        <img src ={require('../img/linkedin.png')} alt="" style={{padding:"10px"}}/>
                        <img src ={require('../img/twitter.png')} alt="" style={{padding:"10px"}}/>
                        <img src ={require('../img/instagram.png')} alt="" style={{padding:"10px"}}/>
                    </div>
                </div>
            </div>
</div>
);
}
}

export default Footer;