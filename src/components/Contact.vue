<template>
  <v-container
    fluid
    px-0
    py-8
    ma-0
    class="accent"
  >
    <v-snackbar
      color="green darken-4"
      v-model="snackbar"
      dark
      class="text-center"
    >Gracias por suscribirte!</v-snackbar>
    <v-form
      dark
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-container>
        <v-card
          style="border-radius:18px"
          @mouseover="show = true"
          @mouseleave="show = false"
          class=" elevation-4 secondary--text font-weight-bold"
          two-line
        >
          <v-row
            justify="center"
            align="center"
          >
            <v-col
              cols="12"
              md="2"
              class="hidden-sm-and-down"
              justify="center"
              align="center"
            >
              <v-img
                class="ma-auto"
                width="80px"
                src="../assets/landing/newsletter.svg"
              ></v-img>
            </v-col>
            <v-col
              cols="12"
              md="7"
              justify="center"
              align="center"
            >
              <span class="josefin font-weight-bold text-uppercase">
                Suscribete y recibe nuestras ultimas promociones</span>
              <v-text-field
                class="josefin"
                :style="
                  $vuetify.breakpoint.smAndDown ? 'width:90%' : 'width:80%'
                "
                :rules="emailRules"
                v-model="email"
                label="Correo Electrónico*"
                required
              ></v-text-field>
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
                  <v-row
                    justify="center"
                    align="center"
                  >
                    <v-col
                      cols="8"
                      justify="center"
                      align="center"
                    >
                      <v-text-field
                        class="josefin"
                        label="Nombre"
                        v-model="name"
                      ></v-text-field>
                      <v-text-field
                        class="josefin"
                        type="tel"
                        v-mask="'+58 (###) ###-####'"
                        v-model="phone"
                        label="Teléfono"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-col>
            <v-col
              md="3"
              cols="12"
              justify="center"
              align="center"
            >
              <v-btn
                :disabled="!valid"
                @click="validate"
                class="my-auto font-weight-bold josefin"
                color="primary"
              >Suscribirse</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    show: false,
    phone: "",
    snackbar: false,
    valid: false,
    name: "",
    email: "",

    emailRules: [
      v => !!v || "E-mail es obligatorio",
      v => /.+@.+\..+/.test(v) || "E-mail debe ser válido"
    ]
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("number", this.number);

        formData.append("email", this.email);

        axios.post("../../public/mail/contact_me.php", formData);
        this.email = null;
        this.name = null;
        this.number = null;
        this.$vs.loading({
          color: "rgb(247, 121, 43)"
        });
        setTimeout(() => {
          this.$vs.loading.close();
          this.snackbar = true;
        }, 2000);
      }
    }
  }
};
</script>
