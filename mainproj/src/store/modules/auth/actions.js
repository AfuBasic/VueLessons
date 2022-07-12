import { fireBaseKey } from '../../../utils/constants';
import { errorHandler } from '../../../utils/helpers';

export default {
    async login(context, payload) {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${fireBaseKey}`, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                }),
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = errorHandler(responseData.error.message);
            throw error;
        }

        console.log(responseData);
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },

    async signup(context, payload) {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseKey}`, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                }),
            }
        );

        const responseData = await response.json();

        if (!response.ok) {
            console.log(responseData);
            const error = errorHandler(responseData.error.message);
            throw error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        });
    },

    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null,
        });
    },
};