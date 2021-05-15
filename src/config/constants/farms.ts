import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'BANANA',
    lpAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Banana token
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    },
    tokenSymbol: 'BANANA-SPLIT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Banana Token
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BANANA-BNB LP',
    lpAddresses: {
      97: '0x90fc86a7570063a9ea971ec74f01f89569ad6237', // BANANA-BNB BananaPair
      56: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713',
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Banana Token
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    },
    style: 'featured',
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BANANA-BUSD LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BANANA-BUSD BananaPair
      56: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x603c7f932ED1fc6575303D8Fb018fDCBb0f39a95',
    },
    style: 'featured',
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x7a51d580c5d393e281f133e0af0c7156989ca17e', // BUSD-BNB BananaPair
      56: '0x51e6d27fa57373d8d4c256231241053a70cb1d93',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0x66dc37a4efe740d20e13ebc6bf6b238d9655cbbc', // ETH-BNB BananaPair
      56: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378', // Binance Peg ETH
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 37,
    lpSymbol: 'BFT-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x1696A65eA693593Ba771b5A7aFC54C8eaf4C20dE', // BFT-BNB BananaPair
    },
    tokenSymbol: 'BFT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xa4f93159ce0a4b533b443c74b89967c60a5969f8', // BFT Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 28,
    lpSymbol: 'NUTS-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x789fd04BFbC64169104466Ee0d48716E0452Bcf6', // NUTS-BNB BananaPair
    },
    tokenSymbol: 'NUTS',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556', // NUTS Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 41,
    lpSymbol: 'AUTO-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x649a5ad5135b4bd287e5aca8d41f4d5e1b52af5c', // AUTO-BNB BananaPair
    },
    tokenSymbol: 'AUTO',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xa184088a740c695e156f91f5cc086a06bb78b827', // AUTO Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 42,
    lpSymbol: 'BXBTC-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xc2feF4BEC915315beF9f6E8a06b2516E64D29D06', // BXBTC-BNB BananaPair
    },
    tokenSymbol: 'BXBTC',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xab111d5948470ba73d98d66bbdf2798fbe093546', // AUTO Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 50,
    lpSymbol: 'NRV-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x876ba49c4f438643ab33f871e14a54cbb897df49', // NRV-BNB BananaPair
    },
    tokenSymbol: 'NRV',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096', // WATCH Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 43,
    lpSymbol: 'VBSWAP-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xD59b4f88Da3b5cfc70CdF9B61c53Df475d4D4f47', // VBSWAP-BNB BananaPair
    },
    tokenSymbol: 'VBSWAP',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x4f0ed527e8a95ecaa132af214dfd41f30b361600', // VBSWAP Token
    },
    style: 'warning',
    disableApr: true,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 44,
    lpSymbol: 'WATCH-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xa00A91fBB39051e2a6368424A93895c3f1F2290b', // WATCH-BNB BananaPair
    },
    tokenSymbol: 'WATCH',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0', // WATCH Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 30,
    lpSymbol: 'KEYFI-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x7A8ACAEAfC4Fa051De4EAbff8D1abdD0388aE08a', // KEYFI-BNB BananaPair
    },
    tokenSymbol: 'KEYFI',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x4b6000f9163de2e3f0a01ec37e06e1469dbbce9d', // KEYFI Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 31,
    lpSymbol: 'ONT-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x924D3f2F94618e8Ee837d4C2b8d703F0de12a57e', // ONT-BNB BananaPair
    },
    tokenSymbol: 'ONT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335', // ONT Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 27,
    lpSymbol: 'JDI-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xfb6063f29AF6dcd1fc03A8E221c6D91DEabbE764', // JDI-BNB BananaPair
    },
    tokenSymbol: 'JDI',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x0491648c910ad2c1afaab733faf71d30313df7fc', // JDI Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 49,
    lpSymbol: 'FTM-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x47A0B7bA18Bb80E4888ca2576c2d34BE290772a6', // FTM-BNB BananaPair
    },
    tokenSymbol: 'FTM',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xad29abb318791d579433d831ed122afeaf29dcfe', // FTM Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 32,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x6f0f18f5fcc1466ec41c8106689e10befe68d1c0', // XRP-BNB BananaPair
    },
    tokenSymbol: 'XRP',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe', // XRP Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 45,
    lpSymbol: 'MATIC-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x29A4A3D77c010CE100A45831BF7e798f0f0B325D', // MATIC-BNB BananaPair
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd', // MATIC Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 46,
    lpSymbol: 'AAVE-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xf13e007e181A8F57eD3a4D4CcE0A9ff9E7241CEf', // AAVE-BNB BananaPair
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xfb6115445bff7b52feb98650c87f44907e58f802', // AAVE Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 47,
    lpSymbol: 'ETC-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xDd6C7A955C72B3FFD546d8dadBf7669528d8F785', // ETC-BNB BananaPair
    },
    tokenSymbol: 'ETC',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e', // ETC Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 48,
    lpSymbol: 'COMP-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xb4c0c621B2eDfE6C22585ebAC56b0e634907B8A7', // COMP-BNB BananaPair
    },
    tokenSymbol: 'COMP',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8', // COMP Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 38,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xfd1ef328a17a8e8eeaf7e4ea1ed8a108e1f2d096', // DOGE-BNB BananaPair
    },
    tokenSymbol: 'DOGE',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xba2ae424d960c26247dd6c32edc70b295c744c43', // DOGE Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 39,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x0f12362c017fe5101c7bba09390f1cb729f5b318', // LTC-BNB BananaPair
    },
    tokenSymbol: 'LTC',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94', // LTC Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 33,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x21cbb561c5d7d70e9e6cc42136cb22f07552aeef', // DOT-BNB BananaPair
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402', // DOT Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 35,
    lpSymbol: 'SXP-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xf726b3e81fa7166b9c2cfd7eb7fe8ccbcb6b1355', // SXP-BNB BananaPair
    },
    tokenSymbol: 'SXP',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a', // SXP Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 36,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x092ada3818db7fbb8e0a2124ff218c5125c1cce6', // LINK-BNB BananaPair
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd', // LINK Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x40d4543887E4170A1A40Cd8dB15A6b297c812Cb1', // ADA-BNB BananaPair
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47', // ADA Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 18,
    lpSymbol: 'ADA-ETH LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // ADA-ETH BananaPair
      56: '0x61FE209E404166a53Cc627d0ae30A65606315dA7',
    },
    tokenSymbol: 'ADA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 22,
    lpSymbol: 'IOTA-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x0D70924695B6Ae496F0A74A36bf79d47307dD519', // IOTA-BNB BananaPair
    },
    tokenSymbol: 'IOTA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xd944f1d1e9d5f9bb90b62f9d45e447d989580782',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    lpSymbol: 'BAT-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BAT-ETH BananaPair
      56: '0x6e425B4fc4Efd070Dc0deF1654a17946C7e6b3C4',
    },
    tokenSymbol: 'BAT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x101d82428437127bf1608f699cd651e6abf9766e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 21,
    lpSymbol: 'BAT-ETH LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // ADA-ETH BananaPair
      56: '0x85D87C038917eC8949f12B06262bB9d7a1290DB6',
    },
    tokenSymbol: 'BAT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x101d82428437127bf1608f699cd651e6abf9766e',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 12,
    lpSymbol: 'BANANA-SUSHI LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BANANA-SUSHI BananaPair
      56: '0xdbcdA7B58c2078fcc790dD7C2c7272EdB7EAa2b0',
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 23,
    lpSymbol: 'ROCKET-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // Placeholder
      56: '0x93fa1a6357de25031311f784342c33a26cb1c87a', // ROCKET-BNB ApePair
    },
    tokenSymbol: 'ROCKET',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Placeholder
      56: '0x3bA5aee47Bb7eAE40Eb3D06124a74Eb89Da8ffd2', // ROCKET Token
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BUSD-USDC BananaPair
      56: '0xC087C78AbaC4A0E900a327444193dBF9BA69058E',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC Token address
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 40,
    lpSymbol: 'BUSD-DAI LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BUSD-DAI BananaPair
      56: '0x8b6ecea3e9bd6290c2150a89af6c69887aaf1870',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // DAI Token address
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 34,
    lpSymbol: 'BUSD-USDT LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x2e707261d086687470b515b320478eb1c88d49bb', // BUSD-USDT BananaPair
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x55d398326f99059ff775485246999027b3197955', // USDT Token
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    lpSymbol: 'SUSHI-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BNB-SUSHI BananaPair
      56: '0x1D0C3044eBf055986c52D38b19B5369374E6Bc6A',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'SUSHI-ETH LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // ETH-SUSHI BananaPair
      56: '0x044F2b275A344D4edfc3d98e1cb7c02B30e6484e',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },

  {
    pid: 24,
    lpSymbol: 'NAUT-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // Placeholder
      56: '0x288ea5437c7aad045a393cee2f41e548df24d1c8', // NAUT-BNB ApePair
    },
    tokenSymbol: 'NAUT',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Placeholder
      56: '0x05b339b0a346bf01f851dde47a5d485c34fe220c', // NAUT Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 26,
    lpSymbol: 'BAKE-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // Placeholder
      56: '0xc1c7a1d33b34019f82808f64ba07e77512a13d1a', // BAKE-BNB ApePair
    },
    tokenSymbol: 'BAKE',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Placeholder
      56: '0xe02df9e3e622debdd69fb838bb799e3f168902c5', // BAKE Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 25,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // Placeholder
      56: '0x60593abea55e9ea9d31c1b6473191cd2475a720d', // CAKE-BNB ApePair
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Placeholder
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // CAKE Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '0xba63560dbbd1ba8fcd298a386780319138cedd1e', // BTCB-BNB BananaPair
      56: '0x1E1aFE9D9c5f290d8F6996dDB190bd111908A43D',
    },
    tokenSymbol: 'BTC',
    tokenAddresses: {
      97: '0x6ce8da28e2f864420840cf74474eff5fd80e65b8', // Binance Peg BTC
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'GFCE-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BANANA-GFCE BananaPair
      56: '0xD7903933B10504a7C67f191285a6A7E5A233fD3B',
    },
    tokenSymbol: 'GFCE',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x94BaBBE728D9411612Ee41b20241a6FA251b26Ce',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xddd3f9d5bd347c55d18752c0c2075698ec657750', // BIFI-BNB BananaPair
    },
    tokenSymbol: 'BIFI',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A', // BIFI Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 29,
    lpSymbol: 'SWAMP-BNB LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xa3f0f63268df562c71051ac5e81460e857c32c12', // SWAMP-BNB BananaPair
    },
    tokenSymbol: 'SWAMP',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d', // SWAMP Token
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7, // NOTE: Inactive Farm
    lpSymbol: 'BANANA-BAKE LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BANANA-BAKE BananaPair
      56: '0x51bb531a5253837a23ce8de478a4941a71a4202c',
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5', // BAKE Token address
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 15, // NOTE: Inactive Farm
    lpSymbol: 'BANANA-GFCE LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BANANA-GFCE BananaPair
      56: '0x9C87cae57f0962997d9bd66C24f3425d20543e3d',
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x94BaBBE728D9411612Ee41b20241a6FA251b26Ce',
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 6, // NOTE: Inactive Farm
    lpSymbol: 'BANANA-CAKE LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // BANANA-CAKE BananaPair
      56: '0x9949e1db416a8a05a0cac0ba6ea152ba8729e893',
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 10, // NOTE: Inactive Farm
    lpSymbol: 'BANANA-BIFI LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x2ce820319047c407cb952060df5f7fb3d9a9a688', // BANANA-BIFI BananaPair
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A', // BIFI Token
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 19, // NOTE: Inactive Farm
    lpSymbol: 'BANANA-NAUT LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0xf579A6196d6CC8c2C40952Ece57345AbbD589c91', // BANANA-NAUT BananaPair
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x05b339b0a346bf01f851dde47a5d485c34fe220c', // NAUT Token
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
  {
    pid: 9, // NOTE: Inactive Farm
    lpSymbol: 'BANANA-BREW LP',
    lpAddresses: {
      97: '0xed89477d619c7e73f752d5fc7be60308ceb63663',
      56: '0x5514E0E1DA40A38E19d58e8B6E16226E16e183fA', // BANANA-BREW BananaPair
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      56: '0x790Be81C3cA0e53974bE2688cDb954732C9862e1', // BREW Token
    },
    style: 'deprecated',
    quoteTokenSymbol: QuoteToken.BANANA,
    quoteTokenAdresses: contracts.banana,
  },
]

export default farms
