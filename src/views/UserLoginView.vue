<template>
    <div>
        <div class="container">
            <h1>Login</h1>
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input v-model="username" type="text" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <button @click="goToRegistration" class="btn btn-primary">Register</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login() {
            // Perform authentication logic here, e.g., make an API request to verify credentials
            // For simplicity, let's assume successful login for now
            const isAuthenticated = true;

            if (isAuthenticated) {
                // Redirect to the dashboard upon successful login
                this.$router.push("/dashboard");
            } else {
                // Handle authentication failure, show error message, etc.
            }
        },

        goToRegistration() {
            // Redirect to the registration page
            this.$router.push("/registration");
        },
    },
};
</script>

<style lang="scss" scoped></style>