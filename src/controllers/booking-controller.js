const { StatusCodes } = require('http-status-codes');


const { BookingService } = require('../services/index');

const bookingService = new BookingService();

class BookingController {

    constructor() {
    }

    async create (req, res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(200).json({
                message: 'Successfully completed booking',
                success: true,
                err: {},
                data: response
            })
        } catch (error) {
            return res.status(400).json({
                message: error.message,
                success: false,
                err: {},
                data: {}
            });
        }
    }
}

module.exports = BookingController