import { z } from 'zod'

export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 characters')
    .regex(/^[+]?[\d\s()-]+$/, 'Please enter a valid phone number'),
  tourType: z
    .string()
    .min(1, 'Please select a tour type'),
  destination: z
    .string()
    .min(1, 'Please select a destination'),
  dates: z
    .string()
    .optional(),
  groupSize: z
    .string()
    .optional(),
  message: z
    .string()
    .max(2000, 'Message must be less than 2000 characters')
    .optional(),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>
