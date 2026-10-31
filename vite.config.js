import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  return {
    // Se estiver a rodar localmente ('serve' / npm run dev), usa '/'
    // Se estiver a compilar para producao ('build' / GitHub Actions), usa o nome do repositorio
    base: command === 'serve' ? '/' : '/Cicero-Thallys-Ferreira-de-Oliveira/',
    plugins: [
      vue(),
      tailwindcss(),
    ],
  }
})