import { z } from 'zod';

const warehouseSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    pin: z.string().length(6),
    return_pin: z.string().length(6),
    // Add validation for other fields
});

export const validateWarehouseData = (req, res, next) => {
    try {
        warehouseSchema.parse(req.body);
        next();
    } catch (error) {
        throw new ApiError(400, error.errors.join(', '));
    }
};