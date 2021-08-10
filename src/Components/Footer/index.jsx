import React from "react";

import emailImg from '../../images/email.svg';
import phone from '../../images/phone.svg';

import styles from "./style.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer__container__color}>
      <div className={ styles.footer__container}>
        <div className={styles.info__container}>
          <h4>Localização</h4>
          <hr />
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>
        <div className={styles.contact__btn__container}>
          <button className={ styles.email__btn } type="button">
            <img src={ emailImg } alt="email" />

            <p>ENTRAR EM CONTATO</p>
          </button>
          <button className={ styles.contact__btn }  type="button">
            <img src={ phone } alt="phone" />
            <p>FALE COM O CONSULTOR ONLINE</p>
          </button>
        </div>
        <div className={ styles.logo__container }>
          <div className={ styles.corebiz__logo }>
            <p>created by</p>
            <img
              alt="Imagem logo Corebiz"
              src="https://www.corebiz.ag/wp-content/uploads/2020/06/logo-corebiz-global.svg"
            />
          </div>
          <div className={ styles.vtex__logo }>
            <p>Powered by</p>
            <img
              alt="Logo Vtex"
              src="https://vtex.com/wp-content/themes/VTEXTheme/assets/imgs/base/logo-vtex.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
