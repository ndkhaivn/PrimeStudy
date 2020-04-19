import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Card,
  Elevation,
  InputGroup,
  FormGroup,
  Intent
} from '@blueprintjs/core';
import { useState } from 'react';
import { login } from '../redux/actions/user';
import { useTranslation } from 'react-i18next';

export default function Login() {

  const dispatch = useDispatch();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  const handleLogin = () => {
    dispatch(login({
      id: studentId,
      password
    }));
  }

  return (
    <div>
      <Card elevation={Elevation.THREE} className="login-card">
        <div className="login-form">
          <h3>Prime Study</h3>

          <FormGroup label={t("Student ID")}>
            <InputGroup leftIcon="id-number" value={studentId} onChange={(event) => setStudentId(event.target.value)}/>
          </FormGroup>

          <FormGroup label={t("Password")}>
            <InputGroup leftIcon="lock" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
          </FormGroup>

          <Button intent={Intent.PRIMARY} fill={true} onClick={handleLogin}>
            {t("Sign in")}
          </Button>
        </div>
      </Card>
    </div>
  );
}
