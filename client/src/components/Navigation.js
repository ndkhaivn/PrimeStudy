import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Navbar,
  Classes,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  Button,
  Alignment,
} from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('vi');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <Navbar className={`${Classes.DARK} nav-bar`}>
      <NavbarGroup>
        <NavbarHeading>Prime Study</NavbarHeading>
        <NavbarDivider />

        {/* Authenticated student */}
        {user.type === 'STUDENT' && (
          <div>
            <Link to="/schedule">
              <Button text={t('Schedule')} minimal rightIcon="calendar" />
            </Link>
            <Link to="/lesson">
              <Button text={t('Lesson')} minimal rightIcon="presentation" />
            </Link>
          </div>
        )}

        {/* Authenticated teacher */}
        {user.type === 'TEACHER' && (
          <div>
            <Link to="/submissions">
              <Button text={t('Class List')} minimal rightIcon="th" />
            </Link>
          </div>
        )}

        <Button
          text={t('Logout')}
          minimal
          rightIcon="log-out"
          onClick={() => dispatch(logout())}
        />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <div className="bp3-select bp3-minimal">
          <select
            value={lang}
            onChange={(event) => {
              setLang(event.currentTarget.value);
              i18n.changeLanguage(event.currentTarget.value);
            }}
          >
            <option value="en"> en </option>
            <option value="vi">vi</option>
          </select>
        </div>
      </NavbarGroup>
    </Navbar>
  );
}
