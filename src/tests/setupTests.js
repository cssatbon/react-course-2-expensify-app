import DotEnv from "dotenv"
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({
  adapter: new Adapter()
},

{
  "setupFiles": [
    "raf/polyfill",
    "<rootDir>/src/tests/setupTests.js"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
}
);

DotEnv.config({ path: '.env.test' })