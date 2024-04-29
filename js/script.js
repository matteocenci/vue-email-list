console.log(Vue);

const {createApp} = Vue;

createApp({
    data() {
        return{
            mailArray: []
        }
    },
    created() {
        generateEmails();
    },
    methods: {
        generateEmails: function() {
            
        }

    }
})