import { app } from "./server";

app.get('/lista', (req, res) => {
    res.send('Ok');
});
