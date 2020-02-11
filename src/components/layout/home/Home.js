import React, { Component } from "react";
import "./home-styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Konyo from "../konyo.jpg";
import icon from '../../../resources/icon.png'
import banner from '../../../resources/ban-bg.PNG'
import Lowest from '../../../resources/lowesttuition.jpeg'
import directdealservice from '../../../resources/directdealservice.jpeg'
import automation from '../../../resources/automation.jpg'
import highqualityenglsh from '../../../resources/highqualityenglsh.jpeg'
import pwa from '../../../resources/pwa.jpeg' 
import revenue from '../../../resources/revenue.jpeg'  
import Container from 'react-bootstrap/Container'
class Home extends Component {
  render() {
    return (
      <div className="">

        <div class="container ml-auto mr-auto justify-content-between  d-flex pr-0  sticky-top z-index-fixed bg-white ">
            <div class="row">
            <div class="logo py-2 pl-4 ">
              <img src ={icon}class="w-25" />  <span class="pl-1 font-weight-bold">RP INNOTECH</span>
            </div>
            </div>
            <div class="d-none d-sm-block ">
            <div class="  d-flex ">
            <div class="py-2 pr-2 " >
                 Franchise
            </div >  
            <div class="py-2 pl-2 pr-2"> 
                 VideoEnglish
            </div> 
            <div class=" py-2 pl-2 pr-4 " >
                Start Up
            </div> 
            </div>
          </div>
          </div>
    
          <div class="d-flex justify-content-end">
            <img src={banner} alt="banner" class="w-75  h-100 pt-4 mt-3 " />
          </div>
    
          
        <div class="container mr-auto ml-auto pt-3 mt-3">
            <h3 class="pl-3 pr-3  pl-sm-0 pr-sm-0">  Understanding RPinnotech franchise</h3>
            <p class="mt-3   pl-3 pr-3  pl-sm-0 pr-sm-0 ">  In order to understand the Weisser franchise, please bear in mind the following important points.</p>
            <div class="row  m-0">
                <div class="col-sm-12  col-md-4 pl-sm-1 pr-sm-1 "> 
                      <div class="item">
                        <div class="photo">
                          <img src={Lowest} alt="lowesttuition" class="w-100 h-20" />
                        </div>
                        <div class="body">
                          <h4>Lowest Tuition</h4>
                          <p class="p-desc"> We advertise 'Native speaker instructor 20 times a month 10,000 won'. Even if it is inexpensive, it is too lethal and cheap. The point is that the instructor will earn enough money because the instructor will pay most of the tuition, which is 75%. If you are a Filipino instructor, you can earn 15,000 pesos (about 300,000 won) a month. If you work eight hours a day, you can have 40 minutes of ten-minute classes (including 10 minutes break every hour). <span  id="tuition"class="text-primary pointer">Read More....</span></p>
                          <p id="child-tuition" class="p-desc"> In addition to satisfying students with very low tuition fees, we are also able to satisfy our instructors with very high payouts. Generally speaking (even in the Philippines) an English instructor can hardly take his or her salary at a fixed salary or similar level, but his instructor takes that five times. Something front and back is not right? It will not make any sense if the student does not pay the fee directly and the student will only pay 10,000 won a month, but it will be difficult to understand how the instructor can bring the high allowance. </p>
                        </div>
                      </div>
  
                        <div class="item">
                          <div class="photo">
                            <img src={directdealservice} alt="lowesttuition"  class="w-100" />
                          </div>
                          <div class="body">
                            <h4>Direct Deal Services</h4>
                            <p class="p-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ab blanditiis? Fugiat cumque aliquid recusandae hic eligendi atque? Nemo recusandae possimus accusantium. Totam in quis perspiciatis mollitia et dicta quos.</p>
                          </div>
                         </div>
                         </div>
                
                 

                    <div class="col-sm-12 col-md-4  pl-sm-1  pr-sm-1 "> 
                      <div class="item ">
                        <div class="photo">
                          <img src={automation} alt="lowesttuition" class="w-100" />  
                        </div>
                        <div class="body">
                          <h4>Automation system</h4>
                          <p class="p-desc"> At Withcenter, managers or managers can not schedule, cancel or change classes on behalf of students. Only the student has to do it himself and it is as well automated as it is. <span id="auto"class="text-primary pointer">Read More...</span> </p>
                          <p id="child-auto" class="p-desc"> After you first developed a 100% automation system 12 years ago, other competitors are trying to follow the Weisserin system, but they are not easily following. In particular, Weissner is the only company in the world that has recruited lecturers from home tutors and schools from around the world and has a direct system ecosystem. The instructor will set the tuition fee as he / she likes, the student can charge the tuition fee as much as the credit card, and the student can reserve, cancel or change freely. 100% automated management LMS system that does not require. It was only possible in WiseNeur and it is possible only in WiseNeon now. For reference, there is no phone number in CATOK English, and we do not consult you by phone. It's so intuitive and easy to use. </p>
                        </div>

                        <div class="item">
                          <div class="photo">
                            <img src={highqualityenglsh} alt="lowesttuition"  class="w-100" />
                          </div>
                          <div class="body">
                            <h4>High Qualitiy English Education Service</h4>
                            <p class="p-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ab blanditiis? Fugiat cumque aliquid recusandae hic eligendi atque? Nemo recusandae possimus accusantium. Totam in quis perspiciatis mollitia et dicta quos.</p>
                          </div>
                        </div>
                      </div>
                     </div>
                 

                   <div class="col-sm-12  col-md-4  pl-sm-1   pr-sm-1 ">
                       <div class="item">
                         <div class="photo">
                          <img src={revenue} alt="lowesttuition"  class="w-100" />
                         </div>

                         <div class="body">
                          <h4>Revenue Sharing</h4>
                          <p class="p-desc"> The percentage of the tuition fee paid by the student is 75% for the instructor, 20% for the participant, and 5% for the head office. <span id="revenue"class="text-primary pointer">Read More...</span> </p>
                          <p id="child-revenue" class="p-desc"> Affiliate's earnings will be transferred to PayPal on 15th for the previous month. If the earning is less than $ 20, then it will not be paid to affiliates and will be used for operating the homepage. </p>
                        </div>
                       </div>

                       <div class="item ">
                        <div class="photo">
                          <img src={pwa} alt="lowesttuition"  class="w-100" />
                        </div>
                        
                        <div class="body">
                            <h4>PWA</h4>
                            <p class="p-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, ab blanditiis? Fugiat cumque aliquid recusandae hic eligendi atque? Nemo recusandae possimus accusantium. Totam in quis perspiciatis mollitia et dicta quos.</p>
                        </div>
                      </div>
                  </div>

                  </div>
                  </div>
        

          <div className="container ml-auto mr-auto pl-3 pr-3  pl-sm-0 pr-sm-0">
          <form class=" mt-3 pt-2">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button id="submit-btn" type="submit" class="btn btn-primary mt-3">Submit</button>
          
        </form>
        </div>
        <footer class="d-flex  text-center justify-content-center p-5">
          © 2006-2018 Withcenter, Inc., Pampanga Philippines. Email: withcenter@gmail.com
        </footer>
        </div>
    );
}
}
export default Home;
