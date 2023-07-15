import React  from "react";
import Styles from './SkillPage.module.css'
import CardSkill from "../CardSkill/CardSkill";
import FrontEnd from "./FrontEnd.svg";
import BackEnd from "./BackEnd.svg";

const SkillPage = () => {
  return (
    <>
      <section className={Styles.SkillPageSection}>
        <h1>Conhecimentos</h1>

        <div className={Styles.Skills}>
          <CardSkill 
            image={FrontEnd}
            title={'Desenvolvimento Front End'}
            message={'experiência em desenvolvimento web, com conhecimentos sólidos em HTML, CSS, JavaScript e Sass.'}
          />

          <CardSkill 
            image={BackEnd}
            title={'Desenvolvimento Back End'}
            message={'experiência em desenvolvimento Back End, com a linguagem PHP tendo conhecimento em banco de dados SQL e NoSQL sendo eles PostgreSQL, MySQL e MongoDB'}
          />

          <CardSkill 
            image={BackEnd}
            title={'Ferramentas'} 
            message={'Conhecimentos em frameworks Front End e Back End sendo eles React, Bootstrap, Svelte e Laravel.'}
          />
        </div>
      </section>
    </>
  )
}

export default SkillPage;