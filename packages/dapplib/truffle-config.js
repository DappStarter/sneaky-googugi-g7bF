require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name recipe sad undo install deputy equal genre'; 
let testAccounts = [
"0xe1a8791331299f3ac8405943a20e4bf0a9e6e7d458185eb51f9b67357a441ca5",
"0x42a709204b3791cbf6be38ca55afd35dfd3fd206750e9b569d7317b5475574af",
"0xca6ab697f0a370bd62935043e1cb2ff534bf1d6c9fb222463de177bc54690c57",
"0x76b3ed1c6e6ac0f300db7e6a62ed138ad87ed13c06b387d7c35caec1d1ffd5ff",
"0x8eadb6ff44b445ac913eaf19350cd6bd6e4354e78778944704d58e95795e895b",
"0x84580c8adcbbbda23ca5c16d24d9db6a070115e3555b80ac25e5c4d1da361a6c",
"0x8d07d4b16178641fef9ee7e66b2cb26e5547401a7aa6f8cc21ddc5386d9ea5a8",
"0x0e13b571c8480a4ce140a6b883a0e02ca7605b4d3d387e5c53e080454e9c5a00",
"0xd04220b09d5b5a22a945b6ce6ad266ef35c8a313da83ded01e92b5f7624affd9",
"0xf9ad6bbf19ea8e7da67c977d9be6560e88bec83f608bdd4dd14510228591e1f9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

