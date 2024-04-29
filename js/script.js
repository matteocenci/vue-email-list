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
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                    const mail = response.data.response
                    console.log(mail);
                    this.mailArray.push(mail)
                });
            }
        }
                
                
                

    }
}).mount('#app')