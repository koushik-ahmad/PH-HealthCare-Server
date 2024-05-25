import { z } from "zod";

const createAppointment = z.object({
  body: z.object({
    doctorId: z.string({
      required_error: "Doctor Id is required!",
    }),
    scheduleId: z.string({
      required_error: "Doctor schedule Id is required!",
    }),
  }),
});

export const appointmentValidation = {
  createAppointment,
};
