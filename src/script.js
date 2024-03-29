const app = Vue.createApp({
    data() {
        return {
            name: '',
            Email: '',
            nameError: false,
            EmailError: false,
            PassError: false,
            confirmPassError: false,
            confirmPassword: '',
            errorSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>\n'
        }
    },
    methods: {
        checkName() {
            this.nameError = this.name.length < 5;
        },
        checkEmail() {
            this.EmailError = !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.Email);
        },
        checkPass() {
            this.PassError = this.password.length < 8;
        },
        checkConfirmPass() {
            this.confirmPassError = this.password !== this.confirmPassword;
        },
    }
})

app.mount('#app');