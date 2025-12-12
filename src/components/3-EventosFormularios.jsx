// ============================================
// TEMA 3: EVENTOS Y FORMULARIOS
// ============================================

import { useState } from 'react';

// 3.1 - Manejo de eventos básicos
function EventosBasicos() {
  const [mensaje, setMensaje] = useState('');

  const manejarClick = () => {
    setMensaje('¡Botón clickeado! 👆');
  };

  const manejarDobleClick = () => {
    setMensaje('¡Doble click detectado! 👆👆');
  };

  const manejarMouseEnter = () => {
    setMensaje('Mouse encima del botón 🖱️');
  };

  const manejarMouseLeave = () => {
    setMensaje('Mouse fuera del botón 🖱️');
  };

  return (
    <div className="card">
      <h3>Eventos Básicos</h3>
      <button onClick={manejarClick}>Click Simple</button>
      <button onDoubleClick={manejarDobleClick}>Doble Click</button>
      <button 
        onMouseEnter={manejarMouseEnter}
        onMouseLeave={manejarMouseLeave}
      >
        Mouse Over
      </button>
      <p style={{ marginTop: '15px', color: '#646cff' }}>{mensaje}</p>
    </div>
  );
}

// 3.2 - Evento con parámetros
function EventosConParametros() {
  const [ultimoClick, setUltimoClick] = useState('');

  const saludar = (nombre) => {
    setUltimoClick(`¡Hola ${nombre}! 👋`);
  };

  // Cuando necesitas pasar parámetros, usa una arrow function
  return (
    <div className="card">
      <h3>Eventos con Parámetros</h3>
      <button onClick={() =>saludar('María')}>Saludar a María</button>
      <button onClick={() => saludar('Juan')}>Saludar a Juan</button>
      <button onClick={() => saludar('Ana')}>Saludar a Ana</button>
      <p style={{ marginTop: '15px', color: '#646cff' }}>{ultimoClick}</p>
    </div>
  );
}

// 3.3 - Formulario controlado simple
function FormularioControlado() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault(); // Previene el refresh de la página
    console.log('Formulario enviado:', { nombre, email, mensaje });
    setEnviado(true);
    
    // Limpiar formulario después de 2 segundos
    setTimeout(() => {
      setNombre('');
      setEmail('');
      setMensaje('');
      setEnviado(false);
    }, 2000);
  };

  return (
    <div className="card">
      <h3>Formulario Controlado</h3>
      {enviado ? (
        <div style={{ padding: '20px', backgroundColor: '#28a745', borderRadius: '5px' }}>
          <p>✓ Formulario enviado exitosamente!</p>
        </div>
      ) : (
        <form onSubmit={manejarEnvio} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '15px' }}>
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Mensaje:</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              rows="4"
              required
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>

          <button type="submit" style={{ padding: '10px 20px' }}>
            Enviar Formulario 📤
          </button>
        </form>
      )}
    </div>
  );
}

// 3.4 - Formulario con validación
function FormularioConValidacion() {
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
    confirmarPassword: ''
  });
  
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validar usuario
    if (formData.usuario.length < 3) {
      nuevosErrores.usuario = 'El usuario debe tener al menos 3 caracteres';
    }

    // Validar contraseña
    if (formData.password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmarPassword) {
      nuevosErrores.confirmarPassword = 'Las contraseñas no coinciden';
    }

    return nuevosErrores;
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error del campo al escribir
    if (errores[name]) {
      setErrores({
        ...errores,
        [name]: undefined
      });
    }
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    const nuevosErrores = validarFormulario();
    
    if (Object.keys(nuevosErrores).length === 0) {
      alert('✓ Registro exitoso!');
      setFormData({ usuario: '', password: '', confirmarPassword: '' });
    } else {
      setErrores(nuevosErrores);
    }
  };

  return (
    <div className="card">
      <h3>Formulario con Validación</h3>
      <form onSubmit={manejarEnvio} style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={manejarCambio}
            style={{ 
              display: 'block', 
              width: '100%', 
              padding: '8px', 
              marginTop: '5px',
              borderColor: errores.usuario ? '#dc3545' : '#ccc'
            }}
          />
          {errores.usuario && (
            <span style={{ color: '#dc3545', fontSize: '0.85em' }}>
              {errores.usuario}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={manejarCambio}
            style={{ 
              display: 'block', 
              width: '100%', 
              padding: '8px', 
              marginTop: '5px',
              borderColor: errores.password ? '#dc3545' : '#ccc'
            }}
          />
          {errores.password && (
            <span style={{ color: '#dc3545', fontSize: '0.85em' }}>
              {errores.password}
            </span>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            name="confirmarPassword"
            value={formData.confirmarPassword}
            onChange={manejarCambio}
            style={{ 
              display: 'block', 
              width: '100%', 
              padding: '8px', 
              marginTop: '5px',
              borderColor: errores.confirmarPassword ? '#dc3545' : '#ccc'
            }}
          />
          {errores.confirmarPassword && (
            <span style={{ color: '#dc3545', fontSize: '0.85em' }}>
              {errores.confirmarPassword}
            </span>
          )}
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Registrarse 📝
        </button>
      </form>
    </div>
  );
}

// 3.5 - Múltiples tipos de inputs
function FormularioCompleto() {
  const [datos, setDatos] = useState({
    nombre: '',
    edad: 18,
    pais: 'mexico',
    genero: '',
    habilidades: [],
    newsletter: false,
    comentarios: ''
  });

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'habilidades') {
      // Manejo de checkboxes múltiples
      if (checked) {
        setDatos({
          ...datos,
          habilidades: [...datos.habilidades, value]
        });
      } else {
        setDatos({
          ...datos,
          habilidades: datos.habilidades.filter(h => h !== value)
        });
      }
    } else if (type === 'checkbox') {
      setDatos({ ...datos, [name]: checked });
    } else {
      setDatos({ ...datos, [name]: value });
    }
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', datos);
    alert('Revisa la consola para ver los datos');
  };

  return (
    <div className="card">
      <h3>Formulario Completo</h3>
      <form onSubmit={manejarEnvio} style={{ textAlign: 'left' }}>
        {/* Input de texto */}
        <div style={{ marginBottom: '10px' }}>
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={datos.nombre}
            onChange={manejarCambio}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>

        {/* Input numérico (range) */}
        <div style={{ marginBottom: '10px' }}>
          <label>Edad: {datos.edad}</label>
          <input
            type="range"
            name="edad"
            min="18"
            max="100"
            value={datos.edad}
            onChange={manejarCambio}
            style={{ marginLeft: '10px', width: '200px' }}
          />
        </div>

        {/* Select */}
        <div style={{ marginBottom: '10px' }}>
          <label>País: </label>
          <select
            name="pais"
            value={datos.pais}
            onChange={manejarCambio}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="mexico">México</option>
            <option value="colombia">Colombia</option>
            <option value="argentina">Argentina</option>
            <option value="españa">España</option>
          </select>
        </div>

        {/* Radio buttons */}
        <div style={{ marginBottom: '10px' }}>
          <label>Género: </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="genero"
              value="masculino"
              checked={datos.genero === 'masculino'}
              onChange={manejarCambio}
            /> Masculino
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="genero"
              value="femenino"
              checked={datos.genero === 'femenino'}
              onChange={manejarCambio}
            /> Femenino
          </label>
        </div>

        {/* Checkboxes múltiples */}
        <div style={{ marginBottom: '10px' }}>
          <label>Habilidades: </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="checkbox"
              name="habilidades"
              value="react"
              checked={datos.habilidades.includes('react')}
              onChange={manejarCambio}
            /> React
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="checkbox"
              name="habilidades"
              value="javascript"
              checked={datos.habilidades.includes('javascript')}
              onChange={manejarCambio}
            /> JavaScript
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="checkbox"
              name="habilidades"
              value="css"
              checked={datos.habilidades.includes('css')}
              onChange={manejarCambio}
            /> CSS
          </label>
        </div>

        {/* Checkbox simple */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={datos.newsletter}
              onChange={manejarCambio}
            /> Suscribirse al newsletter
          </label>
        </div>

        {/* Textarea */}
        <div style={{ marginBottom: '10px' }}>
          <label>Comentarios:</label>
          <textarea
            name="comentarios"
            value={datos.comentarios}
            onChange={manejarCambio}
            rows="3"
            style={{ display: 'block', width: '100%', padding: '5px', marginTop: '5px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
          Enviar 🚀
        </button>
      </form>

      {/* Mostrar datos en tiempo real */}
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#1a1a1a', borderRadius: '5px' }}>
        <h4>Datos en tiempo real:</h4>
        <pre style={{ fontSize: '0.85em' }}>{JSON.stringify(datos, null, 2)}</pre>
      </div>
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function EventosFormularios() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🎯 Tema 3: Eventos y Formularios</h1>

      <section>
        <h2>3.1 Eventos Básicos</h2>
        <EventosBasicos />
      </section>

      <section>
        <h2>3.2 Eventos con Parámetros</h2>
        <EventosConParametros />
      </section>

      <section>
        <h2>3.3 Formulario Controlado</h2>
        <FormularioControlado />
      </section>

      <section>
        <h2>3.4 Validación de Formularios</h2>
        <FormularioConValidacion />
      </section>

      <section>
        <h2>3.5 Tipos de Inputs</h2>
        <FormularioCompleto />
      </section>

      <div className="card" style={{ marginTop: '30px', backgroundColor: '#1a1a1a' }}>
        <h3>💡 Puntos Clave:</h3>
        <ul style={{ textAlign: 'left' }}>
          <li>Los eventos en React se escriben en camelCase (onClick, onChange)</li>
          <li>Siempre usa <code>e.preventDefault()</code> en formularios</li>
          <li>Los inputs controlados tienen su valor en el estado</li>
          <li>Para pasar parámetros a eventos, usa arrow functions</li>
          <li>Valida los datos antes de enviarlos</li>
          <li>Usa el atributo <code>name</code> para identificar inputs</li>
        </ul>
      </div>
    </div>
  );
}
