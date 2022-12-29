import React, { useEffect } from 'react';
import "./styles.css";
import closeimg from "../../assets/icons/close.png";


const ModalMy = ({ isVisible = false, content, onClose }) => {
      const keydownHandler = ({ key }) => {
            switch (key) {
                  case 'Escape':
                        onClose();
                        break;
                  default:
            }
      };

      React.useEffect(() => {
            document.addEventListener('keydown', keydownHandler);
            return () => document.removeEventListener('keydown', keydownHandler);
      });

      return !isVisible ? null : (
            <div className="modal-wrapper">
                  <div className="modal-window" onClick={onClose}>
                        <div className="modaldialogOpen" onClick={e => e.stopPropagation()}>
                              <div className="modalheader">
                                    <h3 className="modaltitle"></h3>
                                    <span className="modalclose" onClick={onClose}>
                                          <img className='closeimg' src={closeimg} width='32px' />
                                    </span>
                              </div>
                              <div className="modalbody">
                                    <div className="modalcontent">{content}</div>
                              </div>
                        </div>
                  </div>
                  <div class="overlay"></div>
            </div>
      );
};

export default ModalMy;