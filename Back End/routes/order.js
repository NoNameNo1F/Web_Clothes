const router = require("express").Router()
const Order = require("../model/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// ADD NEW ORDER
router.post("/", verifyToken, async(req, res) => {
    const NewOrder = new Order(req.body);

    try {
        const savedOrder = await NewOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE ORDER BY ID (ADMIN)
router.put("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE CART
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL CART (ONLY FOR ADMIN) 
router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET MONTHLY INCOME
// router.get("/income", verifyTokenAndAdmin, async(req, res) => {
//     const date = new Date();
//     const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
//     const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

//     try {
//         const income = await Order.aggregate([{
//                 $smatch: {
//                     createAt: {
//                         $gte: previousMonth
//                     }
//                 }
//             },

//             {
//                 $project: {
//                     month: { $month: "$createdAt" },
//                     sale: "$amount"
//                 },

//                 $group: {
//                     _id: "$month",
//                     total: { $sum: "$sales" }
//                 }
//             }
//         ])

//         res.status(200).json(income);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// })

module.exports = router;