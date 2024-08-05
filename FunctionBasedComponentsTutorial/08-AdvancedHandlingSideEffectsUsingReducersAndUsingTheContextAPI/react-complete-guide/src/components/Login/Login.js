import React, { useState, useEffect, useReducer, useContext, useRef } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 6 };
  }
  if (action.type === "USER_BLUR") {
    return { value: state.value, isValid: state.value.length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  /*
    Commented due to useReducer
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
  */
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  });

  /*
    Logic commented because of useReducer
    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log('Checking form validity!');
        setFormIsValid(
          enteredEmail.includes('@') && enteredPassword.trim().length > 6
        );
      }, 500);

      return () => {
        console.log('CleanUp');
        clearTimeout(identifier)
      }
    }, [enteredEmail, enteredPassword]);
  */

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CleanUp");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    /*
      Logic commented because of useEffect

      setEnteredEmail(event.target.value);
      setFormIsValid(
        event.target.value.includes('@') > 6 && enteredEmail.includes('@')
      );
    */

    /*
      setFormIsValid(
        event.target.value.includes('@') && passwordState.isValid
      )
    */
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    /*
      Logic commented because of useEffect
  
      setEnteredPassword(event.target.value);
      setFormIsValid(
        event.target.value.trim().length > 6 && enteredEmail.includes('@')
      );
    */

    /*
      setFormIsValid(
        emailState.isValid && event.target.value.trim().length > 6
      )
    */
  };

  const validateEmailHandler = () => {
    /*
      Commented for useReducer
      setEmailIsValid(enteredEmail.includes('@'));
    */
    dispatchEmail({ type: "USER_BLUR" });
  };

  const validatePasswordHandler = () => {
    /*
      Commented for useReducer
      setPasswordIsValid(enteredPassword.trim().length > 6);
    */
    dispatchPassword({ type: "USER_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(emailState.value, passwordState.value);
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    }
    else if (!emailIsValid) {
      emailInputRef.current.focus();
    }
    else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/*
          <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
        */}
        <Input
          ref={ }
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} /*disabled={!formIsValid}*/>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
