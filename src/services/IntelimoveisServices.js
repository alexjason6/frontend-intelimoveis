class IntelimoveisServices {
  baseURL = 'http://127.0.0.1:3000';

  async getImoveis() {
    const response = await fetch(`${this.baseURL}/imoveis`);

    return response.json();
  }

  async getImoveisSearch(tipoNegocio, tipoImovel, bairro, cidade) {
    const response = await fetch(`${this.baseURL}/imoveis/${tipoNegocio}/${tipoImovel}/${bairro}/${cidade}`);

    return response.json();
  }
}

export default new IntelimoveisServices();
