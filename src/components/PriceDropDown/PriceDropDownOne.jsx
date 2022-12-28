import { Collapse } from 'antd';
import React from 'react';
import './PriceDropDown.scss';

import imageTropic from '@images/item2-image-tropic.jpg';
import image3 from '@images/image3.jpg';
import imageFoot from '@images/item4-image-foot.jpg';
import imageThoughs from '@images/item5-images-thoughs.jpg';
import imageNeck from '@images/item6-images-neck.jpg';
import imageSpeam from '@images/item8-images-speam.jpg'; 
// import ButtonLarge from '../Button/ButtonLarge';
import { Button } from 'antd';


const { Panel } = Collapse;

const item1 = (
  <div
    className="price-dropdown"
  >
    <div
      className="price-dropwdown-name"
    >
      Традиционный тайский массаж
    </div>
    <div className="list_price">
      <div>
        <div className="i-price_item-right">
          <div className="i-price_item-right-i">от 3400₽</div>
          <div className="button-hide">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const item2 = (
  <div
  >
    <div
      className="price-dropwdown-name"
    >
      Тайский массаж спины
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 2100₽</div>
            <div className="button-hide">
              <Button type="primary">Primary Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const item3 = (
  <div

  >
    <div
      className="price-dropwdown-name"
    >
      Тайский арома-ойл массаж
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 3400₽</div>
            <div className="button-hide">
              <Button type="primary">Primary Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const item4 = (
  <div
  >
    <div
      className="price-dropwdown-name"
    >
      Фут-массаж
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 2100₽</div>
            <div className="button-hide">
              <Button type="primary">Primary Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const item5 = (
  <div
  >
    <div
      className="price-dropwdown-name"
    >
      Тайский массаж головы и лица
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 2100₽</div>
            <div className="button-hide">
              <Button type="primary">Primary Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const item6 = (
  <div
  >
    <div
      className="price-dropwdown-name"
    >
      Тайский массаж шейно-воротниковой зоны
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 2100₽</div>
            <div className="button-hide">
              <Button type="primary">Primary Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const item8 = (
  <div
  >
    <div
      className="price-dropwdown-name"
    >
      Тайский слим-массаж
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 3600₽</div>
            <div className="button-hide">
              <Button type="primary">Primary Button</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


function PriceDropDownOne() {
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={item3} key="1">
        <div className="price-content">
          <div className="price-content-img">
            <img src={image3} alt="" />
          </div>
          <div className="price-content-text">
            Какой бы ни была погода за окном — oil-массаж
            способен перенести вас на крыльях ароматов в
            далекую теплую страну, на берег прекрасного моря!
            Ваше арома-путешествие начнется с
            релаксирующего массажа всего тела. Массажист
            проработает каждую мышцу от шеи до поясницы,
            снимая напряжение и восстанавливая их мягкость и
            эластичность. Вы почувствуете, как с каждым
            плавным и скользящим массажным движением ваше
            тело расслабляется и наполняется негой, а мысли
            становятся легкими и светлыми. Oil-массаж изумительно дополняет аромат масел, которые вы
            можете выбрать сами. Цитрус способен придать свежесть и поднять настроение, а запах
            экзотических цветов — привести в порядок мысли и гармонизировать душу и тело. Ароматное
            облако окутает вас и улучшит настроение и самочувствие! После масляного массажа кожа
            надолго сохранит подтянутый и красивый вид.
            Результат: глубокий отдых, успокоение, восстановление душевных сил, легкость во всем теле и
            прекрасное настроение!
          </div>
          <div className="button-hide-off">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </Panel>
      <Panel header={item1} key="2">
        <div className="price-content">
          <div className="price-content-img">
          <img src={imageNeck} alt="" />
          </div>
          <div className="price-content-text">
            Традиционный тайский массаж тела. Он
            объединяет в единое целое техники трех терапий
            — линейного массажа, глубинного массажа и
            мануальной терапии с элементами йоги, при
            помощи которых, раскрывается энергетическая
            система человека. Традиционный тайский массаж
            — это эталон оздоровительных практик,
            который возвращает жизненные силы, дарит
            гибкость и легкость во всем теле.
            Он направлен на увеличение подвижности суставов, восстановление кровообращения, снятие
            болевых ощущений и напряжения в мышцах, а также повышение общего тонуса. Традиционный
            тайский массаж можно сравнить с пассивной йогой, в которой от вас не требуется физических
            усилий: за вас все сделает мастер.
            Особенностью этого направления является точечное воздействие, более близкий контакт с
            гостем: при массаже используются большие пальцы рук, поверхность ладони и её основание,
            внешняя часть запястья, локти, предплечья, колени и ступни, а также проработка суставов и
            связок.
          </div>
          <div className="button-hide-off">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </Panel>
      <Panel header={item2} key="3">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageTropic} alt="" />
          </div>
          <div className="price-content-text">
            Спина — это важная часть нашего тела. Она поддерживает в нужном положении позвоночник и позволяет совершать самые разные движения. Наклоны и повороты, движения рук и шеи — всё это делают мышцы спины. Даже прямо стоять без них мы бы не смогли. Это возможно благодаря тому, что мышцы спины очень разные по форме и назначению.
            <br />
            Здоровую спину мы часто воспринимаем как что-то само собой разумеющееся. И порой перестаем ее даже замечать. А ведь на протяжении всей жизни человека спина напряжена. В какие-то периоды больше, в какие-то меньше. Поэтому крайне важно уделять ей больше внимания и почаще давать расслабиться.
            <br />
            После тайского массажа спины вы почувствуете прилив сил и энергии. Это отличный способ расслабиться с пользой для организма.
            <br />
          </div>
          <div className="button-hide-off">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </Panel>
      <Panel header={item6} key="4">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageNeck} alt="" />
          </div>
          <div className="price-content-text">
            Шейно-воротниковая зона чаще других частей
            тела подвергается напряжению и возникновению
            застойных явлений, что приводит к серьезным
            проблемам со здоровьем, мигрени, нарушениям сна.
            Именно на шее скапливается современная
            усталость. Массаж шейно-воротниковой зоны
            позволяет освободиться от этого груза, а
            опытные мастера выявляют именно Ваши
            проблемные зоны.
            Тайский массаж шейно-воротниковой зоны – необходимая процедура для офисных сотрудников
            и людей, которые много времени проводят за компьютером. Её задача – размять и привести в
            норму шею и плечевой пояс.
            Такой массаж положительно влияет не только на мышечную ткань. После массажа все ткани
            этого участка становятся гибкими и эластичными. Чувство скованности в шее пропадает. А
            если делать массаж регулярно, то можно забыть, что значат слова «шею защемило».
            Некоторое время после массажа возможно даже легкое головокружение от притока кислорода.
          </div>
          <div className="button-hide-off">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </Panel>
      <Panel header={item5} key="5">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageThoughs} alt="" />
          </div>
          <div className="price-content-text">
            Массаж головы, ушей и лица. Это не только очень
            приятная, но и полезная процедура:
            активизируются защитные силы организма,
            поднимается общий тонус нервной системы,
            снимается утомление. Во время массажа
            плавными и глубокими движениям мастер
            прорабатывает самые проблемные и
            напряженные участки. Возможно посетить как
            самостоятельную процедуру, так и дополнить ею
            любой полюбившийся Вам массаж.
            Пальцы и ладони двигаются в определенном ритме, расслабляя, освобождая от усталости и боли.
            В этом состоянии стимуляция акупрессурных точек дает ощутимый оздоровительный эффект:
            <br />
            - расслабляются глазные мышцы
            <br />
            - уходит головная боль
            <br />
            - нормализуется давление
            <br />
            - восстанавливается работоспособность и жизненный тонус
          </div>
          <div className="button-hide-off">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </Panel>
      <Panel header={item4} key="6">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageFoot} alt="" />
          </div>
          <div className="price-content-text">
            На стопах есть множество точек, которые
            связаны со всем организмом. Во время массажа
            стоп мастер стимулирует их пальцами или
            специальными палочками. Благодаря этому:
            <br />
            - Расслабляются мышцы всего организма —
            снимается усталость
            <br />
            - Улучшается работа кровеносных сосудов — к
            мозгу поступает больше кислорода
            <br />
            - Повышается чувствительность нервных окончаний — ускоряется реакция
            <br />
            - Сухожилия становятся более эластичными — это препятствует растяжениям.
            <br />
            - Из организма выводится лишняя жидкость — снижается риск отеков.
            <br />
            Мы часто испытываем напряжение в мышцах, усталость и стресс. Беспокойный, тревожный сон,
            депрессию. Люди привыкают к такому состоянию и уже не замечают этого. Фут массаж
            напоминает, что на самом деле должен чувствовать человек: расслабление, покой и
            умиротворение.
          </div>
          <div className="button-hide-off">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </Panel>
      <Panel header={item8} key="8">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageSpeam} alt="" />
          </div>
          <div className="price-content-text">
            Слим массаж — это верный способ создания идеальной фигуры,
            без применения хирургических методик и лекарственных
            препаратов.
            Во время применения этой техники разминается все тело с
            акцентом на проблемные зоны. Такая процедура, обеспечивает
            лимфодренаж, разглаживание кожи и укрепление контуров
            силуэта. Слим массаж помогает убрать отечность, вывести
            токсины. В тандеме с маслом, которое обладает сильным
            жиросжигающим действием, он считается эффективным
            средством для коррекции фигуры.
            За счет старательных и энергичных похлопываний, растираний
            и разминаний, подкожная жировая прослойка будет буквально
            таять от сеанса к сеансу.
            <br />
            Вы не только расслабляетесь и восстанавливаете организм, но и получаете глубокую
            проработку проблемных участков, которые потом долгое время остаются в тонусе,
            подтянутыми и упругими.
          </div>
          <div className="button-hide-off">
            <Button type="primary">Primary Button</Button>
          </div>
        </div>
      </Panel>
    </Collapse>
  );
}
export default PriceDropDownOne;
