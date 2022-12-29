import React, { useState, useEffect } from "react";
import QueueAnim from 'rc-queue-anim';
import './styles.scss';
import main from '@images/main.png'
import { Button } from 'antd';
import Iframe from 'react-iframe'
import ModalMy from '../Modal';

export default function Banner() {
  const [isModal, setModal] = React.useState(false);


  return (
    <div className="main_screen">
      <QueueAnim className="main_screen__wrapper" delay={300} ease="easeOutQuart">
        <div className="main_screen__content">
          <div className="main_screen__content-left">
            <div className="left__text">
              <h2 className="main_title__text-up">
                Таиский массаж в Москве
              </h2>
              <h1 className="main_title__text">
                MARI THAI
              </h1>
              <h3 className="main_title__text-under">Запишись сейчас и получи скидку 20%</h3>
              <div className="button-hidden__dek">
                <Button type="primary"
                  onClick={setModal}
                >
                  записаться
                </Button>


                  <ModalMy
                    isVisible={isModal}
                    content={
                    <Iframe
                      url="https://n583606.yclients.com/?gcid=1398992531.1665152778"
                      width="100%"
                      height="550px"
                      id=""
                      className=""
                      display="block"
                      position="relative" 
                      style={{
                        border: 'none',
                        borderStyle: 'none'
                      }}
                      />
                    }
                    onClose={() => setModal(false)}
                  />
       
              </div>
            </div>
          </div>
          <div className="main_screen__content-right">
            <div className="screen_img">
              <img src={main} alt='screen image' />
            </div>
          </div>
        </div>

      </QueueAnim>
    </div>
  );
}

