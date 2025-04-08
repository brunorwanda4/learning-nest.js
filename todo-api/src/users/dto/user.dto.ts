import z from "zod";

export const CreateUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: " Minimum 8 characters"
    }).max(64),
    name: z.string().min(1, {
        message: " Minimum 1 character"
    }).max(64, {
        message: " maximum characters are 64 "
    }),
    role: z.enum(["USER", "ADMIN"]),
    address: z.object({
        street: z.string().min(1, {
            message: " Minimum 1 character"
        }).max(64, {
            message: " maximum characters are 64 "
        }),
        city: z.string().min(1, {
            message: " Minimum 1 character"
        }).max(64, {
            message: " maximum characters are 64 "
        }),
        state: z.string().min(1, {
            message: " Minimum 1 character"
        }).max(64, {
            message: " maximum characters are 64 "
        }),
        zip: z.string().min(1, {
            message: "Minimum 1 character"
        }).max(64, {
            message: " maximum characters are 64 "
        })
    }).optional(),
})

export type CreateUserDto = z.infer<typeof CreateUserSchema>;