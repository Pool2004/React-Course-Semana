// ============================================
// TEMA 4: LISTAS Y RENDERIZADO CONDICIONAL
// ============================================

import { useState } from 'react';

// 4.1 - Renderizado de listas con map
function ListaBasica() {
  const frutas = ['Manzana', 'Pera', 'Naranja', 'Plátano', 'Uva'];
  
  const personas = [
    { id: 1, nombre: 'María', edad: 25 },
    { id: 2, nombre: 'Juan', edad: 30 },
    { id: 3, nombre: 'Ana', edad: 28 }
  ];

  return (
    <div className="card">
      <h3>Renderizado de Listas</h3>
      
      <h4>Lista simple:</h4>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>

      <h4>Lista de objetos:</h4>
      <ul>
        {personas.map(persona => (
          <li key={persona.id}>
            {persona.nombre} - {persona.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
}

// 4.2 - Renderizado condicional (if/else)
function RenderizadoCondicional() {
  const [estaLogueado, setEstaLogueado] = useState(false);
  const [edad, setEdad] = useState(15);

  return (
    <div className="card">
      <h3>Renderizado Condicional</h3>
      
      {/* Condicional simple con operador ternario */}
      <div style={{ marginBottom: '20px' }}>
        <p>Estado: {estaLogueado ? '✓ Logueado' : '✗ No logueado'}</p>
        <button onClick={() => setEstaLogueado(!estaLogueado)}>
          {estaLogueado ? 'Cerrar Sesión' : 'Iniciar Sesión'}
        </button>
      </div>

      {/* Renderizado con && (AND lógico) */}
      <div style={{ marginBottom: '20px' }}>
        {estaLogueado && (
          <div style={{ padding: '10px', backgroundColor: '#28a745', borderRadius: '5px' }}>
            <p>¡Bienvenido! Tienes acceso completo 🎉</p>
          </div>
        )}
      </div>

      {/* Múltiples condiciones */}
      <div>
        <label>
          Edad: 
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(parseInt(e.target.value) || 0)}
            style={{ marginLeft: '10px', padding: '5px', width: '60px' }}
          />
        </label>
        
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#1a1a1a', borderRadius: '5px' }}>
          {edad < 18 && <p>🚫 Eres menor de edad</p>}
          {edad >= 18 && edad < 65 && <p>✓ Eres adulto</p>}
          {edad >= 65 && <p>👴 Eres adulto mayor</p>}
        </div>
      </div>
    </div>
  );
}

// 4.3 - Lista con búsqueda/filtrado
function ListaConBusqueda() {
  const [busqueda, setBusqueda] = useState('');
  
  const paises = [
    'Argentina', 'Brasil', 'Chile', 'Colombia', 'Ecuador',
    'España', 'México', 'Perú', 'Uruguay', 'Venezuela'
  ];

  const paisesFiltrados = paises.filter(pais =>
    pais.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="card">
      <h3>Lista con Búsqueda</h3>
      <input
        type="text"
        placeholder="Buscar país..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '8px', width: '200px', marginBottom: '15px' }}
      />
      
      <p>Resultados: {paisesFiltrados.length}</p>
      
      <ul style={{ textAlign: 'left' }}>
        {paisesFiltrados.length > 0 ? (
          paisesFiltrados.map((pais, index) => (
            <li key={index}>{pais}</li>
          ))
        ) : (
          <li style={{ color: '#dc3545' }}>No se encontraron resultados</li>
        )}
      </ul>
    </div>
  );
}

// 4.4 - Lista interactiva (CRUD básico)
function TodoList() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Practicar hooks', completada: true },
    { id: 3, texto: 'Construir un proyecto', completada: false }
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setTareas([
        ...tareas,
        { id: Date.now(), texto: nuevaTarea, completada: false }
      ]);
      setNuevaTarea('');
    }
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const tareasActivas = tareas.filter(t => !t.completada).length;

  return (
    <div className="card">
      <h3>Lista de Tareas (Todo List)</h3>
      
      <form onSubmit={agregarTarea} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          style={{ padding: '8px', width: '200px', marginRight: '10px' }}
        />
        <button type="submit">Agregar ➕</button>
      </form>

      <p style={{ marginBottom: '10px' }}>
        Tareas activas: {tareasActivas} / {tareas.length}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
        {tareas.map(tarea => (
          <li
            key={tarea.id}
            style={{
              padding: '10px',
              marginBottom: '8px',
              backgroundColor: '#1a1a1a',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span
              onClick={() => toggleCompletada(tarea.id)}
              style={{
                textDecoration: tarea.completada ? 'line-through' : 'none',
                color: tarea.completada ? '#888' : '#fff',
                cursor: 'pointer',
                flex: 1
              }}
            >
              {tarea.completada ? '✓' : '○'} {tarea.texto}
            </span>
            <button
              onClick={() => eliminarTarea(tarea.id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#dc3545',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              ✗
            </button>
          </li>
        ))}
      </ul>

      {tareas.length === 0 && (
        <p style={{ color: '#888', fontStyle: 'italic' }}>
          No hay tareas. ¡Agrega una!
        </p>
      )}
    </div>
  );
}

// 4.5 - Tarjetas con datos complejos
function TarjetasProductos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Laptop', precio: 1200, stock: 5, activo: true },
    { id: 2, nombre: 'Mouse', precio: 25, stock: 0, activo: true },
    { id: 3, nombre: 'Teclado', precio: 75, stock: 10, activo: false },
    { id: 4, nombre: 'Monitor', precio: 300, stock: 3, activo: true }
  ]);

  const [filtro, setFiltro] = useState('todos'); // todos, disponibles, agotados

  const productosFiltrados = productos.filter(p => {
    if (filtro === 'disponibles') return p.stock > 0 && p.activo;
    if (filtro === 'agotados') return p.stock === 0;
    return p.activo;
  });

  return (
    <div className="card">
      <h3>Catálogo de Productos</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setFiltro('todos')}
          style={{
            backgroundColor: filtro === 'todos' ? '#646cff' : '#1a1a1a',
            marginRight: '10px'
          }}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro('disponibles')}
          style={{
            backgroundColor: filtro === 'disponibles' ? '#646cff' : '#1a1a1a',
            marginRight: '10px'
          }}
        >
          Disponibles
        </button>
        <button
          onClick={() => setFiltro('agotados')}
          style={{
            backgroundColor: filtro === 'agotados' ? '#646cff' : '#1a1a1a'
          }}
        >
          Agotados
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
        {productosFiltrados.map(producto => (
          <div
            key={producto.id}
            style={{
              padding: '15px',
              backgroundColor: '#1a1a1a',
              borderRadius: '8px',
              border: `2px solid ${producto.stock === 0 ? '#dc3545' : '#28a745'}`
            }}
          >
            <h4 style={{ margin: '0 0 10px 0' }}>{producto.nombre}</h4>
            <p style={{ fontSize: '1.5em', color: '#646cff', margin: '10px 0' }}>
              ${producto.precio}
            </p>
            <p style={{ margin: '5px 0' }}>
              Stock: <strong>{producto.stock}</strong>
            </p>
            <p style={{
              margin: '10px 0 0 0',
              padding: '5px',
              borderRadius: '3px',
              backgroundColor: producto.stock === 0 ? '#dc354533' : '#28a74533',
              color: producto.stock === 0 ? '#dc3545' : '#28a745'
            }}>
              {producto.stock === 0 ? '✗ Agotado' : '✓ Disponible'}
            </p>
          </div>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p style={{ color: '#888', marginTop: '20px' }}>
          No hay productos para mostrar
        </p>
      )}
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function ListasRenderizado() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📋 Tema 4: Listas y Renderizado Condicional</h1>

      <section>
        <h2>4.1 Renderizado de Listas</h2>
        <ListaBasica />
      </section>

      <section>
        <h2>4.2 Renderizado Condicional</h2>
        <RenderizadoCondicional />
      </section>

      <section>
        <h2>4.3 Filtrado de Listas</h2>
        <ListaConBusqueda />
      </section>

      <section>
        <h2>4.4 Lista Interactiva (CRUD)</h2>
        <TodoList />
      </section>

      <section>
        <h2>4.5 Tarjetas de Productos</h2>
        <TarjetasProductos />
      </section>

      <div className="card" style={{ marginTop: '30px', backgroundColor: '#1a1a1a' }}>
        <h3>💡 Puntos Clave:</h3>
        <ul style={{ textAlign: 'left' }}>
          <li>Usa <code>.map()</code> para renderizar listas de elementos</li>
          <li>Siempre incluye una <code>key</code> única en elementos de listas</li>
          <li>Usa <code>.filter()</code> para filtrar elementos antes de renderizar</li>
          <li>Operador ternario: <code>condition ? true : false</code></li>
          <li>AND lógico: <code>condition && {'<Component />'}</code></li>
          <li>Evita usar índices como keys si la lista puede cambiar</li>
        </ul>
      </div>
    </div>
  );
}
