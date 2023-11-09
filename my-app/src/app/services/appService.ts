import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiService = createApi({
  reducerPath: 'apiService',
  tagTypes: ['apiService'],
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: () => ({})
})

export default apiService
