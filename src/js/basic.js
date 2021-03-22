import getBuffer from './getBuffer.js';

export default class ArrayBufferConventer {

	load(buffer) {
		this.buffer = buffer;
		return this.buffer;
	}
	
	toString() {
		let arrayBuffer = load();
		let decoded = '';
		for (let i = 0; i < arrayBuffer.length; i++) {
			decoded += arrayBuffer.fromCharCode(i);
		}
		return decoded;  
	}
}