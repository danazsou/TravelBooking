import React, {useEffect} from 'react'
import'./main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//using an array named Data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best trave destinations in the World. This placae is known for its luxurious stays andadventurous activities.'

  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Hyuana Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost city of the Incas. This place is popular amomg tourists as the sunrise from the Sun Gate is spectacular.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts....'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'Accoring to the world Toursim Ranking, 45 million people visit...'
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its hisory of cultural silver mining...'
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark...'
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Ankor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Ankor wat represents the entire range of the khmer art from...'
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Majal',
    location: 'India',
    grade: 'CULTURal RELAX',
    fees: '$900',
    description: 'an immense mausuleum of white marble, built-in Agra by mighal...'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesian Island ....'
  },
]


const Main = () => {
//creating react hool to add animation on scroll

useEffect(()=>{
  Aos.init({duration:2000})
  },[])


  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visted destinations...
        </h3>
      </div>

      <div className="secContent grid">
        {/* using high order array method (map).
        Using a list of object in one array. Creating an 
        array named data and from use .map() array to fetch each 
        destination at once*/}

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees,
            description})=>{
              return(
                <div key={id} data-aos="fade-up"
                className="singleDestination">
                  {/*returning single id from array here*/}

                  <div className="imageDiv">
                    <img src={imgSrc} alt=
                    {destTitle}/>
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>  
                      </span>
                  
                    
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                     </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                    
                  </div>
                </div>
              )
          })
        }
      </div>

    </section>
  )
}

export default Main