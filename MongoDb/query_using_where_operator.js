db.merchants.find({ $where: "this.dishes.length == 5" }, { "dishes":1,_id:0 })