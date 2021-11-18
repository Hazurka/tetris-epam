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
      <p>You want to learn more about EPAM’s company culture, work processes, projects &amp; technologies, open positions, </p>
      <p>career development opportunities… and many more? </p>
      <p>Schedule a meeting and discuss everything you are interested in with our team. </p>
      <section className="people-ctr">
        <section className="top-people-ctr">
           
            <article className="single-person-section">       
                <div className="img-ctr">
                  <img className="person-img" src={NatchevImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev</p>
                <p>Country Head</p>
                <a href="https://calendly.com/vladimir_natchev/30min">schedule a meeting </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={IvayloImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Ivaylo Nikolov</p>
                <p>Delivery Manager</p>
                <a href="https://calendly.com/jstalks-ivaylo_nikolov/30min?month=2021-11 ">schedule a meeting </a>
               </div>
            </article>
           
        </section>
        <section className="mid-people-ctr">
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={ZdravkoImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Zdravko Duchev</p>
                <p>Software Engineer Manager</p>
                <a href="https://calendly.com/jstalks-zdravko_duchev/meet">schedule a meeting </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={HristinaImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Hristina Nenova</p>
                <p>Talent Acquisition Lead </p>
                <a href="https://calendly.com/d/cf3-nsc-6pb/15-minute-meeting ">schedule a meeting </a>
               </div>
            </article>
        </section>
        <section className="bottom-people-ctr">
            
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={LuboImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Lyubomir Bozhinov</p>
                <p>Lead Software Engineer</p>
                <a href="https://calendly.com/l-s-bozhinov/15min ">schedule a meeting </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={SamiImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Samuil Aleksov</p>
                <p>Chief Software Engineer</p>
                <a href="https://calendly.com/samaleksov/15min ">schedule a meeting </a>
               </div>
            </article>
        </section>
        
    </section>
    </>
  )
}

export default Contacts;
