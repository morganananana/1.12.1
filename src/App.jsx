import React from 'react';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Titulo from './Titulo/titulo';
import Mensagem from './Mensagem/mensagem';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = useState(false);
  const [mensagens, setMensagens] = React.useState([
    {
      mensagem: 'Hi honey',
      visualizado: true,
      remetente: false,
    },
    {
      mensagem: 'You dont love anymore?',
      visualizado: true,
      remetente: false,
    },
    {
      mensagem: 'No',
      visualizado: false,
      remetente: true,
    },
    {
      mensagem: 'Cry',
      visualizado: false,
      remetente: true,
    },
    {
      mensagem: 'Bitch',
      visualizado: false,
      remetente: true,
    },
  ]);

  async function requisicao() {
    try {
      const resultado = await axios.get('http://localhost:8080');
      setMensagens(resultado.data);
      setErro(false);
    } catch {
      setErro(true);
    }
  }
  useEffect(() => {
    requisicao();
  }, []);
  return (
    <>
      <body>
        <div class="chat">
          <Titulo></Titulo>
            {
              loading === false && (
                <ul>
                  {
                    mensagens.map(mensagem => (
                      <Mensagem
                        mensagem={mensagem.mensagem}
                        visualizado={mensagem.visualizado}
                        remetente={mensagem.remetente}
                      />
                    ))
                  }
                </ul>
              )
            }
            {
              loading === true && (
                <div>
                  <div className='skeleton-loader'></div>
                  <div className='skeleton-loader'></div>
                  <div className='skeleton-loader'></div>
                </div>
              )
            }
            {
        erro && (
          <div>Ocorreu um erro ao fazer a requisição</div>
        )
      }
        </div>
      </body>
    </>
  )
}

export default App