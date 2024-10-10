<template>
  <v-container
    style=" margin-top:64px; "
    id="contactFrom"
    ref="contactForm"
    class="d-flex align-center justify-center"
    fluid
    pa-0
    mx-0
  >
    <navigation-bar></navigation-bar>
    <v-snackbar
      color="green darken-4"
      v-model="snackbar"
      dark
      class="text-center"
      >{{ text }}</v-snackbar
    >

    <v-container style="height:100%">
      <v-row style="height:100%" justify="center" align="start">
        <v-col cols="12" md="6" justify="center" align="center">
          <h1 class="text-start livvic font-weight-bold white--text">
            {{ $t("contact.t1") }}
          </h1>
          <div class="livvic white--text simply">
            {{ $t("contact.p1") }}
          </div>
          <v-form dark ref="form" v-model="valid" lazy-validation>
            <v-text-field
              dark
              v-model="name"
              :rules="nameRules"
              :label="$t('contact.l1')"
              required
            ></v-text-field>
            <v-text-field
              dark
              type="tel"
              v-mask="'+### (###) ###-####'"
              v-model="phone"
              :counter="10"
              :label="$t('contact.l2')"
              required
            ></v-text-field>
            <v-text-field
              dark
              v-model="email"
              :rules="emailRules"
              :label="$t('contact.l3')"
              required
            ></v-text-field>

            <v-textarea
              dark
              v-model="additionalInfo"
              row="4"
              :label="$t('contact.l4')"
              :rules="additionalInfoRules"
            ></v-textarea>

            <v-btn
              aria-label="submit"
              block
              x-large
              color="accent"
              class="elevation-8 font-weight-bold mr-4"
              :disabled="!valid"
              @click="validate"
            >
              {{ $t("contact.button1") }}</v-btn
            >
          </v-form>
        </v-col>

        <v-col cols="12" md="6" justify="center" align="center">
          <h1 class="text-end livvic font-weight-bold white--text">
            {{ $t("contact.t2") }}
          </h1>
          <v-btn
            aria-label="gps"
            color="white"
            class="livvic font-weight-bold white--text"
            text
            href="https://g.page/OrlandoLanguageSchool?share"
            >7680 Universal Boulevard #410, Orlando, FL 32819</v-btn
          >

          <div class="d-flex justify-center align-center">
            <v-row justify="center" align="center">
              <v-col justify="center" align="center">
                <v-btn
                  aria-label="phone"
                  dark
                  x-large
                  color="accent"
                  href="tel:+14073700639"
                >
                  <v-icon dark>mdi-phone</v-icon> 1 (407) 370-0639
                </v-btn>
              </v-col>
              <v-col justify="center" align="center">
                <v-btn
                  aria-label="email"
                  outlined
                  dark
                  x-large
                  href="mailto:info@ols4u.com"
                  class="ma-4 font-weight-bold"
                  color="white"
                >
                  <v-icon dark>mdi-email</v-icon>info@ols4u.com
                </v-btn>
              </v-col>
            </v-row>
          </div>
          <iframe
            v-if="!$vuetify.breakpoint.smAndDown"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.870012536971!2d-81.46761538574512!3d28.45333459892126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ef8c8718b79%3A0x3cb5c547e196190b!2sOrlando%20Language%20School!5e0!3m2!1ses-419!2sve!4v1584472097736!5m2!1ses-419!2sve"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
          <iframe
            v-else
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.870012536971!2d-81.46761538574512!3d28.45333459892126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ef8c8718b79%3A0x3cb5c547e196190b!2sOrlando%20Language%20School!5e0!3m2!1ses-419!2sve!4v1584472097736!5m2!1ses-419!2sve"
            width="300"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import NavigationBar from "../components/layout/NavigationBar";

export default {
  components: {
    NavigationBar
  },
  data() {
    return {
      valid: true,
      zip: "",
      snackbar: false,
      text: "Thanks, in the next 24 hours we will contact you.",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 20) || "Name must be less than 20 characters"
      ],
      lossRules: [
        v => !!v || "Loss Cause is required",
        v =>
          (v && v.length <= 30) || "Loss Cause must be less than 30 characters"
      ],
      addressRules: [
        v => !!v || "Address is required",
        v => (v && v.length <= 30) || "Address must be less than 10 characters"
      ],
      zipRules: [
        v => !!v || "Zip is required",
        v => (v && v.length == 5) || "Zip must be 5 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      address: "",
      email: "",
      phone: "",
      name: "",
      lossCause: "",
      additionalInfo: "",
      additionalInfoRules: [
        v => !!v || "Message is required",
        v => (v && v.length <= 200) || "Message must be valid "
      ],
      propertyType: [],
      itemsProperty: ["Commercial", "Residential"],
      typeOfLoss: [],
      itemsTypeOfLoss: [
        "Water Damage Mitigation",
        "Fire Damage Restoration",
        "Mold Remediation",
        "Sewage Cleanup",
        "Smoke",
        "Odor",
        "Other"
      ]
    };
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        this.$vs.loading({
          color: "rgb(247, 121, 43)"
        });

        // Datos del formulario
        const formData = {
          name: this.name,
          email: this.email,
          message: this.additionalInfo
        };

        try {
          // Enviar solicitud a la Lambda
          const response = await fetch('https://huz5r065k5.execute-api.us-east-1.amazonaws.com/default/resendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (response.ok) {
      await response.json();
         
            this.snackbar = true;
            this.text = 'Emails sent successfully!';
          } else {
            
            this.text = 'Error sending email';
          }
        } catch (error) {
          
          this.text = 'Error sending email';
        } finally {
          this.$vs.loading.close();
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
#contactFrom {
  min-height: 90vh;
  background-image: linear-gradient(rgba(198, 80, 11, 0.98), rgba(198, 80, 11, 0.95)), url('../assets/orlando.jpg');
  background-position: center center;
  background-size: cover;
}

h1 {
  overflow: hidden;
  text-align: center;
}

h1:before, h1:after {
  background-color: #ffffff;
  content: '';
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

h1:before {
  right: 0.5em;
  margin-left: -50%;
}

h1:after {
  left: 0.5em;
  margin-right: -50%;
}

.v-application .error--text {
  color: white !important;
  caret-color: white !important;
}
</style>
