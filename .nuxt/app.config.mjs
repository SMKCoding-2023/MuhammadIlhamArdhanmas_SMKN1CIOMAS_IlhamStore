
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqa2pyYmVqeHlvbnJ0cWticXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDkxNTksImV4cCI6MjAxNjkyNTE1OX0.oz4W72uDmn6YwBTBSSGx9rRZkhwpitMWBnL0PDf27t8",
  "baseUrl": "https://djkjrbejxyonrtqkbqwy.supabase.co/",
  "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqa2pyYmVqeHlvbnJ0cWticXd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTM0OTE1OSwiZXhwIjoyMDE2OTI1MTU5fQ.IYtBIpw7AkO8aYyAiP2j1nej0dRctT5Gq7-0kb_IXkc",
  "storageUrl": "https://djkjrbejxyonrtqkbqwy.supabase.co/storage/v1",
  "baseStorageUrl": "https://djkjrbejxyonrtqkbqwy.supabase.co/storage/v1/object/public/",
  "nuxt": {
    "buildId": "dev"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
