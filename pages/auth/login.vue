<template>
  <div>
    <div class="main-wrapper">
      <div class="account-content">
        <div class="login-wrapper">
          <div class="login-content">
            <div class="login-userset">
              <div class="login-logo">
                <img src="/logo.png" alt="img">
              </div>
              <div class="login-userheading">
                <h3>Sign In</h3>
                <h4>Please login to your account</h4>
              </div>
              <div class="form-login">
                <label>Email</label>
                <div class="form-addons">
                  <input type="text" placeholder="Enter your email address">
                  <img src="~assets/img/icons/mail.svg" alt="img">
                </div>
              </div>
              <div class="form-login">
                <label>Password</label>
                <div class="pass-group">
                  <input type="password" class="pass-input" placeholder="Enter your password">
                  <span class="fas toggle-password fa-eye-slash"></span>
                </div>
              </div>
              <div class="form-login">
                <div class="alreadyuser">
                  <h4>
                    <nuxt-link to="/forgot" class="hover-a">Forgot Password?</nuxt-link>
                  </h4>
                </div>
              </div>
              <div class="form-login">
                <button type="submit" class="btn btn-login">Sign In</button>
              </div>
              <div class="signinform text-center">
                <h4>Don’t have an account? <nuxt-link to="register" class="hover-a">Sign Up</nuxt-link>
                </h4>
              </div>
              <div class="form-setlogin">
                <h4>Or sign up with</h4>
              </div>
              <div class="form-sociallink">
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <img src="~assets/img/icons/google.png" class="me-2" alt="google"> Sign Up using Google </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img src="~assets/img/icons/facebook.png" class="me-2" alt="google"> Sign Up using Facebook </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="login-img">
            <img src="~assets/img/login.jpg" alt="img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  layout: 'auth',
  name: "login",

  middleware: ['guest'],
  data() {
    return {
      form: ({
        email: '',
        password: ''
      })
    };
  },

  methods: {
    submit() {
      this.$auth
        .loginWith('local', {
          data: this.form
        })
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          this.form.errors.set(e.response.data.errors);
        });
    }
  },

}
</script>

<style scoped>

</style>
