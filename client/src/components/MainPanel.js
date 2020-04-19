import React from 'react';
import { useSelector } from 'react-redux';
import Lesson from './Lesson';
import Schedule from './Schedule';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';

export default function MainPanel() {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Switch>
        {/* Unauthenticated */}
        {user.type === 'UNAUTHENTICATED' && <Login />}

        {/* Authenciated student */}
        {user.type === 'STUDENT' && (
          <div>
            <Redirect to="/schedule" />
            <Route path="/lesson">
              <Lesson />
            </Route>

            <Route path="/schedule">
              <Schedule />
            </Route>
          </div>
        )}
      </Switch>
    </div>
  );
}
