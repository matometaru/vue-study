<template>
  <div class="computed">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-select
            label="証券番号"
            v-model="query.code"
            :items="input.code"
          >
          </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            label="価格の並び順"
            v-model="query.priceOrder"
            :items="input.priceOrder"
            item-text='name'
            return-object
          >
          </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            label="円以上"
            v-model="query.price"
            :items="input.price"
          >
          </v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn depressed large color="primary" @click="resetQuery">リセット</v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="items"
        :loading="isLoading"
        loading-text="読込中"
      >
      </v-data-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { PriceOrder } from "@/models/enums";
import client from '@/repositories/Repository';

type Item = {
  code: number;
  name: string;
  price: number;
}

type Data = {
  query: {
    code: string;
    price: string;
    priceOrder: PriceOrder;
  };
  input: {
    code: number[];
    price: number[];
    priceOrder: PriceOrder[];
  };
  headers: any[];
  items: Item[];
  isLoading: boolean;
}

export default Vue.extend({
  name: "Computed",
  data(): Data {
    return {
      query: {
        code: "",
        price: "",
        priceOrder: PriceOrder.NoSelect
      },
      input: {
        code: [2752, 3915, 8591, 9861],
        price: [2000, 3000],
        priceOrder: PriceOrder.values()
      },
      headers: [
        { text: '証券コード', value: 'code' },
        { text: '企業名', value: 'name' },
        { text: '価格', value: 'price' },
      ],
      items: [],
      isLoading: false,
    };
  },
  async mounted() {
    // watchのimmediate: trueで初期化。mountedより先に呼ばれる。
    // this.isLoading = true;
    // const { data } = await client.get('/items');
    // this.items = data;
    // this.isLoading = false;
  },
  watch: {
    query: {
      async handler() { 
        console.log("watch start");
        this.isLoading = true;
        let items = [];
        const params: any = {};
        if (this.query.code !== "") {
          params.code = this.query.code;
        }
        if (this.query.price !== "") {
          params.price = this.query.price;
        }
        if (this.query.priceOrder.id !== PriceOrder.NoSelect.id) {
          params.priceOrder = this.query.priceOrder.id;
        }
        const { data } = await client.get('/items', { params });
        this.items = data;
        this.isLoading = false;
      },
      deep: true, // オブジェクトのプロパティが（そのネストの深さに関係なく）変更されると呼ばれるオプション
      immediate: true // コールバックは監視の開始後、直ちに呼ばれるオプション
    },
  },
  methods: {
    resetQuery(): void {
      this.query = {
        code: "",
        price: "",
        priceOrder: PriceOrder.NoSelect
      };
    }
  }
});
</script>

<style scoped lang="scss">
.computed {
  margin: 40px 0 0;
  ul {
    margin-top: 20px;
    list-style: none;
  }
}
</style>
