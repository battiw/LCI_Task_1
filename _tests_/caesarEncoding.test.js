const caesarE = require( "../Ciphers/Caesar/caesarEncoding" );

let text = `This is secret. Message about "_" symbol!`;
let notEngText = `русский алфавит`;
let sumbol = `-!=><()@#$%^&*?/":"1234567890`;
    
test( "should show correct encoding caesar", () => {
     expect( caesarE( text )).toBe( `Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`);
} );     
test( "caesar must not encode non-english alphabet", () => {
    expect( caesarE( notEngText )).toBe( `русский алфавит` );
});

test( "caesar should not encode characters", () => {
    expect( caesarE( sumbol )).toBe( `-!=><()@#$%^&*?/":"1234567890` );
});
