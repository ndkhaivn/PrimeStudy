import { h } from 'preact';
import { Router } from 'preact-router';

export default function MainPanel()
{
    return (
        <div>
            <h2>MainPanel</h2>
            <Router>
                <div default>Home Page</div>
                <div path='/teacher'>Teacher</div>
                <div path='/student'>Student</div>
            </Router>
        </div>
    );
}
