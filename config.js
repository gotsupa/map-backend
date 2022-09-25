export const PORT = process.env.PORT || 3000
export const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || ''

export const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}
