const request = require('supertest')
const { app, close } = require('./app')

describe("Test di tutti gli endpoint della mia API", () => {
    it("La GET di / dovrebbe restituire Hello World!", async () => {
        const res = await request(app).get("/");
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual( { message: "Hello World!" } );
    })

    it("La GET di /client dovrebbe restituire Hello Client!", async () => {
        const res = await request(app).get("/client");
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual( { message: "Hello Client!" } );
    })

    it("La GET di /client dovrebbe restituire Hello Pippo!", async () => {
        const res = await request(app).get("/pippo");
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual( { message: "Hello Pippo!" } );
    })

    afterAll( (done) => {
        close();
        done();
    })
});