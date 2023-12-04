import {defineStore} from 'pinia';

export let useTeamStore = defineStore('team',{

    state: () => ({
        name: "",
        spots: 0,
        members:[]
    }),

    actions: {

        async fill() {

            this.$state = await import("@/team.json");

            // import("@/team.json").then(res=>{

                // let response = res.default;

                // this.name = response.name;
                //
                // this.spots = response.spots;
                //
                // this.members = response.members;

                // this.$patch({
                //     name: response.name,
                //     spots: response.spots,
                //     members: response.members
                // })

                // this.$state = response;
            // });
        },

        grow(spots) {

            this.spots = spots;
        }
    },

    getters:{

        spotsRemaining() {

            return this.spots - this.members.length
        }
    }
})