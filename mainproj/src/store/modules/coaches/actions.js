export default {
    async addCoachAction(context, payload) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            areas: payload.areas,
            hourlyRate: payload.rate,
        };

        const response = await fetch(
            `https://vue-http-demo-451f8-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
                method: 'PUT',
                body: JSON.stringify(coachData),
            }
        );

        //const responseData = await response.json();

        if (!response.ok) {
            //error
        }

        context.commit('addCoach', {
            ...coachData,
            id: userId,
        });
    },
};