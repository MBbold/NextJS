import express from "express";
import { usersData } from "./UsersData.js";
// import cors from "./Cors.js";

const app = express();
const port = 8000;
// const corsOptions = {
//     origin: '',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
//   }
// app.use(cors(corsOptions))
app.get("/users/", (req, res) => {
    res.status(200).json({
        users: usersData
    })
})
app.put("/users/", (req, res) => {

})

// app.get("/users/:id", (req, res) => {
//     console.log(req.params.id);
//     if (req.params.id == 1) {
//         res.status(200).json({
//             id: 1, firstname: 'sdf', lastname: 'tss'
//         })
//     } else {
//         res.status(200).json({
//             id: 2, firstname: 'test2', lastname: 'tset'
//         })
//     }
// })

app.listen(port, () => {
    console.log(`on port ${port}`);
})