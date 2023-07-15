import React  from "react";
import Styles from './SkillPage.module.css'
import CardSkill from "../CardSkill/CardSkill";
import FrontEnd from "./FrontEnd.svg";

const SkillPage = () => {
  return (
    <>
      <section className={Styles.SkillPageSection}>
        <h1>Conhecimentos</h1>

        <CardSkill/>
        
      </section>
    </>
  )
}

export default SkillPage;