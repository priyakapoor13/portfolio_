
import './About.css';
import profile_img from '../../assets/cartoon.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
        <div className="about-left">
            <img src = {profile_img} alt = " "/>
                </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I’m all about creating seamless user experiences with clean code and creative design.Every project is a chance to solve problems and bring ideas to life.Detail-driven and always learning, I strive to write code that’s both functional and elegant.</p>
                    
                </div>
                 <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr  style={{width : "70%"}}/></div>
                        <div className="about-skill"><p>Bootstrap</p> <hr  style={{width : "70%"}}/></div>
                        <div className="about-skill"><p>Javascript</p> <hr  style={{width : "60%"}}/></div>
                        <div className="about-skill"><p>React</p> <hr  style={{width : "40%"}}/></div>
                </div> 
            </div>
        
        </div>
  </div>
)
}

export default About