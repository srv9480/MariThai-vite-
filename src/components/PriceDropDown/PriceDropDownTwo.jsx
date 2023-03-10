import { Collapse } from 'antd';
import React from 'react';
import './PriceDropDown.scss';
// import ButtonLarge from '../Button/ButtonLarge';
import imageSpaThai from '@images/image11-images-spaThai.jpg';
import imageSpaExspress from '@images/image12-images-SpaExspress.jpg';

const { Panel } = Collapse;

const item1 = (
  <div
  >
    <div
      className="price-dropwdown-name"
    >
      SPA «Шоколадное наслаждение»
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 6500₽</div>
            <div className="button-hide">
             {/* <ButtonLarge /> */} 
            </div>
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
      SPA «Тайский десерт»
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 6500₽</div>
            <div className="button-hide">
              {/* <ButtonLarge /> */}
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
      SPA на двоих «Идеальное свидание»
    </div>
    <div
    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 13500₽</div>
            <div className="button-hide">
              {/* <ButtonLarge /> */}
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
      SPA «Дары моря»
    </div>
    <div

    >
      <div className="list_price">
        <div>
          <div className="i-price_item-right">
            <div className="i-price_item-right-i">от 6900₽</div>
            <div className="button-hide">
              {/* <ButtonLarge /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function PriceDropDownTwo() {
  return (
    <Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header={item1} key="1">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageSpaThai} alt="" />
          </div>
          <div className="price-content-text">
            Программа с использованием натурального шоколада. В нее входит шоколадный пилинг, шоколадное обёртывание, ойл-массаж с миндальным маслом.
            <br />
            В шоколаде содержится много полезных для организма микроэлементов: теобромин, натрий, растительные протеины, железо, фенилэтиламин, калий, магний, витамины РР, А, В-1, В2. Поэтому его польза неоспорима.
            Шоколадное обертывание делает кожу гладкой, подтянутой, упругой. Применение шоколада в косметологических целях уменьшает глубину и количество морщин, борется с целлюлитом, пигментными пятнами, растяжками, угревой сыпью. С помощью шоколадного обертывания из организма выводится излишний жир и токсины.
            <br />
            Пилинг с шоколадом деликатно удаляет мертвые клетки эпидермиса, сохраняя здоровые. После пилинга важно усилить положительное действие шоколада на кожу. Для этого следующая часть программы – шоколадное обёртывание. Тело полностью покрывают шоколадной маской в течение 20-30 минут. За это время полезные вещества легко проникают в очищенную пилингом кожу. Благодаря этому она омолаживается, подтягивается и увлажняется. Завершает спа-программу тайский массаж с миндальным маслом. Массаж мягко разминает мышцы, и это усиливает приток крови к коже. Во время массажа мастер использует скользящие и растирающие движения, таким образом усиливая воздействие миндального масла на кожу. На первые два этапа отводится один час, и на массаж с шоколадным маслом – еще час. Так, за два часа спа-программы «Шоколадное наслаждение» вам удастся отдохнуть душой и телом. Приглушенный свет, расслабляющая музыка и сладкий аромат шоколада погружают вас в расслабляющую атмосферу отдыха.

            <br />
            *Мы рекомендуем добавить кедровую бочку для большего расслабления и подготовки тела к спа-программе за дополнительную плату. Длительность - 15 минут. Добавить кедровую бочку можно при записи на спа-программу.
          </div>
          <div className="button-hide-off">
            {/* <ButtonLarge /> */}
          </div>
        </div>
      </Panel>
      <Panel header={item4} key="2">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageSpaExspress} alt="" />
          </div>
          <div className="price-content-text">
            Программа с использованием листовых водорослей ламинарии.
            <br />
            В нее входит водорослевый пилинг, обёртывание, ойл-массаж с миндальным маслом.
            <br />
            Благодаря комплексному воздействию на весь организм водорослевое обертывание можно с уверенностью отнести к самым эффективным косметическим процедурам. Полезные свойства океанических водорослей в том, что они насыщают ткани витаминами и минералами, при этом выравнивают и омолаживают кожу. Процедура помогает справиться с атонией кожного покрова и сосудов, снять стресс и вывести токсины.
            <br />
            Морские водоросли – древнейшие представители растительного мира. Только они содержат столь богатую палитру необходимых нашему организму питательных веществ: магний, кальций, натрий, ценные ненасыщенные омега-3 кислоты, витамины и важнейшие аминокислоты.
            <br />
            Для пилинга используется скраб с экстрактами морских водорослей фукуса и ламинарии, который распределяется по всей поверхности кожи мягкими массажными движениями. Экстракт ламинарии активно воздействует на кожу, выравнивая ее и убирая эффект «апельсиновой корки».
            <br />
            После очищения следует этап водорослевого обёртывания на 20-30 минут. Мастер выкладывает ламинарию и вы ложитесь спиной на водорослевую поверхность. Часть листов ламинарии распределяются по передней поверхности тела, а также по бедрам. Листы ламинарии заворачиваются вокруг тела, как в «кокон». Дальше наступает самая приятная часть процедуры, вы отдыхаете, глубоко расслабляетесь и даже можете заснуть, организм активно избавляется от токсинов и впитывает полезные вещества ламинарии. Данная часть СПА-программы «Дары моря» занимает около одного часа.
            <br />
            После скрабирования и обёртывания кожа подготовлена для завершающего этапа - ойл-массажа с использованием миндального масла. Массаж с маслом миндаля делает кожу более мягкой и нежной, восстанавливая её эластичность. Использование арома-масел во время глубокой, но мягкой проработки всего тела в течение часа позволяет достичь максимального расслабления.
            <br />
            *Мы рекомендуем добавить кедровую бочку для большего расслабления и подготовки тела к спа-программе за дополнительную плату. Длительность - 15 минут. Добавить кедровую бочку можно при записи на спа-программу.
          </div>
          <div className="button-hide-off">
            {/* <ButtonLarge /> */}
          </div>
        </div>
      </Panel>
      <Panel header={item2} key="3">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageSpaExspress} alt="" />
          </div>
          <div className="price-content-text">
            Спа «Тайский десерт» — это программа, которая принесет вам не только удовольствие, но и пользу. В нее входит манговый пилинг, манговое обертывание, ойл-массаж с маслом манго.
            <br />
            Сначала мастер очищает кожу с помощью мангового скраба. Мелкие частички эффективно удаляют отмершие частички эпидермиса и открывают поры, при этом не травмируя кожу.
            <br />
            Затем обертывание. Плод манго богат полезными веществами. А подготовленная с помощью пилинга кожа легко их впитывает. Нежная масса с экстрактом манго делает кожу более мягкой и эластичной.
            <br />
            И в завершении программы — ойл-массаж с маслом манго. Мастер тщательно прорабатывает каждый участок тела, начиная с верхней части тела, постепенно спускаясь ниже. Массирующие движения увеличивают приток крови, выравнивая цвет и рельеф кожи.
            <br />
            Расслабление в течение двухчасовой спа-программы усиливает приглушенный свет,  приятная музыка и сладкий аромат манго. После насыщенной программы вы чувствуете себя отдохнувшей и свежей. Как будто побывали на экзотическом острове.
            <br />
            Мы рекомендуем добавить кедровую бочку для большего расслабления и подготовки тела к спа-программе за дополнительную плату. Длительность - 15 минут. Добавить кедровую бочку можно при записи на спа-программу.
          </div>
          <div className="button-hide-off">
            {/* <ButtonLarge /> */}
          </div>
        </div>
      </Panel>
      <Panel header={item3} key="4">
        <div className="price-content">
          <div className="price-content-img">
            <img src={imageSpaExspress} alt="" />
          </div>
          <div className="price-content-text">
            SPA «Идеальное свидание» прекрасный формат роскошного свидания, подарка на годовщину или сюрприза просто так, для души и тела любимого человека в маленьком рае на двоих!
            <br />
            Программа включает в себя следующие процедуры:
            <br />
            Затем обертывание. Плод манго богат полезными веществами. А подготовленная с помощью пилинга кожа легко их впитывает. Нежная масса с экстрактом манго делает кожу более мягкой и эластичной.
            <br />
            Программа включает в себя следующие процедуры:
            <br />
            Для него солевой пилинг,  арома-ойл массаж, фут-массаж.
            <br />
            Для нее шоколадный пилинг, шоколадное обёртывание, арома-ойл массаж.⠀
            <br />
            Программа проводится на двух массажных столах. Одновременно для него и для неё.
            <br />
            После прогрева в кедровой бочке мастер очищает кожу с помощью скраба. Для мужчины он солевой, а для неё шоколадный. Следующий этап. Фут-массаж для него. Мастер тщательно прорабатывает ноги от ступней до колен, даря ни с чем несравнимое чувство расслабления. И нежнейшее шоколадное обертывание для неё. Завершает программу синхронный расслабляющий ойл-массаж.
            <br />
            После массажа вы можете спокойно посидеть в удобных креслах чайной зоны, расслабленные и счастливые. Это время насладиться горячими травяными напитками и обсудить полученные впечатления.
          </div>
          <div className="button-hide-off">
            {/* <ButtonLarge /> */}
          </div>
        </div>
      </Panel>

    </Collapse>
  );
}
export default PriceDropDownTwo;
