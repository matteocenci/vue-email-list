console.log(Vue);

const {createApp} = Vue;

createApp({
    data() {
        return{
            mailArray: []
        }
    },
    created() {
        this.generateEmails();
    },
    methods: {
        generateEmails: function() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                const mail = response.data.response
                console.log(mail);
            });
        }

    }
}).mount('#app')