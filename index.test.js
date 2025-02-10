const {HiFunction} = require('./index')

test("Verifica que Hola mundo function funciona", ()=> {
     expect(HiFunction()).toBe("Hola mundo.")
})