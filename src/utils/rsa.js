class RSA {
  constructor() {
    this.publicKey = process.env.REACT_APP_PUBLIC_KEY;
    this.key = undefined;
  }

  importPublicKey = async pem => {
    // base64 decode the string to get the binary data
    const binaryDerString = window.atob(pem);
    // convert from a binary string to an ArrayBuffer
    const binaryDer = this.str2ab(binaryDerString);

    return await window.crypto.subtle.importKey(
      'spki',
      binaryDer,
      {
        name: 'RSA-OAEP',
        hash: 'SHA-1'
      },
      false,
      ['encrypt']
    );
  };

  ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  }

  str2ab(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  base64ToArrayBuffer(base64) {
    return this.str2ab(window.atob(base64));
  }

  arrayBufferBase64(buffer) {
    var str = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return window.btoa(str);
  }

  async importKey() {
    if (this.key) {
      return this.key;
    }

    this.key = await this.importPublicKey(this.publicKey);
  }

  async encrypt(data) {
    await this.importKey();
    console.log('data:' + data);
    data = this.str2ab(data);
    return await window.crypto.subtle
      .encrypt(
        {
          name: 'RSA-OAEP'
        },
        this.key,
        data
      )
      .then(arrayBuffer => this.arrayBufferBase64(arrayBuffer));
  }
}

export default new RSA();
