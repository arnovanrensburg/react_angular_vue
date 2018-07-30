

Vue.component('app-hobby', {
    props: ['hobby'],
    template: '<li v-on:click="removeHobby">{{ hobby }}</li>',
    methods: {
        removeHobby() {
            this.$emit('hobbyremoved',this.hobby);

        }
    }
});


new Vue({
    el:'#app',
    data: {
        hobbies: ["Tennis","Golf","Chess"],
        newHobby: "",
        hobbyWasDeleted: false,
    },
    methods: {
        addHobby() {
            this.hobbies.push(this.newHobby);
        },
        removeHobby(hobby) {
            var position = this.hobbies.indexOf(hobby);
            this.hobbies.splice(position,1);
            this.hobbyWasDeleted = true;
        }

    }
});


