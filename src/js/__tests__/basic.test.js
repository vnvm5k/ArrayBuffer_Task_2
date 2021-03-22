import getBuffer from '../getBuffer';
import ArrayBufferConventer from '../basic';

test('toString', () => {
  const result = new ArrayBufferConventer(); 
  result.load(getBuffer())
  expect(result.toString()).toBe();
});
