import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/loginRegister.css';

function LoginRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const [updatePwData, setUpdatePwData] = useState({
    email: '',
    oldPassword: '',
    newPassword: ''
  });
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/register', { username, email, password })
      .then((res) => {
        if (res.data && res.data.success) {
          alert('Registration successful!');
          setUsername('');
          setEmail('');
          setPassword('');
          setIsActive(false); 
        }
        else alert('Register failed: ' + (res.data?.error || 'Unknown'));
      })
      .catch((err) => {
        console.error(err);
        alert('Register request failed');
      });
  }

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  function login(event) {
    event.preventDefault();
    axios.post('http://localhost:3000/login', values)
      .then((res) => {
        if (res.data && res.data.success) {
          alert('Login successful!');
          navigate('/');
        }
        else alert('Login failed: ' + (res.data?.error || 'Unknown'));
      })
      .catch((err) => {
        console.error(err);
        alert('Login request failed');
      });
  }

  function handlePasswordUpdate(event) {
    event.preventDefault();
    const { email, oldPassword, newPassword } = updatePwData;
    if (!email || !oldPassword || !newPassword) {
      alert('All fields required');
      return;
    }
    axios.put('http://localhost:3000/user/password', {
      email,
      oldPassword,
      newPassword
    })
      .then((res) => {
        if (res.data && res.data.success) {
          alert('Password updated successfully!');
          setShowPasswordUpdate(false);
          setUpdatePwData({ email: '', oldPassword: '', newPassword: '' });
        } else {
          alert('Update failed: ' + (res.data?.error || 'Unknown'));
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Password update request failed');
      });
  }

  return (
    <div className="cont">
      <div
        className={`content justify-content-center align-items-center d-flex shadow-lg ${isActive ? 'active' : ''}`}
        id="content"
      >
        {/* Register Form */}
        <div className="col-md-6 d-flex justify-content-center">
          <form onSubmit={register}>
            <div className="header-text mb-4">
              <h1>Create Account</h1>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control form-control-lg bg-light fs-6"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control form-control-lg bg-light fs-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg bg-light fs-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group mb-3 justify-content-center">
              <button type="submit" className="btn border-white text-white w-50 fs-6">
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Login / Password Update Form */}
        <div className="col-md-6 right-box">
          {!showPasswordUpdate ? (
            <form onSubmit={login}>
              <div className="header-text mb-4">
                <h1>Sign In</h1>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg bg-light fs-6"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control form-control-lg bg-light fs-6"
                  value={values.password}
                  onChange={(e) => setValues({ ...values, password: e.target.value })}
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label htmlFor="formcheck" className="form-check-label text-secondary"><small>Remember me</small></label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#" onClick={(e) => {
                      e.preventDefault();
                      setShowPasswordUpdate(true);
                    }}>Forgot password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3 justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handlePasswordUpdate}>
              <div className="header-text mb-4">
                <h1>Update Password</h1>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control form-control-lg bg-light fs-6"
                  value={updatePwData.email}
                  onChange={(e) => setUpdatePwData({ ...updatePwData, email: e.target.value })}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="Old Password"
                  className="form-control form-control-lg bg-light fs-6"
                  value={updatePwData.oldPassword}
                  onChange={(e) => setUpdatePwData({ ...updatePwData, oldPassword: e.target.value })}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  placeholder="New Password"
                  className="form-control form-control-lg bg-light fs-6"
                  value={updatePwData.newPassword}
                  onChange={(e) => setUpdatePwData({ ...updatePwData, newPassword: e.target.value })}
                />
              </div>
              <div className="input-group mb-3 justify-content-center">
                <button type="submit" className="btn btn-primary w-50">
                  Update Password
                </button>
              </div>
              <div className="input-group mb-3 justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary w-50"
                  onClick={() => setShowPasswordUpdate(false)}
                >
                  Back to Login
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Switch Panel */}
        <div className="switch-content">
          <div className="switch">
            <div className="switch-panel switch-left">
              <h1>Hello, Again</h1>
              <p>We are happy to see you back</p>
              <button
                className="hidden btn text-white w-50 fs-6"
                id="login"
                onClick={() => setIsActive(false)}
                type="button"
              >
                Login
              </button>
            </div>
            <div className="switch-panel switch-right">
              <h1>Welcome</h1>
              <p>Join us</p>
              <button
                className="hidden btn border-white text-white w-50 fs-6"
                id="register"
                onClick={() => setIsActive(true)}
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;