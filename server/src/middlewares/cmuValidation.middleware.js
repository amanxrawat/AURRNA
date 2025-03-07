import { z } from 'zod';

const shipmentSchema = z.object({
    name: z.string().min(3),
    add: z.string().min(10),
    pin: z.string().length(6),
    city: z.string().min(2),
    state: z.string().min(2),
    phone: z.string().min(10),
    order: z.string().min(1),
    payment_mode: z.enum(['COD', 'Prepaid']),
    products_desc: z.string().min(10),
    cod_amount: z.number().positive(),
    total_amount: z.number().positive(),
    seller_add: z.string().min(10),
    seller_name: z.string().min(2),
    quantity: z.number().positive(),
    waybill: z.string().min(10),
    seller_gst_tin: z.string().length(15),
    shipping_mode: z.enum(['Surface', 'Air']),
    address_type: z.enum(['home', 'office'])
});

const pickupLocationSchema = z.object({
    name: z.string().optional(),
    add: z.string().optional(),
    city: z.string().optional(),
    pin_code: z.string().optional(),
    country: z.string().optional(),
    phone: z.string().optional()
});

export const validateCMUData = (req, res, next) => {
    try {
        z.object({
            shipments: z.array(shipmentSchema),
            pickup_location: pickupLocationSchema
        }).parse(req.body);
        next();
    } catch (error) {
        throw new ApiError(400, error.errors.join(', '));
    }
};