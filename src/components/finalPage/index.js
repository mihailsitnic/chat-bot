import React, { Component, Fragment } from 'react';
import './index.css';
import PatientSelectionSlider from '../../components/slider';
import productImg01 from '../../img/products/product-1.png';
import productImg02 from '../../img/products/product-2.png';
import user1 from '../../../src/img/users/user-1.png';
import wave_png_1 from '../../../src/img/bg/final-page/wave-1.png';
import wave_webp_1 from '../../../src/img/bg/final-page/wave-1.webp';
import wave_png_2 from '../../../src/img/bg/final-page/wave-2.png';
import wave_webp_2 from '../../../src/img/bg/final-page/wave-2.webp';
import wave_png_3 from '../../../src/img/bg/final-page/wave-3.png';
import wave_webp_3 from '../../../src/img/bg/final-page/wave-3.webp';
import wave_png_4 from '../../../src/img/bg/final-page/wave-4.png';
import wave_webp_4 from '../../../src/img/bg/final-page/wave-4.webp';

class FinalPage extends Component {
  render() {
    return (
      <Fragment>
        <section className="finalPage">
          <div className="row">
            <div className="col-6 finalPage-bg">
              <div className="finalPage__header">
                <p className="finalPage__title">Поздравляем! Вы отлично справились.</p>
              </div>
              <div className="message-info">
                <img className="finalPage__img-1" src={productImg02} alt="product" />
                <img className="finalPage__img-2" src={productImg01} alt="product" />
              </div>
              <div className="finalPage__buttons">
                <a href="#scroll-data" title="Научные данные" className="finalPage__bt">Научные данные</a>
                <a href="#scroll-patientSelection" title="Выбрать пациента" className="finalPage__bt">Выбрать пациента</a>
              </div>
            </div>
            <div className="col-6 finalPage-resume">
              <div className="finalPage-wrap">
                <section className="finalPage-container">

                  <section className="finalPage-patientInfo">
                    <img src={user1} alt="user 2" className="patientInfo__img"/>
                    <h4 className="patientInfo__title">Марина, 25 лет</h4>
                    <p className="patientInfo__txt">страдает от нарушения менструального цикла</p>
                  </section>

                  <section className="patientInfo-description">
                    <p className="patientInfo__text">Пациентке была подобрана начальная доза Достинекса®6 – 0,5 мг в неделю (по ½ таб 0,5 мг  в понедельник и четверг) с постепенным повышением до терапевтической дозы в 1 мг в неделю.На фоне лечения удалось достичь существенного уменьшения размеров пролактиномы и нормализации показателей пролактина в крови. Клиника нормализовалась и через год лекарственная терапия была отменена, после чего наступила нормально развивающаяся беременность.</p>
                  </section>

                  <table className="finalPage-dataTable" id="scroll-data">
                    <caption className="dataTable__title">
                      Положительный опыт использования при планировании и ведении беременности
                      <sup className="dataTable__title-sup">8,9,10</sup>
                    </caption>
                    <thead className="dataTable__thead">
                        <tr className="dataTable__tr">
                            <th className="dataTable__authors">
                              Авторы
                              <div>&nbsp;</div>
                            </th>
                            <th className="dataTable__date">Дата публикации</th>
                            <th className="dataTable__amount">
                              Количество беременностей, индуцированных Достинексом®
                              <sup className="dataTable__th-sup">6</sup>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="dataTable__tr">
                            <td className="dataTable__authors">J. Webster et al.</td>
                            <td className="dataTable__date">1994</td>
                            <td className="dataTable__amount">25</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">E. Robert et al.</td>
                          <td className="dataTable__date">1996</td>
                          <td className="dataTable__amount">226</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">J. Verhelst et al.</td>
                          <td className="dataTable__date">1999</td>
                          <td className="dataTable__amount">27</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">E. Ricci et al.</td>
                          <td className="dataTable__date">2002</td>
                          <td className="dataTable__amount">61</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">Colao et al.</td>
                          <td className="dataTable__date">2008</td>
                          <td className="dataTable__amount">363</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">M. Lebbe et al.</td>
                          <td className="dataTable__date">2010</td>
                          <td className="dataTable__amount">100</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">M. Ono et al.</td>
                          <td className="dataTable__date">2010</td>
                          <td className="dataTable__amount">93</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">G. Stalldecker et al.</td>
                          <td className="dataTable__date">2010</td>
                          <td className="dataTable__amount">103</td>
                        </tr>
                        <tr className="dataTable__tr">
                          <td className="dataTable__authors">R.S. Auriemma et al.</td>
                          <td className="dataTable__date">2013</td>
                          <td className="dataTable__amount">143</td>
                        </tr>
                    </tbody>
                  </table>

                  <p className="dataTable__info">Лечение Достинексом®6 на момент зачатия и/или при наличии показаний во время беременности не увеличивает риск невынашивания беременности и риск пороков развития плода. Достинекс®6 может применяться у женщин с гиперпролактинемией, планирующих беременность.</p>

                  <section className="finalPage-results">
                    <h2 className="results__title">Результаты 12-летних наблюдений</h2>
                    <h3 className="results__subtitle">Исходы беременностей, наступивших на фоне лечения каберголином (оригинальный препарат – Достинекс®6)</h3>
                    <div className="results-figures">
                      <div className="figures-head">
                        <h4 className="figures-head__title">329</h4>
                        <p className="figures-head__subtitle">беременностей</p>
                      </div>
                      <div className="figures-body">
                        <div className="row">
                          <div className="col-6 left">
                            <div className="figures-card">
                              <h4 className="figures-card__num">258 (78%)</h4>
                              <p className="figures-card__name">роды</p>
                            </div>
                          </div>
                          <div className="col-6 right">
                            <div className="figures-card figures-card-triangle">
                              <h4 className="figures-card__num">71 (22%)</h4>
                              <p className="figures-card__name">аборты</p>
                            </div>
                            <div className="figures-card__subtitle">
                              <h4 className="figures-card__subtitle-txt">9 (2,7%) по мед. показаниям</h4>
                            </div>
                            <div className="figures-card__subtitle">
                              <h4 className="figures-card__subtitle-txt">31 (9,4%) добровольные</h4>
                            </div>
                            <div className="figures-card__subtitle">
                              <h4 className="figures-card__subtitle-txt">30 (9,1%*) спонтанные</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="figures-info">*Соответствует средним популяционным показателям (10-15%)</p>

                    <h3 className="results__subtitle">Дети, рожденные после лечения каберголином (оригинальный препарат – Достинекс®6)</h3>
                    <div className="results-figures">
                      <div className="figures-head">
                        <h4 className="figures-head__title">258</h4>
                        <p className="figures-head__subtitle">детей</p>
                      </div>
                      <div className="figures-body">
                        <div className="row">
                          <div className="col-4 m-left">
                            <div className="figures-card">
                              <h4 className="figures-card__num">250 (97%)</h4>
                              <p className="figures-card__name">живые</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="figures-card">
                              <h4 className="figures-card__num">4 (1,6%)</h4>
                              <p className="figures-card__name">результат
                                не отслежен</p>
                            </div>
                          </div>
                          <div className="col-4 m-right">
                            <div className="figures-card">
                              <h4 className="figures-card__num">4 (1,6%)</h4>
                              <p className="figures-card__name">мертворожденные</p>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="figures-card__subtitle">
                              <h4 className="figures-card__subtitle-txt">45 (18%) – период гестации менее 37 нед.</h4>
                            </div>
                            <div className="figures-card__subtitle">
                              <h4 className="figures-card__subtitle-txt">193 (77%) – период гестации более 37 нед.</h4>
                            </div>
                            <div className="figures-card__subtitle">
                              <h4 className="figures-card__subtitle-txt">78% детей – с весом 2,5-4 кг</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="results__text">На базе ФГБУ «Национальный медицинский центр эндокринологии» Минздрава России проведено исследование14 с  включением 24 пациенток в возрасте от 24 до 38 лет с пролактинсекретирующими аденомами гипофиза, забеременевшие на фоне терапии каберголином (Достинексом®6).
                      Проведен ретроспективный анализ течения и исходов 33 беременностей.</p>
                    <p className="results__text">Проведенное исследование подтверждает отсутствие прямого неблагоприятного влияния каберголина (Достинекса®6) на течение и исход беременностей у женщин, получающих препарат
                      в терапевтических дозах до наступления беременности и в первые 8 недель гестации.</p>
                  </section>

                  <section className="finalPage-recommendations">
                    <h2 className="recommendations__title">Рекомендации по планированию и ведению беременности у пациенток с пролактиномами.7,11,1</h2>
                    <ul className="recommendations__list">
                      <li className="recommendations__li">
                        <p className="recommendations__txt">Длительность терапии Достинексом®6 до зачатия: не менее 1-го года при микропролактиномах и не менее 2-х лет при макропролактиномах до достижения нормализации уровня пролактина и уменьшения размеров опухоли менее 10 мм.</p>
                      </li>
                      <li className="recommendations__li">
                        <p className="recommendations__txt">Прекратить прием Достинекса®6 при подтверждении факта наступления беременности.</p>
                      </li>
                      <li className="recommendations__li">
                        <p className="recommendations__txt">Общеклиническое обследование + оценка полей зрения: при наличии микропролактиномы 1 раз в 3 месяца, макропролактиномы – 1 раз в месяц.</p>
                      </li>
                      <li className="recommendations__li">
                        <p className="recommendations__txt">Контроль уровня пролактина в течение беременности
                          не проводится.</p>
                      </li>
                      <li className="recommendations__li">
                        <p className="recommendations__txt">При наличии признаков роста аденомы гипофиза показано проведение МРТ (без контрастирования, со II триместра).</p>
                      </li>
                      <li className="recommendations__li">
                        <p className="recommendations__txt">При подтверждении на МРТ роста аденомы, следует рассмотреть необходимость возобновления терапии Достинексом®6.</p>
                      </li>
                    </ul>

                    <button className="recommendations__bt">Краткая инструкция</button>
                  </section>
                </section>
              </div>

              <section className="finalPage-patientSelection" id="scroll-patientSelection">
                <div className="patientSelection-bg">
                  <picture className="finalPage__picture">
                    <img
                      className="finalPage__wave-1"
                      src={wave_webp_1}
                      srcSet={wave_png_1}
                      alt="wave" />
                  </picture>
                  <picture className="finalPage__picture">
                    <img
                      className="finalPage__wave-2"
                      src={wave_webp_2}
                      srcSet={wave_png_2}
                      alt="wave" />
                  </picture>
                  <picture className="finalPage__picture">
                    <img
                      className="finalPage__wave-3"
                      src={wave_webp_3}
                      srcSet={wave_png_3}
                      alt="wave" />
                  </picture>
                  <picture className="finalPage__picture">
                    <img
                      className="finalPage__wave-4"
                      src={wave_webp_4}
                      srcSet={wave_png_4}
                      alt="wave" />
                  </picture>
                </div>
                <div className="patientSelection-content">
                  <h2 className="patientSelection__title">Выберите пациента<sup>*</sup></h2>
                  <div className="patientSelection-slider">
                    <PatientSelectionSlider />
                  </div>
                  <p className="patientSelection__info"><sup>*</sup>Все портреты пациентов вымышленные, любые совпадения случайны</p>
                </div>
              </section>

              <section className="finalPage-dispatch">
                <div className="finalPage-dispatch-wrap">
                  <h2 className="dispatch__title">Подписаться на рассылку от PfizerProfi</h2>
                  <input className="dispatch__newsletterSubscribe" type="text" placeholder="E-mail"/>
                  <button className="dispatch__submit" />
                </div>
              </section>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default FinalPage;
