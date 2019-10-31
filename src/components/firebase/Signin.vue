<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input
      v-model="username"
      type="text"
      placeholder="Username"
    >
    <input
      v-model="password"
      type="password"
      placeholder="Password"
    >
    <button>Register</button>
    <p>
      Do you have an account?
      <router-link to="/signin">
        sign in now!!
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import {PriceOrder} from '@/models/enums';
import Item from '@/models/Item';
import Items from '@/models/Items';

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
  name: 'Computed',
  data(): Data {
    return {
      query: {
        code: '',
        price: '',
        priceOrder: PriceOrder.NoSelect,
      },
      input: {
        priceOrder: PriceOrder.values(),
      },
      headers: [
        {text: '証券コード', value: 'code'},
        {text: '企業名', value: 'name'},
        {text: '価格', value: 'price'},
      ],
      items: new Items([
        new Item(8591, 'オリックス', 1644),
        new Item(9861, '吉野家', 2672),
        new Item(2752, 'フジオフード', 3040),
        new Item(3915, 'テラスカイ', 1840),
      ]),
    };
  },
  computed: {
    filteredItems(): Item[] {
      return this.items
          .filterByCode(this.query.code)
          .filterByPrice(this.query.price)
          .sortByPrice(this.query.priceOrder)
          .get();
    },
  },
  methods: {
    resetQuery(): void {
      this.query = {
        code: '',
        price: '',
        priceOrder: PriceOrder.NoSelect,
      };
    },
  },
});
</script>

<style scoped lang="scss">
.computed {
  margin: 40px 0 0;
  ul {
    list-style: none;
    margin-top: 20px;
  }
}
</style>
