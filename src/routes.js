import { Router } from "express";

const routes = Router();

//rota de testes, hello world 
routes.get("/funcionarios", (req, res) => {
return res.send('rota de testes');
})

routes.get("/functions", (req, res) => {
    return res.json(
        items = {
             id: "1", 
            name: "rafael",
            cargo: "desempregado",
            Idade: 22,
            custoPorhoras: 10,
            temLicenca: false,

            },
             items = {
             id: "2", 
            name: "rafael",
            cargo:"desempregado",
            Idade: 22,
            custoPorhoras: 10,
            temLicenca: false,

            },
             items = {
             id: "3", 
            name: "rafael",
            cargo: "desempregado",
            Idade: 22,
            custoPorhoras: 10,
            temLicenca: false,

            },

            
    );
})

export default routes;