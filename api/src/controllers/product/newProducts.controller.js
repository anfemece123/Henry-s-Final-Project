const express = require('express');

const { Product } = require("../../db");

createNewProducts = async (req, res) => {
    const {
        title,
        category,
        color,
        season,
        price,
        isOnSale,
        size,
        gender,
        stock,
        image
    } = req.body;
    if (!title || !category || !color || !season || !price || !size || !gender || !image) {
        return res.status(400).send("Missing Data")
    };
    try {
        const [newProduct, created] = await Product.findOrCreate({
            where: { title, category, color, gender },
            defaults: {
                title,
                category,
                color,
                season,
                price,
                isOnSale,
                size,
                gender,
                stock,
                image
            }
        })
        return res.status(201).send([newProduct, created])
    } catch (error) {
        return res.status(404).send(error)
    }

};

module.exports = createNewProducts;

/*  
REMINDER
try {
        await newActivity.addCountry(countryId); //entiendo que va add por que la actividad se crea para varios paises
        await newActivity.setUser(UserId); //como va a crear una actividad por vez, va set
        return res.status(201).send([newActivity, created])
    } catch (error) {
        return res.status(404).send(error)
    }
}); 
*/