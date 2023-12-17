const holaMundo = require('./index');

test('Comprobacion del mensaje del saludo', () => {
expect(holaMundo()).toBe('¡Hola Mundo!');
});