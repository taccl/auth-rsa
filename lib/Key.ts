import NodeRSA from 'node-rsa';

export class Key extends NodeRSA {
	getPublicKey (): string {
		return this.exportKey('public');
	}

	getPrivateKey (): string {
		return this.exportKey('private');
	}

	publicEquals ({
		publicKey
	}:{
		publicKey: string
	}): boolean {
		const p: string = new Key(publicKey).getPublicKey();
		const _p: string = this.getPublicKey();
		return p == _p;
	}
}
export class PrivateKey extends Key {
	constructor (_?:any) {
		super(new NodeRSA(_).exportKey('private'));
	}
}
