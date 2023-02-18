import { ITicket } from '../../types/ticket'
import { IResponseTickets } from '../../types/response'
import { apiSlice } from '../api'

const ticketAPI = apiSlice.injectEndpoints({
  endpoints: build => ({
    createTicket: build.mutation<ITicket, ITicket>({
      query: body => ({
        url: 'tickets',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tickets'],
    }),
    getTicket: build.query<ITicket, number>({
      query: id => `tickets/${id}`,
    }),
    getTickets: build.query<IResponseTickets, void>({
      query: () => 'tickets',
      providesTags: ['Tickets'],
    }),
    removeTicket: build.mutation<number, boolean>({
      query: id => ({
        url: `tickets/${id}`,
        method: 'DELETE',
      }),
    }),
    updateTicket: build.mutation<ITicket, ITicket>({
      query: body => ({
        url: `tickets`,
        method: 'PUT',
        body,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateTicketMutation,
  useGetTicketQuery,
  useGetTicketsQuery,
  useRemoveTicketMutation,
  useUpdateTicketMutation,
} = ticketAPI