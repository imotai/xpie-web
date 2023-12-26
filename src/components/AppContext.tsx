import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, redirect } from 'react-router-dom';

const savePlainToStorage = (key: string, value: any) => {
    window.localStorage.setItem(key, value.toString());
};

const getPlainFromStorage = (key: string) => {
    return window.localStorage.getItem(key);
};

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const X_COPILOT_URL = 'http://127.0.0.1:7878';

interface IAuthContext {
    login: string | null;
    avatar: string | null;
    isAuth: boolean;
    access_token: string | null;
}

interface IAppContext {
    user: IAuthContext | null;
}

const AppContext = React.createContext({} as IAppContext);
function useAppContext() {
    return React.useContext(AppContext);
}

function AppContextProvider({ children }) {
    const navigate = useNavigate();
    const [appContext, setAppContext] = React.useState<IAppContext>({} as IAppContext);
    const { state, search } = useLocation();
    const params = new URLSearchParams(search);
    const [code, setCode] = useState<string>(params.get('code'));
    const [provider, setProvider] = useState<string>(params.get('state'));
    const token = getPlainFromStorage(ACCESS_TOKEN_KEY);
    const [loginState, loginWithCodeFn] = useAsyncFn(async (code, provider) => {
        if (code && provider) {
            const response = await fetch(X_COPILOT_URL + '/api/auth/login?provider=' + provider + '&code=' + code, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data['access_token']) {
                savePlainToStorage(ACCESS_TOKEN_KEY, JSON.stringify(data));
                const newAppContext = {
                    user: {
                        login: data['login'],
                        avatar: data['avatar_url'],
                        isAuth: true,
                        access_token: data['access_token'],
                    },
                } as IAppContext;
                setAppContext(newAppContext);
                navigate('/');
            }
        }
    });
    useEffect(() => {
        if (code && provider) {
            const loginTimeoutId = setTimeout(() => {
                loginWithCodeFn(code, provider);
            }, 100);
            return () => clearTimeout(loginTimeoutId);
        }
    }, [code, provider]);
    return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
}

export {
    AppContext,
    useAppContext,
    AppContextProvider
}
