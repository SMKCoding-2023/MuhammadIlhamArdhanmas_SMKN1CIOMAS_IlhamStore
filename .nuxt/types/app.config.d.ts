
import type { CustomAppConfig } from 'nuxt/schema'
import type { Defu } from 'defu'


declare const inlineConfig = {
  "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqa2pyYmVqeHlvbnJ0cWticXd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDkxNTksImV4cCI6MjAxNjkyNTE1OX0.oz4W72uDmn6YwBTBSSGx9rRZkhwpitMWBnL0PDf27t8",
  "baseUrl": "https://djkjrbejxyonrtqkbqwy.supabase.co/",
  "secretKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqa2pyYmVqeHlvbnJ0cWticXd5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTM0OTE1OSwiZXhwIjoyMDE2OTI1MTU5fQ.IYtBIpw7AkO8aYyAiP2j1nej0dRctT5Gq7-0kb_IXkc",
  "storageUrl": "https://djkjrbejxyonrtqkbqwy.supabase.co/storage/v1",
  "baseStorageUrl": "https://djkjrbejxyonrtqkbqwy.supabase.co/storage/v1/object/public/",
  "nuxt": {
    "buildId": "dev"
  }
}
type ResolvedAppConfig = Defu<typeof inlineConfig, []>
type IsAny<T> = 0 extends 1 & T ? true : false

type MergedAppConfig<Resolved extends Record<string, unknown>, Custom extends Record<string, unknown>> = {
  [K in keyof (Resolved & Custom)]: K extends keyof Custom
    ? unknown extends Custom[K]
      ? Resolved[K]
      : IsAny<Custom[K]> extends true
        ? Resolved[K]
        : Custom[K] extends Record<string, any>
            ? Resolved[K] extends Record<string, any>
              ? MergedAppConfig<Resolved[K], Custom[K]>
              : Exclude<Custom[K], undefined>
            : Exclude<Custom[K], undefined>
    : Resolved[K]
}

declare module 'nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
declare module '@nuxt/schema' {
  interface AppConfig extends MergedAppConfig<ResolvedAppConfig, CustomAppConfig> { }
}
