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
            item-text='name'
            return-object
          >
          </v-select>
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
import { PriceOrder } from "@/models/enums";
import Item from "@/models/Item";
import Items from "@/models/Items";

type Data = {
  query: {
    code: string;
    price: string;
    priceOrder: PriceOrder;
  };
  input: {
    priceOrder: PriceOrder[];
  };
  headers: any[];
  items: Items;
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
        priceOrder: PriceOrder.values()
      },
      headers: [
        { text: '証券コード', value: 'code' },
        { text: '企業名', value: 'name' },
        { text: '価格', value: 'price' },
      ],
      items: new Items([
        new Item(8591, "オリックス", 1644),
        new Item(9861, "吉野家", 2672),
        new Item(2752, "フジオフード", 3040),
        new Item(3915, "テラスカイ", 1840),
      ])
    };
  },
  computed: {
    filteredItems(): Item[] {
      return this.items
        .filterByCode(this.query.code)
        .filterByPrice(this.query.price)
        .sortByPrice(this.query.priceOrder)
        .get();
    }
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
