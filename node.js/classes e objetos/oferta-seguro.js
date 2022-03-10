const cliente = {
  nome: 'Carlos',
  idade: 20,
  cpf: '12543652266',
  email: 'carlos@email.com',
  fones: ['5591235498', '5521988743124'],
  dependentes: [
    {
      nome: 'Maria Assis',
      parentesco: 'filha',
      dataNasc: '10/03/2012' },
    {
      nome: 'Laura Assis',
      parentesco: 'filha',
      dataNasc: '04/01/2015'
    }
  ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}

function oferecerSeguro(obj){
  const propsClientes = Object.keys(obj);
  if(propsClientes.includes("dependentes"))
  {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)