import NodeRSA from 'node-rsa';
export declare class Key extends NodeRSA {
    getPublicKey(): string;
    getPrivateKey(): string;
    publicEquals({ publicKey }: {
        publicKey: string;
    }): boolean;
}
export declare class PrivateKey extends Key {
    constructor(_?: any);
}
//# sourceMappingURL=Key.d.ts.map