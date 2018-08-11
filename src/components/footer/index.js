import React, { Component } from 'react';
import './index.css';
import logo from '../../img/logo.svg';
import closeBt from '../../img/icons/iconX.png';

class Footer extends Component {
  state = {
    dropTitle: false,
  };

  render() {

    const title = !this.state.dropTitle &&
      <h2 className="footer__alert-title">Имеются противопоказания, проконсультируйтесь с врачом.</h2>;

    const contact = !this.state.dropTitle &&
      <section className="footer__contact">
        <img className="footer__contact-logo" src={logo} alt="logo"/>
        <div>
          <p className="footer__contact-adress">ООО Пфайзер, Россия, 123112, Москва, Пресненская набережная, д.10, блок С БЦ «Башня на Набережной».</p>
          <p className="footer__contact-phones">Тел.:+7 (495) 287-50-00. Факс.:+7(495) 287-53-00</p>
          <p className="footer__contact-id">XX-XXX-XXX-XXXX.XX.XX.XXXX</p>
        </div>
      </section>;

    const list = this.state.dropTitle &&
      <ul className="footer__list">
        <li className="footer__li"><sup><small>1</small></sup> Клинические рекомендации Министерства здравоохранения Российской Федерации по гиперпролактинемии МКБ 10: E22.1.  Год утверждения: 2016
          <a
            href="http://cr.rosminzdrav.ru/#!/recomend/772"
            rel="noopener noreferrer"
            className="footer__link"
            target="_blank">http://cr.rosminzdrav.ru/#!/recomend/772</a>
          от 17.07.2018</li>
        <li className="footer__li">
          <sup><small>2</small></sup>
          Калинченко С.Ю. Шаг вперед в лечении гиперпролактинемии. Избранные лекции. Москва 2010
        </li>
        <li className="footer__li"><sup><small>3</small></sup>
          3Андреева Е. Н. Хамошина М.Б. Гиперпролактинемия и заболевания молочных желез. Эффективная фармакотерапия в акушерстве и гинекологии, №1 март 2010
        </li>
        <li className="footer__li">
          <sup><small>4</small></sup>
          WeJbster . et al. A comparison of Cabergoline and Bromocriptine in the Treatment of Hyperprolactinemic Amenorrhea. The New England Journal of Medicine 331:904-909, Oct.1994.
        </li>
        <li className="footer__li">
          <sup><small>5</small></sup>
          Vilar L, Freitas MC et al. Diagnosis and management of hyperprolactinemia: results of a Brazilian multicenter study with 1234 patients. J Endocrinol Invest. 2008 May;31(5):436-44.
        </li>
        <li className="footer__li">
          <sup><small>6</small></sup>
          Инструкция по медицинскому применению препарата Достинекс®.Регистрационный номер: П №13905/01
        </li>
        <li className="footer__li">
          <sup><small>7</small></sup>
          Дзеранова Л.К., Бармина И. И. Особенности диагностики и лечения гиперпролактинемического синдрома. Эффективная фармакотерапия в эндокринологии, 2009, №1.
        </li>
        <li className="footer__li">
          <sup><small>8</small></sup>
          Walia R, Bhansali A., Dutta P. Recovery pattern of hypothalamopituitary-testicular axis in patients with macroprolactinomas after treatment with cabergoline. Indian J Med Res 134, September 2011, pp 314-319.
        </li>
        <li className="footer__li">
          <sup><small>9</small></sup>
          Glezer A., Bronstein M. Prolactinomas, cabergoline, and pregnancy. Endocrine (2014) 47:64-69.
        </li>
        <li className="footer__li">
          <sup><small>10</small></sup>
          Дзеранова Л.К., Быканова Н.С. Гиперпролактинемия и беременность: основные достижения и нерешенные вопросы. Вестник репродуктивного здоровья, 2011, №1
        </li>
        <li className="footer__li">
          <sup><small>11</small></sup>
          Ahmed J Al-Husaynei, Isam H. Mahmood, Zena S. Al-Jubori et al. Comparison of the effects of cabergoline and bromocriptine in women with hyperprolactinemic amenorrhea. Middle East Fertility Society Journal. 2008, №1:33-38.
        </li>
        <li className="footer__li">
          <sup><small>12</small></sup>
          Colao A et al., Pregnancy outcomes following cabergoline treatment: extended results from 12-year observational study // Clinical Endocrinology (2008) 68, 66-71
        </li>
        <li className="footer__li">
          <sup><small>13</small></sup>
          Дзеранова Л.К., Воротникова С.Ю. Каберголин: 30-летнее единство опыта и доверия. Российский вестник акушера-гинеколога, 2013, 13(6): 45-49.
        </li>
        <li className="footer__li">
          <sup><small>14</small></sup>
          Дзеранова Л.К., Скурдина Д.В., Воротникова С.Ю., Пигарова ЕА . Особенности течения беременности и родов у пациенток с пролактиномами на фоне лечения каберголином. 2016. 3(48). С. 60-63
        </li>
        <li class="footer__li">
          <sup><small>15</small></sup>
          Melmed S, et al. Diagnosis and treatment of hyperprolactinemia: an Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab (2011), 96(2), pp. 273-288.</li>

        <li class="footer__li">
          <sup><small>16</small></sup>
          Casanueva FF, et al. Guidelines of Pituitary Society for the diagnosis and management of prolactinomas. Clin Endocrinol (2006), 65, pp. 265-273 6</li>

        <li class="footer__li">
          <sup><small>17</small></sup>
          Korner J., Lo J., Freda P, Wardlaw S. Treatment with cabergoline is associated with weight loss in patients with hyperprolactinemia. Obesity Research Vol. 11 №.2 Feb. 2003:311-312.</li>

        <li class="footer__li">
          <sup><small>18</small></sup>
          Осипова А. А., Сметник В.П. Избыточная масса тела и абдоминальный тип ожирения у пациенток с опухолевой и неопухолевой формами гиперпролактинемии, влияние терапии парподелом, норпролаком и достинексом. Проблемы репродукции 2002; 1 : 12-17.</li>

        <li class="footer__li">
          <sup><small>19</small></sup>
          Регистрационное удостоверение 11-8-242-№ 009400 от 21.04.1997</li>

        <li class="footer__li">
          <sup><small>20</small></sup>
          Colao A. Vitale G. et al. Outcome of cabergoline treatment in men with prolactinoma: effects of a 24-month treatment on prolactin levels, tumor mass, recovery of pituitary function, and semen analysis. The Journal of Clinical Endocrinology & Metabolism 89(4):1704-1711. 2004</li>

        <li class="footer__li">
          <sup><small>21</small></sup>
          De Rosa M, Colao A, Di Sarno A. et al. Cabergoline treatment rapidly improves gonadal function in hyperprolactinemic males: a comparison with bromocriptine European Journal of Endocrinology (1998) 138 286-293.</li>
      </ul>;

    const closeListBt = this.state.dropTitle &&
      <button className="footer__list-close-bt" onClick={this.handleDropToggle}>
        <img src={closeBt} alt="close button"/>
      </button>;

    return (
      <footer className="footer" id="footer">
        <div className="footer-wrap">
          <span
            className={this.state.dropTitle ? 'footer__drop-title' : 'footer__drop-title footer__drop-title--active'}
            onClick={this.handleDropToggle}>Список источников</span>
          {title}
          {closeListBt}
          {list}
          {contact}
        </div>
      </footer>
    );
  }

  handleDropToggle = () => {
    this.setState({
      dropTitle: !this.state.dropTitle
    })
  }
}

export default Footer;
