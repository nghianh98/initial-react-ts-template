import apiService from 'src/app/services/appService'

export const userApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: 'users',
        method: 'GET'
      })
    })
  })
})
export const { useGetUsersQuery } = userApi
