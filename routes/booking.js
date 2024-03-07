const { createBooking, getAllBookings, getSingleBooking, editBooking, cancelBooking } = require("../controller/Bookings/booking");



const router = require('express').Router();

router.get('/',getAllBookings)
router.get('/:id',getSingleBooking
)

router.post('/',createBooking)


router.put('/:id',editBooking)
router.delete('/:id',cancelBooking)





module.exports = router;