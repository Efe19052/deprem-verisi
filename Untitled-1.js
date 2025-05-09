// deprem-verisi.js
class DepremVerisi {
  getInfo() {
    return {
      id: "deprem",
      name: "Depremler",
      blocks: [
        {
          opcode: "sonDeprem",
          blockType: Scratch.BlockType.REPORTER,
          text: "Son deprem yeri",
        },
        {
          opcode: "sonBuyukluk",
          blockType: Scratch.BlockType.REPORTER,
          text: "Son deprem büyüklüğü",
        }
      ]
    };
  }

  async getData() {
    const res = await fetch("http://localhost:3000/depremler");
    const json = await res.json();
    return json[0]; // Son deprem verisini al
  }

  async sonDeprem() {
    const d = await this.getData();
    return d.yer;
  }

  async sonBuyukluk() {
    const d = await this.getData();
    return d.buyukluk.toString();
  }
}

Scratch.extensions.register(new DepremVerisi());
