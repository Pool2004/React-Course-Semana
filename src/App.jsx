import { useState } from 'react'
import './App.css'

// Importar componentes de las lecciones
import Fundamentos from './components/1-Fundamentos'
import Hooks from './components/2-Hooks'
import EventosFormularios from './components/3-EventosFormularios'
import ListasRenderizado from './components/4-ListasRenderizado'

function App() {
  const [leccionActiva, setLeccionActiva] = useState('inicio');

  // Menú de navegación
  const Menu = () => (
    <nav style={{
      padding: '20px',
      backgroundColor: '#1a1a1a',
      borderRadius: '8px',
      marginBottom: '20px'
    }}>
      <h2 style={{ marginBottom: '15px' }}>📚 Clase de React - 18 de Diciembre 2025</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => setLeccionActiva('inicio')}
          style={{
            padding: '10px 20px',
            backgroundColor: leccionActiva === 'inicio' ? '#646cff' : '#242424',
            border: '1px solid #646cff',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          🏠 Inicio
        </button>
        <button
          onClick={() => setLeccionActiva('fundamentos')}
          style={{
            padding: '10px 20px',
            backgroundColor: leccionActiva === 'fundamentos' ? '#646cff' : '#242424',
            border: '1px solid #646cff',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          1️⃣ Fundamentos
        </button>
        <button
          onClick={() => setLeccionActiva('hooks')}
          style={{
            padding: '10px 20px',
            backgroundColor: leccionActiva === 'hooks' ? '#646cff' : '#242424',
            border: '1px solid #646cff',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          2️⃣ Hooks
        </button>
        <button
          onClick={() => setLeccionActiva('eventos')}
          style={{
            padding: '10px 20px',
            backgroundColor: leccionActiva === 'eventos' ? '#646cff' : '#242424',
            border: '1px solid #646cff',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          3️⃣ Eventos y Formularios
        </button>
        <button
          onClick={() => setLeccionActiva('listas')}
          style={{
            padding: '10px 20px',
            backgroundColor: leccionActiva === 'listas' ? '#646cff' : '#242424',
            border: '1px solid #646cff',
            borderRadius: '5px',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          4️⃣ Listas y Renderizado
        </button>
      </div>
    </nav>
  );

  // Página de inicio
  const PaginaInicio = () => (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>⚛️ Bienvenidos a la Clase de React</h1>
      <p style={{ fontSize: '1.3em', marginBottom: '30px' }}>
        Material interactivo con ejemplos prácticos
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '40px'
      }}>
        <div className="card" onClick={() => setLeccionActiva('fundamentos')} style={{ cursor: 'pointer' }}>
          <h2>📚 Tema 1</h2>
          <h3>Fundamentos</h3>
          <p>Componentes, Props, JSX</p>
        </div>
        
        <div className="card" onClick={() => setLeccionActiva('hooks')} style={{ cursor: 'pointer' }}>
          <h2>🪝 Tema 2</h2>
          <h3>Hooks</h3>
          <p>useState, useEffect, useRef</p>
        </div>
        
        <div className="card" onClick={() => setLeccionActiva('eventos')} style={{ cursor: 'pointer' }}>
          <h2>🎯 Tema 3</h2>
          <h3>Eventos y Formularios</h3>
          <p>Manejo de eventos, validación</p>
        </div>
        
        <div className="card" onClick={() => setLeccionActiva('listas')} style={{ cursor: 'pointer' }}>
          <h2>📋 Tema 4</h2>
          <h3>Listas y Renderizado</h3>
          <p>map, filter, condicionales</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: '40px', backgroundColor: '#1a1a1a' }}>
        <h3>📌 Información del Curso</h3>
        <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
          <li>✓ React 19.2 (última versión)</li>
          <li>✓ Vite como build tool</li>
          <li>✓ Ejemplos interactivos y prácticos</li>
          <li>✓ Código comentado y explicado</li>
          <li>✓ Ejercicios incluidos en cada tema</li>
        </ul>
      </div>

      <p style={{ marginTop: '40px', fontSize: '1.2em', color: '#888' }}>
        👆 Haz click en cualquier tarjeta para comenzar
      </p>
    </div>
  );

  // Renderizar contenido según la lección activa
  const renderizarContenido = () => {
    switch(leccionActiva) {
      case 'fundamentos':
        return <Fundamentos />;
      case 'hooks':
        return <Hooks />;
      case 'eventos':
        return <EventosFormularios />;
      case 'listas':
        return <ListasRenderizado />;
      default:
        return <PaginaInicio />;
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Menu />
      {renderizarContenido()}
    </div>
  )
}

export default App
