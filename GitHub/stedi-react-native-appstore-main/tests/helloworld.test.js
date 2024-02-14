import hello from "../screens/hello"

it("Should say hello",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Brent");
});