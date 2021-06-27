const BoilerPlateController = require("../controllers/boilerplate.controller");


module.exports = app =>{
    app.get("/api/trips", BoilerPlateController.findAllBoilerPlates)
    app.post("/api/trips/create", BoilerPlateController.createBoilerPlate)
    app.get("/api/trips/:id", BoilerPlateController.findOneBoilerPlate)
    app.put("/api/trips/update/:id", BoilerPlateController.updateOneBoilerPlate)
    app.delete("/api/trips/delete/:id", BoilerPlateController.deleteBoilerPlate)
}
