import React    from "react";
import Styles   from "./Skill.module.css"

const CardSkill = (props) => {
  return (
    <>
      <div className={Styles.SkillCard}>
        <div className={Styles.SkillCardTitle}>
          <img src={props.image} alt="" />
          <h1>{props.Title}</h1>
        </div>
        <p>{props.message}</p>
      </div>
    </>
  )
}

export default CardSkill