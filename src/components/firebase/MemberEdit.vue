<template>
  <div class="signin">
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="6"
      >
        <h2 class="mt-4">
          全件取得
        </h2>
        <v-data-table
          :headers="headers"
          :items="cities"
        />
        <h2 class="mt-4">
          絞り込み取得（リアルタイム）
        </h2>
        <v-data-table
          :headers="headers"
          :items="realtimeCities"
        />
        <h2 class="mt-4">
          単体取得
        </h2>
        <div>
          {{ city }}
        </div>
        <div class="mt-4">
          <v-btn
            color="primary"
            @click="update"
          >
            更新
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import firebase from 'firebase';
import CityRepository from '@/repositories/cityRepository';

let cityRepository: CityRepository;

export default Vue.extend({
  name: 'Signin',
  data() {
    return {
      cities: [] as any[],
      realtimeCities: [] as any[],
      city: {} as firebase.firestore.DocumentData,
      headers: [
        {text: '首都', value: 'capital'},
        {text: '国名', value: 'country'},
        {text: '名前', value: 'name'},
        {text: '人口', value: 'population'},
        {text: '地方', value: 'regions'},
        {text: '州', value: 'state'},
      ],
    };
  },
  async mounted() {
    cityRepository = new CityRepository();
    try {
      this.cities = await cityRepository.getAll();
      this.realtimeCities = await cityRepository.where('population', '<', 100).getSnapshot();
      this.city = await cityRepository.getCityBy('SF');
    } catch (error) {
      alert(`Error getting document: ${error}`);
    }
  },
  methods: {
    async update() {
      await cityRepository.update('SF', {
        population: Math.floor(Math.random() * Math.floor(100)),
      });
    },
  },
});
</script>
