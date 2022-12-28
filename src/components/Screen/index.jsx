import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import './styles.scss';
import main from '@images/main.png'
import { Button } from 'antd';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: 'main_screen',
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`${className}`}>
        <QueueAnim className={`${className}__wrapper`} delay={300} ease="easeOutQuart">
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
                    onClick={() => location.href = 'tel:79161043736'}
                  >
                    записаться
                  </Button>
                </div> 
              </div>
            </div>
            <div className="main_screen__content-right">
              <div className="screen_img">
                <img src={main} alt='screen image' />
              </div>
              {/* <div className="button-hidden__mob">
                <Button 
                  onClick={() => location.href = 'tel:79161043736'}
                >
                  записаться
                </Button>
              </div> */}
            </div>
          </div>

        </QueueAnim>
      </div>
    );
  }
}

export default Banner;
