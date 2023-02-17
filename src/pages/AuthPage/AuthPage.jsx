import "./AuthPage.css"
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  return (
    <div>
      <div className='logo-container'>
        <nav>
          <img src="https://i.imgur.com/ZkNwGZX.png" alt="" />
        </nav>
      </div>
      <main>
        <h1>Sign Up</h1>
        <SignUpForm setUser={setUser} />
        <h2 className="login-h2">Login</h2>
        <LoginForm setUser={setUser} />
      </main>
    </div>
  );
}
