import { baseUrl } from '../../../utils/constants';

export default {
    async contactCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const newRequest = {
            id: new Date().toISOString(),
            userEmail: payload.email,
            messages: payload.message,
        };

        const response = await fetch(`${baseUrl}/requests/${userId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest),
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(
                responseData.message || 'Something went wrong, Submission failed!'
            );

            throw error;
        }

        context.commit('addRequest', newRequest);
    },

    async loadRequests(context) {
        const userId = context.rootGetters.userId;
        const response = await fetch(`${baseUrl}/requests/${userId}.json`);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(
                responseData.message || 'An unkown error occured'
            );
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const requestItem = {
                id: key,
                userEmail: responseData[key].userEmail,
                messages: responseData[key].messages,
                coachId: userId,
            };

            requests.push(requestItem);
        }

        context.commit('setRequests', requests);
    },
};