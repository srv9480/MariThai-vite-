import React from 'react';
import './styles.scss';
import master1 from '@images/master1.png';
import master2 from '@images/master2.png';
import master3 from '@images/master3.png';

export default function Masters() {

  return (
    <div className="main-masters-container">
      <div className="main-masters">
        <div className="img-container">
          <img src={master1} alt={`master foto`} className="person-img" />
        </div>
        <div className="name-master">
          Мастер Кеу
        </div>
        <div className="info"><h4>Кеу первоклассный специалист, владеет уникальными методами детального прорабатывания тела, очень востребована среди спортсменов.</h4></div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master2} alt={`master foto`} className="person-img" />
        </div>
        <div className="name-master">Мастер Нан</div>
        <div className="info">
          <h4>Массаж в исполнение Нан способен улучшить общее состояние здоровья, повысить жизненный тонус и зарядить Вас энергией на долгое время.</h4></div>
      </div>
      <div className="main-masters">
        <div className="img-container">
          <img src={master3} alt={`master foto`} className="person-img" />
        </div>
        <div className="name-master">Мастер Тан</div>
        <div className="info">
          <h4>Мастер Тан выполняет тайский традиционный массаж, массаж спины и массаж ног. В ее исполнении тайский традиционный массаж в меру сильный без болезненных ощущений.</h4></div>
      </div>
    </div>
  );
};
