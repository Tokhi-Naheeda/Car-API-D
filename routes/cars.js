import {Router} from "express"
export const carRouter=Router();
const cars = [
    { id: 1, name: "Volvo", model:"A-16" },
    { id: 2, name: "BMW" , model: "S-36"},
    { id: 3, name: "Audi", model: "N-56" },
  ];

  carRouter.get("/", (req,res)=>{
    res.status(200).json(cars)
  });


  carRouter.get("/:id", (req,res)=>{
    const id=Number(req.params.id);
    const car=cars.find((car)=> car.id===(id));
    if(isNaN(id)){
      return res.status(400).json({message:"Id is invalid"})
    }
    else if(!car){
      return  res.status(404).json({message:"This car do not existiert "});
    }else{
    res.status(200).json(car)
    }
  })

  carRouter.post("/create", (req,res)=>{
    const id=Number(req.body.id);
    const name=req.body.name;
    const model=req.body.model;
    if(!id || !name || !model){
      res.status(400).json({error: "ID, Name and Model are requoerd fields"})
    }
    const existingCar=cars.find(car=> car.id===id)
    if(existingCar){
      res.status(409).json({error: "A car with this id already exists"})
    }
    const newCar={id,name, model};
    cars.push(newCar);
    return res.status(201).json(newCar);
  })


  carRouter.patch("/update/:id", (req,res)=>{
     const id=Number(req.params.id);
     const car=cars.find(car=> car.id===id );
     if(isNaN(id)){
      return res.status(400).json({message:"Id is invalid"})
    }
    if(!car){
      return  res.status(404).json({message:"This car do not existiert "});
    }
    const { name, model } = req.body;
    if (name) car.name = name;
    if (model) car.model = model;
     res.status(200).json(cars);
  })

    carRouter.delete("/:id", (req, res) => {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Id is invalid. ID must be a number." });
      }
      const car = cars.filter(car => car.id !== id);
      if(!car){
        return res.status(404).json({ message: "This car does not exist." });
      }
      
      return res.status(200).json(car);
    });