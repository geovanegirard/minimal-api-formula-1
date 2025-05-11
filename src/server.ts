import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({logger: true});

server.register(cors, {
    origin: "*"
});

const teams = [
  { id: 1, name: "McLaren", base: "Woking, Reino Unido" },
  { id: 2, name: "Mercedes", base: "Brackley, Reino Unido" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido" },
  { id: 4, name: "Ferrari", base: "Maranello, Itália" },
  { id: 5, name: "Aston Martin", base: "Silverstone, Reino Unido" },
  { id: 6, name: "Alpine", base: "Enstone, Reino Unido" },
  { id: 7, name: "Williams", base: "Grove, Reino Unido" },
  { id: 8, name: "Haas", base: "Kannapolis, Estados Unidos" },
  { id: 9, name: "Stake F1 Team Kick Sauber", base: "Hinwil, Suíça" },
  { id: 10, name: "Visa Cash App Racing Bulls", base: "Faenza, Itália" }
];


const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Charles Leclerc", team: "Ferrari" },
  { id: 3, name: "George Russell", team: "Mercedes" },
  { id: 4, name: "Lando Norris", team: "McLaren" },
  { id: 5, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 6, name: "Pierre Gasly", team: "Alpine" },
  { id: 7, name: "Carlos Sainz", team: "Williams" },
  { id: 8, name: "Esteban Ocon", team: "Haas" },
  { id: 9, name: "Nico Hülkenberg", team: "Stake F1 Team Kick Sauber" },
  { id: 10, name: "Yuki Tsunoda", team: "Visa Cash App Racing Bulls" }
];


server.get("/teams", async(request, response)=>{
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async(request, response)=>{
    response.type("application/json").code(200);
    return {drivers} ;
});

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return { message: "Driver Not Found"};
    } else{
        response.type("application/json").code(200);
        return {driver};
    }
})

server.listen({port: 7777}, () => {
    console.log("Server init");
})