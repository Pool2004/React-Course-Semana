// ============================================
// TEMA 2: HOOKS EN REACT
// ============================================

import { useState, useEffect, useRef } from 'react';

// 2.1 - useState: Manejo de estado
function Contador() {
  // useState retorna [valor, función para actualizar]
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState('');

  return (
    <div className="card">
      <h3>Hook useState - Contador</h3>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar ⬆</button>
      <button onClick={() => setCount(count - 1)}>Decrementar ⬇</button>
      <button onClick={() => setCount(0)}>Resetear 🔄</button>
      
      <hr style={{ margin: '20px 0' }} />
      
      <input 
        type="text" 
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <p>Hola, {nombre || 'anónimo'}!</p>
    </div>
  );
}

// 2.2 - useState con objetos
function FormularioEstado() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    edad: 0
  });

  const actualizarCampo = (campo, valor) => {
    setUsuario({
      ...usuario,  // Spread operator: copia el objeto anterior
      [campo]: valor  // Actualiza solo el campo específico
    });
  };

  return (
    <div className="card">
      <h3>Hook useState - Objeto</h3>
      <input
        type="text"
        placeholder="Nombre"
        value={usuario.nombre}
        onChange={(e) => actualizarCampo('nombre', e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '200px' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={usuario.email}
        onChange={(e) => actualizarCampo('email', e.target.value)}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '200px' }}
      />
      <input
        type="number"
        placeholder="Edad"
        value={usuario.edad}
        onChange={(e) => actualizarCampo('edad', parseInt(e.target.value) || 0)}
        style={{ display: 'block', margin: '10px 0', padding: '8px', width: '200px' }}
      />
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#1a1a1a', borderRadius: '5px' }}>
        <h4>Datos del usuario:</h4>
        <pre>{JSON.stringify(usuario, null, 2)}</pre>
      </div>
    </div>
  );
}

// 2.3 - useEffect: Efectos secundarios
function EfectosSecundarios() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  // useEffect se ejecuta después de renderizar
  useEffect(() => {
    console.log('Componente montado o actualizado');
    
    // Si corriendo es true, inicia el intervalo
    if (corriendo) {
      const intervalo = setInterval(() => {
        setSegundos(seg => seg + 1);
      }, 1000);

      // Función de limpieza: se ejecuta al desmontar o antes de re-ejecutar
      return () => {
        console.log('Limpiando intervalo');
        clearInterval(intervalo);
      };
    }
  }, [corriendo]); // Array de dependencias: se ejecuta cuando cambia 'corriendo'

  return (
    <div className="card">
      <h3>Hook useEffect - Temporizador</h3>
      <p style={{ fontSize: '2em' }}>⏱️ {segundos} segundos</p>
      <button onClick={() => setCorriendo(!corriendo)}>
        {corriendo ? 'Pausar ⏸' : 'Iniciar ▶'}
      </button>
      <button onClick={() => setSegundos(0)}>Resetear 🔄</button>
      <p style={{ fontSize: '0.9em', marginTop: '15px' }}>
        Abre la consola para ver los logs de useEffect
      </p>
    </div>
  );
}

// 2.4 - useEffect con llamada a API
function ObtenerDatos() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(false);

  const obtenerUsuarioAleatorio = () => {
    setCargando(true);
    // API de ejemplo: Random User
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        setUsuario(data.results[0]);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setCargando(false);
      });
  };

  return (
    <div className="card">
      <h3>Hook useEffect - Fetch API</h3>
      <button onClick={obtenerUsuarioAleatorio}>
        Obtener Usuario Aleatorio 🎲
      </button>
      
      {cargando && <p>Cargando...</p>}
      
      {usuario && !cargando && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <img src={usuario.picture.large} alt="avatar" style={{ borderRadius: '50%' }} />
          <h4>{usuario.name.first} {usuario.name.last}</h4>
          <p>📧 {usuario.email}</p>
          <p>📍 {usuario.location.city}, {usuario.location.country}</p>
        </div>
      )}
    </div>
  );
}

// 2.5 - useRef: Referencias a elementos del DOM
function ReferenciasDom() {
  const inputRef = useRef(null);
  const [texto, setTexto] = useState('');

  const enfocarInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = '#646cff22';
  };

  const limpiarInput = () => {
    inputRef.current.value = '';
    setTexto('');
    inputRef.current.focus();
  };

  return (
    <div className="card">
      <h3>Hook useRef - Referencias DOM</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe algo..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        style={{ padding: '8px', margin: '10px' }}
      />
      <br />
      <button onClick={enfocarInput}>Enfocar Input 🎯</button>
      <button onClick={limpiarInput}>Limpiar 🗑️</button>
      <p>Texto: {texto}</p>
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function Hooks() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🪝 Tema 2: Hooks en React</h1>

      <section>
        <h2>2.1 useState - Estado básico</h2>
        <Contador />
      </section>

      <section>
        <h2>2.2 useState - Estado con objetos</h2>
        <FormularioEstado />
      </section>

      <section>
        <h2>2.3 useEffect - Temporizador</h2>
        <EfectosSecundarios />
      </section>

      <section>
        <h2>2.4 useEffect - Fetch API</h2>
        <ObtenerDatos />
      </section>

      <section>
        <h2>2.5 useRef - Referencias DOM</h2>
        <ReferenciasDom />
      </section>

      <div className="card" style={{ marginTop: '30px', backgroundColor: '#1a1a1a' }}>
        <h3>💡 Puntos Clave:</h3>
        <ul style={{ textAlign: 'left' }}>
          <li><strong>useState:</strong> Maneja el estado del componente</li>
          <li><strong>useEffect:</strong> Ejecuta efectos secundarios (APIs, timers, suscripciones)</li>
          <li><strong>useRef:</strong> Crea referencias a elementos DOM o valores persistentes</li>
          <li>Los hooks solo se usan en componentes funcionales</li>
          <li>Los hooks deben llamarse en el nivel superior (no en condicionales o loops)</li>
        </ul>
      </div>
    </div>
  );
}
