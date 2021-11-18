import NatchevImg from '../img/natchev.png';
import IvayloImg from '../img/ivaylo.png';
import LuboImg from '../img/lubo.png';
import SamiImg from '../img/sami.png';
import ZdravkoImg from '../img/zdravko.png';
import HristinaImg from '../img/hristina.png';
import SvilenImg from '../img/svilen.png';
import StefiImg from '../img/stefi.png';
import DesiImg from '../img/desi.png';
import EpamImg from '../img/epam.png'
import YanaImg from '../img/yana.png'
import EpamRev from '../img/epam-rev.png'
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
           
            <article className="single-person-section first">       
                <div className="img-ctr">
                    <img className="person-img" src={EpamImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Meet our</p>
                <div>TA team</div>
                {/* <p>Chief Software Engineer</p> */}
                <div className="team"><a href="https://us02web.zoom.us/j/8746846281?pwd=OHM0dEwrZjk4YXQ0aGVMaFNFTElOdz09">join </a></div>
               </div>
               <div className="img-ctr">
                    <img className="person-img" src={EpamRev} alt="" />
                </div>
            </article>
           
          
       </section>
        <section className="top-people-ctr">
           
            <article className="single-person-section">       
                <div className="img-ctr">
                  <img className="person-img" src={NatchevImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Vladimir Natchev</p>
                <p>Country Head</p>
                <a href="https://calendly.com/vladimir_natchev/30min">Lets talk </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={IvayloImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Ivaylo Nikolov</p>
                <p>Delivery Manager</p>
                <a href="https://calendly.com/jstalks-ivaylo_nikolov/30min?month=2021-11 ">Lets talk </a>
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
                <a href="https://calendly.com/jstalks-zdravko_duchev/meet">Lets talk </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={HristinaImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Hristina Nenova</p>
                <p>Talent Acquisition Lead </p>
                <a href="https://calendly.com/hristina_nenova/15min">Lets talk </a>
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
                <a href="https://calendly.com/l-s-bozhinov/15min ">Lets talk </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={SamiImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Samuil Aleksov</p>
                <p>Chief Software Engineer</p>
                <a href="https://calendly.com/samaleksov/15min ">Lets talk </a>
               </div>
            </article>
        </section>
        <section className="bottom-people-ctr">
            
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={SvilenImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Svilen Hristov</p>
                <p>Recruiter</p>
                <a href="https://calendly.com/svilen_hristov/30min">Lets talk </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={StefiImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Stefani Germanova</p>
                <p>Recruiter</p>
                <a href=" https://calendly.com/jstalks-stefani_germanova/30min">Lets talk </a>
               </div>
            </article>
        </section>
        <section className="bottom-people-ctr">
            
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={DesiImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Desislava Grigorova</p>
                <p>Recruiter</p>
                <a href="https://calendly.com/jstalks-desislava_grigorova/30min">Lets talk </a>
               </div>
            </article>
            <article className="single-person-section">       
                <div className="img-ctr">
                    <img className="person-img" src={YanaImg} alt="" />
                </div>
                
               <div className="info-ctr">
                <p>Yana Ivanova</p>
                <p>Senior Software Engineer</p>
                <a href="https://calendly.com/yana_ivanova">Lets talk </a>
               </div>
            </article>
            
        </section>
        
    </section>
    </>
  )
}

export default Contacts;
