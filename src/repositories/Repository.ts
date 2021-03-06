import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const baseDomain = 'http://localhost:8080';
const baseURL = `${baseDomain}`;

const client = axios.create({
  baseURL,
});
client.interceptors.request.use(request => {
  performance.mark('start');
  return request;
});
client.interceptors.response.use(
  // 2XX範囲内のステータスコード
  (response) => {
    performance.mark('finish');
    performance.measure('request-to-response', 'start', 'finish');
    console.log(`${performance.getEntriesByName('request-to-response')[0].duration}`);
    return response;
  },
  // 2XX範囲外のステータスコード
  (error) => {
    console.dir(error);
    return Promise.reject(error);
  }
);
export default client;

// モック
const mockAxios = new MockAdapter(client);

// アイテム(10000)取得
mockAxios.onGet('/items2').reply(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve([400, [{message: "Not found"}]]);
    }, 1000);
  });
});
// // アイテム(8591)取得
// mockAxios.onGet('/items', {params: {code: 8591}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([200, [{code: 8591, name: 'オリックス', price: 1644}]]);
//     }, 1000);
//   });
// });
// // アイテム(9861)取得
// mockAxios.onGet('/items', {params: {code: 9861}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([200, [{code: 9861, name: '吉野家', price: 2672}]]);
//     }, 1000);
//   });
// });
// // アイテム(2752)取得
// mockAxios.onGet('/items', {params: {code: 2752}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([200, [{code: 2752, name: 'フジオフード', price: 3040}]]);
//     }, 1000);
//   });
// });
// // アイテム(3915)取得
// mockAxios.onGet('/items', {params: {code: 3915}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([200, [{code: 3915, name: 'テラスカイ', price: 1840}]]);
//     }, 1000);
//   });
// });
// // 2000円以上のアイテム取得
// mockAxios.onGet('/items', {params: {price: 2000}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([
//         200,
//         [
//           {code: 9861, name: '吉野家', price: 2672},
//           {code: 2752, name: 'フジオフード', price: 3040},
//         ],
//       ]);
//     }, 1000);
//   });
// });
// // 3000円以上のアイテム取得
// mockAxios.onGet('/items', {params: {price: 3000}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([200, [{code: 2752, name: 'フジオフード', price: 3040}]]);
//     }, 1000);
//   });
// });
// // アイテム一覧取得(価格高い順)
// mockAxios.onGet('/items', {params: {priceOrder: 1}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([
//         200,
//         [
//           {code: 2752, name: 'フジオフード', price: 3040},
//           {code: 9861, name: '吉野家', price: 2672},
//           {code: 3915, name: 'テラスカイ', price: 1840},
//           {code: 8591, name: 'オリックス', price: 1644},
//         ],
//       ]);
//     }, 2000);
//   });
// });
// // アイテム一覧取得(価格安い順)
// mockAxios.onGet('/items', {params: {priceOrder: 2}}).reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([
//         200,
//         [
//           {code: 8591, name: 'オリックス', price: 1644},
//           {code: 3915, name: 'テラスカイ', price: 1840},
//           {code: 9861, name: '吉野家', price: 2672},
//           {code: 2752, name: 'フジオフード', price: 3040},
//         ],
//       ]);
//     }, 2000);
//   });
// });
// // アイテム一覧取得（AxiosMoackのparamsの判定不具合があるので全件取得は最後に書く）
// mockAxios.onGet('/items').reply(() => {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve([
//         200,
//         [
//           {code: 8591, name: 'オリックス', price: 1644},
//           {code: 9861, name: '吉野家', price: 2672},
//           {code: 2752, name: 'フジオフード', price: 3040},
//           {code: 3915, name: 'テラスカイ', price: 1840},
//         ],
//       ]);
//     }, 2000);
//   });
// });
