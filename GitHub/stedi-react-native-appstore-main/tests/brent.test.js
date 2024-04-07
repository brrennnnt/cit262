const fetch = require("node-fetch2");

it("Should get a login token",async ()=>{

    let name = "";//this is an emptry string

    const response = await fetch('http://localhost:3000/brent');

    name = await response.text();

    expect(name).toBe('Hello Brent');

})