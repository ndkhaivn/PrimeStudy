import { h } from 'preact';
import { Link } from 'preact-router';

export default function Navigation()
{
    return (
        <div>
            <h2>Navigation</h2>
            <Link href='/teacher'>Teacher</Link>
            <br/>
            <Link href='/student'>Student</Link>
        </div>
    );
}
