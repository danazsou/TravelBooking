import React from 'react'
import'./footer.css'
import video2 from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'/>
            <button className='btn flex' type='submit'>
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore
                className="icon"/> Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Recusandae, delectus aliquam, 
              fugit fuga eum soluta nisi repudiandae natus dolorum, 
              laudantium rerum eaque aliquid possimus ipsa. Ullam officia 
              necessitatibus perspiciatis rerum.
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>
          <div className="footerLinks grid">
                 {/* Group1 */} 
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
              </li>

              <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurance
              </li>

              <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
              </li>

              <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
              </li>

              <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
              </li>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer