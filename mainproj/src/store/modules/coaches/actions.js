export default {
    addCoachAction(context, payload) {
        const coachData = {
            id: context.rootGetters.userId,
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            areas: payload.areas,
            hourlyRate: payload.rate,
        };

        context.commit('addCoach', coachData);
    },
};