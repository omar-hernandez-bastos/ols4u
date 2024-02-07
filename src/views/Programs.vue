<template>
  <v-container fluid mx-0 pa-0 style=" margin-top:64px; ">
    <navigation-bar></navigation-bar>
    <v-container>
      <h1
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 display-2 font-weight-bold primary--text text-center"
      >
        {{ $t('programs.fulltime') }}
      
      </h1>
      <p
        data-aos="fade-down"
        class="work-sans text-justify"
        v-html="$t('programs.ftP1')"
      ></p>
      <v-row justify="center" align="center">
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t('programs.ftTitle1') }}
          </h2>
          <p class="work-sans text-justify" v-html="$t('programs.ftP2')"></p>
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t('programs.ftTitle2') }}
          </h2>
          <p
            class="work-sans text-start"
            v-html="$t('programs.ftPricingList')"
          ></p>
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t('programs.ftTitle3') }}
          </h2>
          <p class="work-sans text-justify" v-html="$t('programs.ftP3')"></p>
        </v-col>
        <v-col
          data-aos="fade-right"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <v-img
            max-width="90%"
            style="border-radius:18px !important"
            class="mb-4"
            src="../assets/Programs/fulltime.jpg"
          ></v-img>
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t('programs.fTScheduleTitle') }}
          </h2>
          <h3 class="work-sans accent--text">{{ $t('programs.ftMorning') }}</h3>
          <p class="work-sans" v-html="$t('programs.ftMorningP')"></p>
          <h3 class="work-sans accent--text">
            {{ $t('programs.ftAfternoon') }}
          </h3>
          <p class="work-sans" v-html="$t('programs.ftAfternoonP')"></p>
          <h3 class="work-sans accent--text">{{ $t('programs.ftEvening') }}</h3>
          <p class="work-sans" v-html="$t('programs.ftEveningP')"></p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row align="center" justify="center">
        <v-col
          data-aos="fade-left"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/c2.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-down"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/c3.jpg"
          ></v-img>
        </v-col>

        <v-col
          data-aos="fade-up"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/c4.jpg"
          ></v-img>
        </v-col>

        <v-col
          data-aos="fade-right"
          align="center"
          justify="center"
          cols="6"
          sm="3"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/c6.jpg"
          ></v-img>
        </v-col>
      </v-row>

      <h1
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 display-2 font-weight-bold primary--text text-center"
      >
        {{ $t('programs.parttime') }}
       
      </h1>

      <p
        data-aos="fade-down"
        class="work-sans text-justify"
        v-html="$t('programs.ptP1')"
      ></p>
      <v-row class="mb-12" justify="center" align="center">
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/c6.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-right"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t('programs.ptTitle2') }}
          </h2>
          <p
            class="work-sans text-start"
            v-html="$t('programs.ptPricingList')"
          ></p>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <h2 class="work-sans font-weight-bold accent--text">
            {{ $t('programs.ptScheduleTitle') }}
          </h2>
          <h3 class="work-sans accent--text">{{ $t('programs.ptMorning') }}</h3>
          <p class="work-sans" v-html="$t('programs.ptMorningP')"></p>
          <h3 class="work-sans accent--text">
            {{ $t('programs.ptAfternoon') }}
          </h3>
          <p class="work-sans" v-html="$t('programs.ptAfternoonP')"></p>
          <h3 class="work-sans accent--text">{{ $t('programs.ptEvening') }}</h3>
          <p class="work-sans" v-html="$t('programs.ptEveningP')"></p>
        </v-col>
        <v-col
          data-aos="fade-right"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/c1.jpg"
          ></v-img>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row class="my-12" justify="center" align="center">
        <v-col
          data-aos="fade-left"
          cols="12"
          md="4"
          justify="center"
          align="center"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/ipg.jpg"
          ></v-img>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="start"
          align="center"
        >
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.ipgTitle1') }}
          </h2>
          <v-container>
            <p
              class="work-sans text-start"
              v-html="$t('programs.ipgPricingList')"
            ></p>
          </v-container>
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.ipgTitle2') }}
          </h2>
          <h3 class="text-start work-sans accent--text">
            {{ $t('programs.ipgMorning') }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.ipgMorningP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t('programs.ptAfternoon') }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.ipgAfternoonP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t('programs.ipgEvening') }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.ipgEveningP')"
          ></p>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-row class="my-12" justify="center" align="center">
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="start"
          align="center"
        >
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.icpTitle1') }}
          </h2>
          <v-container>
            <p
              class="work-sans text-start"
              v-html="$t('programs.icpPricingList')"
            ></p>
          </v-container>
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.icpTitle2') }}
          </h2>
          <h3 class="text-start work-sans accent--text">
            {{ $t('programs.icpMorning') }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.icpMorningP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t('programs.ptAfternoon') }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.icpAfternoonP')"
          ></p>
          <h3 class="text-start work-sans accent--text">
            {{ $t('programs.icpEvening') }}
          </h3>
          <p
            class="text-start work-sans"
            v-html="$t('programs.icpEveningP')"
          ></p>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="4"
          justify="center"
          align="center"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/ICP.jpg"
          ></v-img>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-container class="my-12">
        <h2 class="text-start work-sans font-weight-bold accent--text">
          {{ $t('programs.privateTitle') }}
        </h2>
        <v-container>
          <p
            class="work-sans text-start"
            v-html="$t('programs.privateList')"
          ></p>
        </v-container>
      </v-container>

      <div class="d-flex justify-center align-center">
        <v-btn
          class="my-12"
          x-large=""
          color="primary"
          width="300"
          rounded=""
          to="/promo"
          >{{ $t('header.enrollment') }}!</v-btn
        >
      </div>

      <v-divider></v-divider>
      <v-container class="screw d-flex justify-center">
        <a
          href="/archievement.pdf"
          class="my-12 text-capitalize text-center work-sans display-2 font-weight-bold primary--text text-center"
        >
          {{ $t('programs.achievement') }}
          <v-icon color="#183290">mdi-file-document-multiple</v-icon>
        </a></v-container
      >

      <v-divider></v-divider>
      <v-container>
        <h1
          data-aos="fade-top"
          class="text-capitalize work-sans my-8 display-2 font-weight-bold primary--text text-center"
        >
          {{ $t('programs.enrollment.enrollmentTitle') }}
        </h1>
        <h2 class="text-center primary--text">  {{ $t('programs.enrollment.enrollmentDescription') }}</h2>
        <h3 class="text-center primary--text mb-4"> {{ $t('programs.enrollment.levels') }}</h3>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  class="title font-weight-bold accent--text text-uppercase text-center"
                >
                  {{ $t('programs.enrollment.term') }}
                </th>
                <th
                  class="font-weight-bold accent--text title text-uppercase text-center"
                >
                  {{ $t('programs.enrollment.registrationDates') }}
                </th>

                <th
                  class="font-weight-bold accent--text title text-uppercase text-center"
                >
                  {{ $t('programs.enrollment.startDate') }}
                </th>
                <th
                  class="font-weight-bold accent--text title text-uppercase text-center"
                >
                  {{ $t('programs.enrollment.endDate') }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in $t('programs.enroll')" :key="index">
                <td class="text-center">
                  {{ $t('programs.enrollment.term') + ' ' + (index + 1) }}
                </td>
                <td class="text-center">{{ item.registrationDates }}</td>
                <td class="text-center">{{ item.startDate }}</td>
                <td class="text-center">{{ item.endDate }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
      <v-divider></v-divider>

      <h1
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 display-2 font-weight-bold primary--text text-center"
      >
        {{ $t('programs.structure.mainTitle') }}
      </h1>
      <v-row class="my-12" justify="center" align="center">
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="center"
          align="center"
        >
          <v-img
            style="border-radius:18px !important"
            src="../assets/Programs/structure.jpg"
          ></v-img>
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.structure.title1') }}
          </h2>
          <v-container>
            <p
              class="work-sans text-start"
              v-html="$t('programs.structure.p1')"
            ></p>
          </v-container>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="start"
          align="center"
        >
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.structure.title2') }}
          </h2>
          <v-container>
            <p
              class="work-sans text-start"
              v-html="$t('programs.structure.p2')"
            ></p>
          </v-container>
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.structure.title3') }}
          </h2>

          <p
            class="text-start work-sans"
            v-html="$t('programs.structure.p3')"
          ></p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <h1
        data-aos="fade-top"
        class="text-capitalize work-sans my-8 display-2 font-weight-bold primary--text text-center"
      >
        {{ $t('programs.curriculum.mainTitle') }}
      </h1>
      <v-img
        style="border-radius:18px !important"
        src="../assets/Programs/curriculum1.jpg"
      ></v-img>
      <h2 class="text-start work-sans font-weight-bold accent--text">
        {{ $t('programs.curriculum.title1') }}
      </h2>
      <p class="text-start work-sans" v-html="$t('programs.curriculum.p1')"></p>
      <v-img
        style="border-radius:18px !important"
        src="../assets/Programs/curriculum.jpg"
      ></v-img>
      <v-row justify="center" align="start">
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="start"
          align="center"
        >
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.curriculum.title2') }}
          </h2>
          <p
            class="text-start work-sans"
            v-html="$t('programs.curriculum.p2')"
          ></p>
        </v-col>
        <v-col
          data-aos="fade-left"
          cols="12"
          md="6"
          justify="start"
          align="center"
        >
          <h2 class="text-start work-sans font-weight-bold accent--text">
            {{ $t('programs.curriculum.title3') }}
          </h2>
          <p
            class="text-start work-sans"
            v-html="$t('programs.curriculum.p3')"
          ></p>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </v-container>
</template>

<script>
import NavigationBar from '../components/layout/NavigationBar';
import Footer from '../components/layout/Footer';
export default {
  components: {
    NavigationBar,
    Footer,
  },
};
</script>

<style lang="stylus" scoped></style>
