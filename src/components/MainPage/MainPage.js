import React    from "react";
import Styles   from './MainPage.module.css';
import photo    from '../../assets/Images/Foto - main.png';
import GitHub   from '../../assets/Images/GitHubIcon.png';
import Linkedin from '../../assets/Images/linkedinIcon.png';
import Resume   from '../../assets/Images/ResumeIcon.png';

const MainPage = () => {
  return (
    <>
      <section className={Styles.SectionMainPage}>

        <div className={Styles.sectionCenter}>
          <img src={photo} alt="Foto de Perfil." />

          <div>
            <h1>Vinicius <br /> <span>Vitório</span></h1>

            <div className={Styles.SocialMediaIcons}>
              <a href=""><img src={GitHub} alt="GitHub Link" /></a>
              <a href=""><img src={Linkedin} alt="Linkedin Link" /></a>
              <a href=""><img src={Resume} alt="Curriculo Download" /></a>
            </div>
          </div>
          
        </div>
      
        <h2>Desenvolvedor</h2>

      </section>
    </>
  );
}

export default MainPage;