<template>
    <div>
        <form @submit.prevent="signIn">
            <h2>Log in:</h2>
            <div>
                <input type="text" id="username" v-model="Username" required placeholder="Username"/>
            </div>
            <div>
                <input type="password" id="password" v-model="Password" required placeholder="Password"/>
            </div>
            <button type="submit">
                Log in
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Username: "",
            Password: "",
        };
    },

    methods: {
        async signIn() {
            try {
                const response = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: this.Username,
                        password: this.Password,
                    }),
                });

                const data = await response.json();
                if (data.statusCode === 200) {
                    // Set the token in local storage
                    localStorage.setItem("authToken", data.token);
                    this.$router.push("/");
                } else {
                    console.log("Login failed:", data.message);
                    alert("Username or password is invalid");
                }
            } catch (error) {
                console.error("Error during login:", error);
                alert("Error during login. Please try again.");
            }
        },
    },
};
</script>

<style scoped>
div {
    text-align: center;
}
h2 {
    color: #26453E;
}
form {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    line-height: 1.5em;
}

input {
    padding: 1em;
    border-radius: 25px;
    width: 400px;
    background-color: #EDEDED;
    margin: 1em;
}

button {
    margin-top: 1em;
    padding: 1em;
    border-radius: 25px;
    background-color: #26453E;
    color: #E4BA78;
    width: 200px;
    cursor: pointer;
}

button:hover {
    background-color: #E4BA78;
    color: #26453E;
    box-shadow: 1px 1px 5px black;
}

</style>