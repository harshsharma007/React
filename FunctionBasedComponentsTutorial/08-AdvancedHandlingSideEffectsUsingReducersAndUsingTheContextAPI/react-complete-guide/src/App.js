import React, { useContext } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  /*
    Commented because the code is moved in auth-context.js file.

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

      if (storedUserLoggedInInformation === '1') {
        setIsLoggedIn(true);
      }
    }, []);

    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };

    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };
  */

  const ctx = useContext(AuthContext);

  return (
    /*
      Commented because the code is moved in auth-context.js file.

      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler
      }}>
    */
    <React.Fragment>
      <MainHeader /*DOESN'T NEED USING CONTEXT isAuthenticated={isLoggedIn} onLogout={logoutHandler}*/ />
      <main>
        {!ctx.isLoggedIn && <Login /*onLogin={ctx.loginHandler}*/ />}
        {ctx.isLoggedIn && <Home /*onLogout={ctx.logoutHandler}*/ />}
      </main>
    </React.Fragment>
    /*</AuthContext.Provider >*/
  );
}

export default App;