require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn proof grace forum fortune teach'; 
let testAccounts = [
"0x96ecbda803d7ff7407b6827398fad9fbec8e0604929bf9c343c87e73001612be",
"0xaf5db8da6ae469455a64cda8150b735cb1283849019afe846407edb7b2e76620",
"0x011e99c14a1e598e4d3f7e357371baca62037d1b268cba903a7a61eb5e1eace6",
"0x3223cc8ce6ed9faebda3d7f068082846ca1f5efa280d11e98953204a9a4744f2",
"0x42698f9fdf1a846cb10d424c3c07381fa5667b5d997e7261cd8072410eecd5e5",
"0xb64cb16f6ac879a323781cc1a16d949a6e9f454d4297db9edc27037eac9f2b9a",
"0x50385a0bb4bc5c8a7bacad3736ffeb154a208e3885c5f6f73c473f64d89ae49b",
"0xf293f430cc1a81d0acdf81d746133933fdd45334ec0cb24657ae6d12803e4690",
"0xeeb5150610013d5090e125bc3d70768936865e172dd0fcba0386478ca9329d01",
"0xfcf2cb13d2f7e76b9f3a945c6c18bbf7ecddfa90c66ce2f0677e2273ead321de"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


