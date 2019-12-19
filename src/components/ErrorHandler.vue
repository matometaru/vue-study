<template>
  <div id="app">
    <h1>Test Error / Warn Capturing</h1>
    <button @click="click">API</button>
    <div class="buttons">
      <div>
        <button
          :disabled="test === 'ErrorCapturedInComponent'"
          @click="test = 'ErrorCapturedInComponent'"
        >
          Error Captured in Component
        </button>
        <pre>
          <code>
            Captured in component#errorCaptured: mounted hook Error: from lifecycle hook
              at VueComponent.mounted (ErrorInLifecycleHook.vue?5fb1:9)
              at invokeWithErrorHandling (vue.runtime.esm.js?2b0e:1854)
          </code>
        </pre>
        <pre>
          <code>
          errorCaptured(err, vm, info) {
            console.log(`Captured in component#errorCaptured: ${info}`, err);
            return false;
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInAsyncLifecycleHook'"
          @click="test = 'ErrorInAsyncLifecycleHook'"
        >
          Error in Async Lifecycle Hook
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: mounted hook (Promise/async) Error: from async lifecycle hook
            at _callee$ (ErrorInAsyncLifecycleHook.vue?6cc0:6)
            at tryCatch (runtime.js?96cf:45)
          </code>
        </pre>
        <pre>
          <code>
          async mounted() {
            throw new Error('from async lifecycle hook');
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInComputedFunction'"
          @click="test = 'ErrorInComputedFunction'"
        >
          Error in Computed Function
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: render Error: from computed function
            at VueComponent.errorProperty (ErrorInComputedFunction.vue?5f17:16)
            at Watcher.get (vue.runtime.esm.js?2b0e:4473)
          </code>
        </pre>
        <pre>
          <code>
          computed: {
            errorProperty() {
              if (this.value > 0) {
                throw new Error('from computed function');
              }
              return this.value;
            },
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInDataFunction'"
          @click="test = 'ErrorInDataFunction'"
        >
          Error in Data Function
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: data() Error: from data function
            at VueComponent.data (ErrorInDataFunction.vue?a36d:9)
            at getData (vue.runtime.esm.js?2b0e:4742)
          </code>
        </pre>
        <pre>
          <code>
          data() {
            throw new Error('from data function');
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInDirectiveHook'"
          @click="test = 'ErrorInDirectiveHook'"
        >
          Error in Directive Hook
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: directive error inserted hook Error: from directive hook
            at inserted (ErrorInDirectiveHook.vue?50d1:13)
          </code>
        </pre>
        <pre>
          <code>
          directives: {
            error: {
              inserted() {
                throw new Error('from directive hook');
              },
            },
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInFilterFunction'"
          @click="test = 'ErrorInFilterFunction'"
        >
          Error in Filter Function
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: render Error: from filter function
            at test (ErrorInFilterFunction.vue?e0a0:10)
          </code>
        </pre>
        <pre>
          <code>
          filters: {
            test() {
              throw new Error('from filter function');
            },
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInLifecycleHook'"
          @click="test = 'ErrorInLifecycleHook'"
        >
          Error in Lifecycle Hook
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: mounted hook Error: from lifecycle hook
            at VueComponent.mounted (ErrorInLifecycleHook.vue?5fb1:9)
          </code>
        </pre>
        <pre>
          <code>
          mounted() {
            throw new Error('from lifecycle hook');
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInMethodCalledInTemplate'"
          @click="test = 'ErrorInMethodCalledInTemplate'"
        >
          Error in Method Called in Template
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: render Error: from method called in template
            at VueComponent.test (ErrorInMethodCalledInTemplate.vue?9688:10)
          </code>
        </pre>
        <pre>
          <code>
          methods: {
            test() {
              throw new Error('from method called in template');
            },
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInNextTickCallback'"
          @click="test = 'ErrorInNextTickCallback'"
        >
          Error in 'nextTick' Callback
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: nextTick Error: from nextTick callback
            at VueComponent.eval (ErrorInNextTickCallback.vue?fa32:10)
          </code>
        </pre>
        <pre>
          <code>
          mounted() {
            this.$nextTick(() => {
              throw new Error('from nextTick callback');
            });
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInSetTimeoutCallback'"
          @click="test = 'ErrorInSetTimeoutCallback'"
        >
          Error in 'setTimeout' Callback
        </button>
        <pre>
          <code>
          Captured in error EventListener Error: from setTimeout callback
            at eval (ErrorInSetTimeoutCallback.vue?9e0b:10)
          </code>
        </pre>
        <pre>
          <code>
          mounted() {
            setTimeout(() => {
              throw new Error('from setTimeout callback');
            });
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInUnreturnedPromise'"
          @click="test = 'ErrorInUnreturnedPromise'"
        >
          Error in Unreturned Promise
        </button>
        <pre>
          <code>
          Captured in unhandledrejection EventListener Error: from unreturned promise
            at _callee$ (ErrorInUnreturnedPromise.vue?b3c5:11)
          </code>
        </pre>
        <pre>
          <code>
          methods: {
            async test() {
              throw new Error('from unreturned promise');
            },
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorInWatcherFunction'"
          @click="test = 'ErrorInWatcherFunction'"
        >
          Error in Watcher Function
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: callback for watcher "value" Error: from watcher function
            at VueComponent.value (ErrorInWatcherFunction.vue?cf96:15)
          </code>
        </pre>
        <pre>
          <code>
          watch: {
            value() {
              throw new Error('from watcher function');
            },
          },
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorNoSuchComponent'"
          @click="test = 'ErrorNoSuchComponent'"
        >
          No Such Component
        </button>
        <pre>
          <code>
          Captured in Vue.config.warnHandler
            Unknown custom element: &lt;NoSuchComponent&gt;
          </code>
        </pre>
        <pre>
          <code>
          &lt;template&gt;
            &lt;div&gt;
              No Such Component
              &lt;NoSuchComponent /&gt;
            &lt;/div&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            name: &#039;ErrorNoSuchComponent&#039;,
          };
          &lt;/script&gt;
          </code>
        </pre>
      </div>
      <div>
        <button
          :disabled="test === 'ErrorNoSuchProperty'"
          @click="test = 'ErrorNoSuchProperty'"
        >
          No Such Property
        </button>
        <pre>
          <code>
            Captured in Vue.config.warnHandler
            Property or method "noSuchProperty" is not defined on the instance but referenced during render.
            Make sure that this property is reactive, either in the data option, or for class-based components,
            by initializing the property.
          </code>
        </pre>
        <pre>
          <code>
          &lt;template&gt;
            &lt;div&gt;No Such Property { { noSuchProperty } }&lt;/div&gt;
          &lt;/template&gt;

          &lt;script&gt;
          export default {
            name: &#039;ErrorNoSuchProperty&#039;,
          };
          &lt;/script&gt;
          </code>
        </pre>
      </div>
      <div>
        <button @click="testDomClick">
          Error in DOM Event Handler
        </button>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: v-on handler Error: from DOM event handler
            at VueComponent.testDomClick (ErrorHandler.vue?c078:422)
          </code>
        </pre>
        <pre>
          <code>
          methods: {
            testDomClick() {
              throw new Error('from DOM event handler');
            },
          }
          </code>
        </pre>
      </div>
      <div>
        <CustomEventComponent @test="testCustomEvent">
          Error in Custom Event Handler
        </CustomEventComponent>
        <pre>
          <code>
          Captured in Vue.config.errorHandler: v-on handler Error: from custom event handler
            at VueComponent.testCustomEvent (ErrorHandler.vue?c078:431)
          </code>
        </pre>
        <pre>
          <code>
          methods: {
            testCustomEvent() {
              throw new Error('from custom event handler');
            },
          },
          </code>
        </pre>
      </div>
    </div>
    <div>
      <component
        :is="test"
        v-if="test"
      />
    </div>
  </div>
</template>

<script>
import CustomEventComponent from '@/components/errors/CustomEventComponent';
import ErrorCapturedInComponent from '@/components/errors/ErrorCapturedInComponent';
import ErrorInAsyncLifecycleHook from '@/components/errors/ErrorInAsyncLifecycleHook';
import ErrorInComputedFunction from '@/components/errors/ErrorInComputedFunction';
import ErrorInDataFunction from '@/components/errors/ErrorInDataFunction';
import ErrorInDirectiveHook from '@/components/errors/ErrorInDirectiveHook';
import ErrorInFilterFunction from '@/components/errors/ErrorInFilterFunction';
import ErrorInLifecycleHook from '@/components/errors/ErrorInLifecycleHook';
import ErrorInMethodCalledInTemplate from '@/components/errors/ErrorInMethodCalledInTemplate';
import ErrorInNextTickCallback from '@/components/errors/ErrorInNextTickCallback';
import ErrorInSetTimeoutCallback from '@/components/errors/ErrorInSetTimeoutCallback';
import ErrorInUnreturnedPromise from '@/components/errors/ErrorInUnreturnedPromise';
import ErrorInWatcherFunction from '@/components/errors/ErrorInWatcherFunction';
import ErrorNoSuchComponent from '@/components/errors/ErrorNoSuchComponent';
import ErrorNoSuchProperty from '@/components/errors/ErrorNoSuchProperty';
import client from '@/repositories/Repository';

export default {
  name: 'ErrorHandler',
  components: {
    CustomEventComponent,
    ErrorCapturedInComponent,
    ErrorInAsyncLifecycleHook,
    ErrorInComputedFunction,
    ErrorInDataFunction,
    ErrorInDirectiveHook,
    ErrorInLifecycleHook,
    ErrorInFilterFunction,
    ErrorInNextTickCallback,
    ErrorInMethodCalledInTemplate,
    ErrorInSetTimeoutCallback,
    ErrorInUnreturnedPromise,
    ErrorInWatcherFunction,
    ErrorNoSuchComponent,
    ErrorNoSuchProperty,
  },
  data() {
    return {
      test: null,
    };
  },
  async mounted() {
    // const params = { code: 10000 };
    // const {data} = await client.get('/items', {params});
  },
  methods: {
    async click() {
      throw 'aaaa';
      // await client.get('/items2');
    },
    testDomClick() {
      // throw new Error('from DOM event handler');
      class ValidationError extends Error {
        constructor(message) {
          super(message);
          this.name = "ValidationError";
        }
      }
      throw new ValidationError("IDの入力が必須です");
    },
    testCustomEvent() {
      throw new Error('from custom event handler');
    },
  },
};
</script>

<style scoped>
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

#app > * {
  margin-top: 1em;
}

.buttons {
  align-content: center;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
}

button {
  font-size: 1.2em;
  border: 1px solid #ddd;
  padding: 5px;
}

pre {
  width: 100%;
  margin-top: 10px;
  text-align-last: left;
}

code {
  display: block!important;
}
</style>
