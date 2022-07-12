import { fireBaseKey } from '../../../utils/constants';
import { errorHandler } from '../../../utils/helpers';

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
            console.log(responseData);
            const error = errorHandler(responseData.error.message);
            throw error;
        }

        localStorage.setItem('_token', responseData.idToken);
        localStorage.setItem('_userId', responseData.localId);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },

    autoLogin(context) {
        const token = localStorage.getItem('_token');
        const userId = localStorage.getItem('_userId');

        if (token && userId) {
            context.commit('setUser', {
                token,
                userId,
                tokenExpiration: null,
            });
        }
    },

    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null,
        });
    },
};