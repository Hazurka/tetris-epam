import NatchevImg from '../img/natchev.png';
import IvayloImg from '../img/ivaylo.png';
import LuboImg from '../img/lubo.png';
import SamiImg from '../img/sami.png';
import ZdravkoImg from '../img/zdravko.png';
import HristinaImg from '../img/hristina.png';
import "../pages/styles/contacts.css";

const Contacts = () => {
  return (
    <>
      <h1>MEET EPAM BULGARIA’S TEAM AT JSTALKS 2021</h1>
      <p>You want to learn more about EPAM’s company culture, work processes, projects &amp; technologies, open positions, career development opportunities… and many more? </p>
      <p>Book a 15-minute slot for an online meeting and discuss everything you are interested in with our team.</p>
      <section className="people-ctr">
        <section className="top-people-ctr">
           
            <article className="single-person-section">       
                <div className="img-ctr">
                  <img className="person-img" src={NatchevImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev / Country Head</p>
                <a href="">schedule a meeting </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src="./photo (1).png" alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev / Country Head</p>
                <a href="">schedule a meeting </a>
               </div>
            </article>
           
        </section>
        <section className="mid-people-ctr">
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src="./photo (2).png" alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev / Country Head</p>
                <a href="">schedule a meeting </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src="./photo (3).png" alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev / Country Head</p>
                <a href="">schedule a meeting </a>
               </div>
            </article>
        </section>
        <section className="bottom-people-ctr">
            
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src="./photo (4).png" alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev / Country Head</p>
                <a href="">schedule a meeting </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src="./photo (5).png" alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev / Country Head</p>
                <a href="">schedule a meeting </a>
               </div>
            </article>
        </section>
        
    </section>
    </>
  )
}

export default Contacts;
