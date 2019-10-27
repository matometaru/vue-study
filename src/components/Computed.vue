<template>
  <div class="computed">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="証券番号"
            v-model="query.code"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            label="価格の並び順"
            v-model="query.priceOrder"
            :items="input.priceOrder"
            item-text="name"
            item-value="id"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="円以上"
            v-model="query.price"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn depressed large color="primary" @click="resetQuery">リセット</v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="filteredItems"
      >
      </v-data-table>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { PriceOrder } from "@/models/enums"

type Item = {
  code: number;
  name: string;
  price: number;
}

type Data = {
  query: {
    code: string;
    price: string;
    priceOrder: number;
  };
  input: {
    priceOrder: PriceOrder[];
  };
  headers: any[];
  items: Item[];
}

export default Vue.extend({
  name: "Computed",
  data(): Data {
    return {
      query: {
        code: "",
        price: "",
        priceOrder: PriceOrder.NoSelect.id
      },
      input: {
        priceOrder: PriceOrder.values()
      },
      headers: [
        { text: '証券コード', value: 'code' },
        { text: '企業名', value: 'name' },
        { text: '価格', value: 'price' },
      ],
      items: [
        { code: 8591, name: "オリックス", price: 1644 },
        { code: 9861, name: "吉野家", price: 2672 },
        { code: 2752, name: "フジオフード", price: 3040 },
        { code: 3915, name: "テラスカイ", price: 1840 }
      ]
    };
  },
  computed: {
    filteredItems(): Item[] {
      let items = this.items;
      if (this.query.code !== "") {
        items = this.filterByCode(items);
      }
      if (this.query.price !== "") {
        items = this.filterByPrice(items);
      }
      if (this.query.priceOrder !== PriceOrder.NoSelect.id) {
        items = this.sortByPrice(items);
      }
      return items;
    }
  },
  methods: {
    filterByCode(items: Item[]): Item[] {
      return items.filter((item) => {
        return item.code === Number(this.query.code);
      });
    },
    filterByPrice(items: Item[]): Item[] {
      return items.filter((item) => {
        return item.price >= Number(this.query.price);
      });
    },
    sortByPrice(items: Item[]): Item[] {
      if (this.query.priceOrder == PriceOrder.High.id) {
        return items.slice().sort((a, b) => {
          return b.price - a.price;
        });
      }
      // sortは破壊的なのでsliceをかます
      return items.slice().sort((a, b) => {
        return a.price - b.price;
      });
    },
    resetQuery(): void {
      this.query = {
        code: "",
        price: "",
        priceOrder: PriceOrder.NoSelect.id
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
