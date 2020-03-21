import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header({ ...props }) {
    return (
        <div data-shmid="headerBlack" className="desktop-header-black">
            <div className="ui-content-inner ui-content-inner_desktop">
                <div className="desktop-header-black__right">
                    <div className="desktop-header-black__element">
                        <Link to="/registration">
                            <span data-shmid="registrationLink"
                                className="ui-link ui-link_bold desktop-header-black-registration__link"
                                target="_self">
                                <span
                                    className="ui-tooltip-wrapper ui-tooltip-wrapper_desktop">Вы профи?
                                    <span
                                        className="ui-tooltip-anchor ui-tooltip-anchor_bottom">
                                        <span data-shmid=""
                                            className="ui-tooltip ui-tooltip_right ui-tooltip_bottom desktop-header-black-registration__tooltip">
                                            <span
                                                className="ui-tooltip__arrow ui-tooltip__arrow_right ui-tooltip__arrow_bottom">
                                            </span>
                                            <span
                                                className="ui-text ui-text_desktop ui-text_default ui-text_size-16 ui-text_inline desktop-header-black-registration__tooltip-text">Мы&nbsp;открыты
для частных специалистов и&nbsp;компаний.
        </span>
                                            <span
                                                className="ui-text ui-text_desktop ui-text_default ui-text_size-16 ui-text_inline desktop-header-black-registration__tooltip-text">Регистрируйтесь
        и&nbsp;зарабатывайте, помогая людям.</span>
                                            <div className="desktop-header-black-registration__tooltip-link">Подробнее</div>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="desktop-header-black__element"></div>
                    <div className="desktop-header-black__element">
                        <Link data-shmid="myOrders" className="ui-link ui-text_white ui-text_bold" to="/auth/" target="_self">Мои заказы</Link>
                    </div>
                    <div className="desktop-header-black__element">
                        <div className="ui-dropdown ui-dropdown_desktop desktop-header-black-menu ui-dropdown_closed">
                            <div className="ui-dropdown__toggle">
                                <div className="ui-dropdown__toggle-label desktop-header-black-menu-label">
                                    <Link data-shmid="forSpecialist"
                                        className="ui-link ui-text_white ui-text_bold desktop-header-black-menu__toggle"
                                        to="/#" target="_self">Специалистам</Link>
                                </div>
                                <span
                                    data-shmid="icon_default_dropdown_toggle"
                                    className="ui-icon ui-icon_dropdown_toggle ui-dropdown__toggle-icon"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desktop-header-black__left">
                    <div className="desktop-header-black__element">
                        <div
                            className="ui-dropdown ui-dropdown_desktop desktop-header-black-menu desktop-geo-selector-dropdown ui-dropdown_closed">
                            <div className="ui-dropdown__toggle">
                                <div className="ui-dropdown__toggle-label desktop-header-black-menu desktop-geo-selector-dropdown-label">
                                    <Link className="ui-link ui-text_white" to="/#" target="_self"><span
                                        data-shmid="icon_default_earth"
                                        className="ui-icon ui-icon_earth desktop-geo-selector__icon-earth"></span><span
                                            className="ui-text-overflow ui-text-overflow_inline-block desktop-geo-selector__text">Москва</span>
                                    </Link>
                                </div><span data-shmid="icon_default_dropdown_toggle"
                                    className="ui-icon ui-icon_dropdown_toggle ui-dropdown__toggle-icon"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header