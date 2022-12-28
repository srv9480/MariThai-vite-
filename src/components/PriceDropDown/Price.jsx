import React from 'react';
import { Tabs } from 'antd';
import PriceDropDownOne from './PriceDropDownOne';
import PriceDropDownTwo from './PriceDropDownTwo';

// <---- Tabs Component ----> //

export default function Price() {
    return (
        <div className="price-layout-wrapper">
            <div className="main-title">
                <div className="main-title__text">УСЛУГИ</div>
                <div className="line" />
            </div>
            <div className="price-info">
                <div className="price-info__text">
                        <p>
                            Мы ценин уют, комфорт и качество, именно поэтому в нашем салоне вы испыатете ту самую магию релакса, забудете о всех проблемах и полноценно отдохнете. Наши мастера настоящие профессионалы из Тайланда.
                            Попробуйте наши незабываемые программы из раздела МАССАЖ или SPA
                        </p>
                        <Tabs defaultActiveKey="1"
                            style={{ padding: 0 }}
                        >
                            <Tabs.TabPane tab="МАССАЖ" key="1">
                                <PriceDropDownOne />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="SPA" key="2">
                                <PriceDropDownTwo />
                            </Tabs.TabPane>
                        </Tabs>
                    <div className="price-text-service">
                        <div className="price-text-service__discount">
                            <span>Скидка 20%</span>
                            <p>Запишись сейчас и получи скидку в нашем салоне на любую услугу</p>
                        </div>
                        <div className="info-text-service__discount">
                            <span>Подарочный сертификат</span>
                            <p>Подари незабываемое наслаждение своему дорогому человеку</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
