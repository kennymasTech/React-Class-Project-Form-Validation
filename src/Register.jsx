
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfocircle } from "@fortawesome/free-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "./api/axios";
import { fa0 } from "@fortawesome/free-solid-svg-icons";



const USER_REGEX = /^[A-Z][a-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";



const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [ user, setUser ] = useState()
    const [ validName, setValidName ] = useState(false)
    const [ userFocus, setUserFocus ] = useState(false);

    const [ pwd, setPwd ] = useState('');
    const [ validPwd, setValidPwd ] = useState(false)
    const [ pwdFocus, setPwdFocus ] = useState(false)

    const [ matchPwd, setMatchPwd ] = useState('')
    const [ validMatch, setValidMatch ] = useState(false)
    const [ matchFocus, setMatchFocus ] = useState(false)

    const [ errMsg, setErrMsg ] = useState('')
    const [ success, setSuccess ] = useState(false)


    useEffect(() => {
        useRef.current.focus()
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user))
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg("")
    }, [user, pwd, matchPwd])


  return (
    <>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}> {errMsg} </p>

    <form>
        <label htmlFor="username">
            username: 
            <FontAwesomeIcon  icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"}/>
            <FontAwesomeIcon  icon={faTimes} className={validMatch || matchPwd ? "hide" : "invalid"}/>
        </label>

        <input type="text" 
                id="username" 
                ref={userRef} 
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)} 
                value={user}
                required
                aria-invalid={validName ? "false" : "true" }
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />

                <p id="uidnote" className={userFocus && user && !validName ? "instruction" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfocircle} />
                    3 to 23 characters. <br />
                         Must beging with a <br />
                         letter, number, underscore, hyphens Allowed
                </p>

        <label htmlFor="password">
            password: 
            <FontAwesomeIcon  icon={faCheck} className={validPwd ? "valid" : "hide"}/>
            <FontAwesomeIcon  icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"}/>
        </label>

        <input type="password" 
                id="password" 
                ref={userRef} 
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)} 
                value={user}
                required
                aria-invalid={validName ? "false" : "true" }
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                />

                Must Include UpperCase And LowerCase Letters.
                    a number and special character. <br />
                        Allowed Special Character:
    </form>
    </>
  )
}

export default Register