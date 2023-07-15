import React from "react";
import styles from './header.module.css';

const Header = () => {
  return (
  <>
    <header>
      <h1 className={styles.title}><span>&lt;</span> Vinicius Vitório / <span>&gt;</span></h1>

      <nav>
        <h3><a href="">//Home</a></h3>
        <h3><a href="">//Conhecimentos</a></h3>
        <h3><a href="">//Experiência</a></h3>
        <h3><a href="">//Contato</a></h3>
      </nav>
    </header>
  </>
  )
}

export default Header;