import withNuxt from './.nuxt/eslint.config.mjs'
import tailwind from 'eslint-plugin-tailwindcss'

export default withNuxt(
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        cssBundle: './app/assets/css/main.css',
      }
    },
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      // Disable the rule that causes issues with Tailwind v4 if necessary
      'tailwindcss/classnames-order': 'warn'
    }
  }
).override('nuxt/vue/rules', {
  rules: {
    'vue/html-self-closing': 'warn'
  }
})
