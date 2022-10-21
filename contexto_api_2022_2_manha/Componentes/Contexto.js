import React, {createContext} from 'react';

export const AutenticaContexto = createContext({});

export default function Contexto({children}){
  const pedidos = [
    {codigo: '1001', descricao: 'Geladeira', valor: '2000'}, 
    {codigo: '1002', descricao: 'Fogao', valor: '1400'},
    {codigo: '1010', descricao: 'Maquina de lavar', valor: '1800'}
  ];
  return(
    <AutenticaContexto.Provider value={{nome: 'Carlos Santana', email: 'carlos@gmail.com', senha: '1234', meusPedidos: pedidos}} >
      {children}
    </AutenticaContexto.Provider>
  )
}