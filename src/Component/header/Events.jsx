import React from 'react'
import {useState} from "react";
import axios from "axios";

function Events() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState(0)
  const [phone, setPhone] = useState(0)
  const [time,setTime]=useState(0)
  const [text,setText]=useState("")
  const [person,setPerson]=useState(0)
  
  const send=(e)=>{
    // alert("...........");
   e.preventDefault();
    let data={}
    data.name=name
    data.email=email
    data.date=date
    data.phone=phone
    data.time=time
    data.text=text
    data.person=person
    axios.post("https://retoolapi.dev/47eOEs/data",data).then((response)=>{
      console.log(response);
      if(response.status==201){
        setName("")
        setEmail("")
        setDate("")
        setPhone("")
        setTime("")
        setText("")
        setPerson("")
     const element= document.getElementById("form")
    //  console.dir(element)
     for(let i=0;i<=6;i++){
      element[i].value="";
     }
   
    //  element[0].value=""
    //  element[1].value=""
    //  element[2].value=""
    //  element[3].value=""
      }
      
    })
   }
  return (
    <div> <section id="events" className="events">
    <div className="container">

      <div className="section-title">
        <h2>Organize Your <span>Events</span> in our Restaurant</h2>
      </div>

      <div className="events-slider swiper">
        <div className="swiper-wrapper">

          <div className="swiper-slide">
            <div className="row event-item">
              <div className="col-lg-6">
                <img src="assets/img/event-birthday.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Birthday Parties</h3>
                <div className="price">
                  <p><span>$189</span></p>
                </div>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="row event-item">
              <div className="col-lg-6">
                <img src="assets/img/event-private.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Private Parties</h3>
                <div className="price">
                  <p><span>$290</span></p>
                </div>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>

          <div className="swiper-slide">
            <div className="row event-item">
              <div className="col-lg-6">
                <img src="assets/img/event-custom.jpg" className="img-fluid" alt=""/>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 content">
                <h3>Custom Parties</h3>
                <div className="price">
                  <p><span>$99</span></p>
                </div>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>

  
  <section id="book-a-table" className="book-a-table">
    <div className="container">

      <div className="section-title">
        <h2>Book a <span>Table</span></h2>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      </div>

      <form onSubmit={send} method="post" role="form" className="php-email-form" id="form">
      
        <div className="row">
          <div className="col-lg-4 col-md-6 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  required onChange={(e)=>{setName(e.target.value)}}/>
            <div className="validate"></div>
          </div>
          <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required onChange={(e)=>{setEmail(e.target.value)}}/>
            <div className="validate"></div>
          </div>
          <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  required onChange={(e)=>{setPhone(e.target.value)}}/>
            <div className="validate"></div>
          </div>
          <div className="col-lg-4 col-md-6 form-group mt-3">
            <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  required onChange={(e)=>{setDate(e.target.value)}}/>
            <div className="validate"></div>
          </div>
          <div className="col-lg-4 col-md-6 form-group mt-3">
            <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  required onChange={(e)=>{setTime(e.target.value)}}/>
            <div className="validate"></div>
          </div>
          <div className="col-lg-4 col-md-6 form-group mt-3">
            <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" required onChange={(e)=>{setPerson(e.target.value)}}/>
            <div className="validate"></div>
          </div>
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows="5" placeholder="Message"  required onChange={(e)=>{setText(e.target.value)}}></textarea>
          <div className="validate"></div>
        </div>
        <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div>
  </section></div>
  )
}
export default Events;