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

    async loadCoaches(context) {
        const response = await fetch(
            `https://vue-http-demo-451f8-default-rtdb.firebaseio.com/coaches.json`
        );

        if (!response.ok) {
            //...
        }

        const responseData = await response.json();

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                areas: responseData[key].areas,
                hourlyRate: responseData[key].hourlyRate,
            };

            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
    },
};