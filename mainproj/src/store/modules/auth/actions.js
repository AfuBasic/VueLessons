import { fireBaseKey } from '../../../utils/constants';
import { errorHandler } from '../../../utils/helpers';
import router from '../../../router';

let timer;

export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login',
        });
    },

    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup',
        });
    },

    async auth(context, payload) {
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${fireBaseKey}`;
        const mode = payload.mode;

        if (mode === 'signup') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseKey}`;
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            }),
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = errorHandler(responseData.error.message);
            throw error;
        }

        const tokenExpiresIn = responseData.expiresIn * 1000;
        const tokenExpiration = new Date().getTime() + tokenExpiresIn;

        localStorage.setItem('_token', responseData.idToken);
        localStorage.setItem('_userId', responseData.localId);
        localStorage.setItem('_tokenExpiresIn', tokenExpiration);

        timer = setTimeout(() => {
            context.dispatch('logout');
        }, tokenExpiresIn);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },

    autoLogin(context) {
        const token = localStorage.getItem('_token');
        const userId = localStorage.getItem('_userId');

        //Ensure that the user still has a valid token
        const tokenExpiration = localStorage.getItem('_tokenExpiresIn');
        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(() => {
            context.dispatch('logout');
        }, expiresIn);

        if (token && userId) {
            context.commit('setUser', {
                token,
                userId,
            });
        }
    },

    logout(context) {
        localStorage.removeItem('_token');
        localStorage.removeItem('_userId');
        localStorage.removeItem('_tokenExpiresIn');

        clearTimeout(timer);
        context.commit('setUser', {
            token: null,
            userId: null,
        });

        router.replace('/auth');
    },
};