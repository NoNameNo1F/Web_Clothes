const router = require("express").Router()
const Cart = require("../model/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// ADD NEW CART
router.post("/", verifyToken, async(req, res) => {
    const NewCart = new Cart(req.body);

    try {
        const savedCart = await NewCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// UPDATE CART BY ID
router.put("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE CART
router.delete("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET CART 
router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL CART (ONLY FOR ADMIN) 
router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;