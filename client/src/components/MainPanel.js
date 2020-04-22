import React from 'react';
import { useSelector } from 'react-redux';
import Lesson from './Lesson';
import Schedule from './Schedule';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import SubmissionsTable from './SubmissionsTable';
import Feedback from './Feedback';

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

        {/* Authenticated teacher */}
        {user.type === 'TEACHER' && (
          <div>
            <Redirect to="/submissions" />

            <Route path="/submissions">
              <SubmissionsTable />
            </Route>

            <Route path="/feedback">
              <Feedback />
            </Route>
          </div>
        )}
      </Switch>
    </div>
  );
}
