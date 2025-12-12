// ============================================
// TEMA 1: FUNDAMENTOS DE REACT
// ============================================

import { useState } from 'react';

// 1.1 - Componente Funcional Básico
// Un componente es una función que retorna JSX
function Saludo() {
  return <h2>¡Hola desde React!</h2>;
}

function Saludo_Santiago() {
    return <h2>Hola Santiago</h2>;
}

// 1.2 - Componente con Props
// Props son argumentos que recibe un componente
function SaludoPersonalizado({ nombre, edad }) {
  return (
    <div className="card">
      <h3>Hola, {nombre}!</h3>
      <p>Tienes {edad} años</p>
    </div>
  );
}

// 1.3 - Props con valores por defecto
function Tarjeta({ titulo = "Sin título", contenido = "Sin contenido" }) {
  return (
    <div style={{ border: '2px solid #646cff', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h4 style={{ color: '#646cff' }}>{titulo}</h4>
      <p>{contenido}</p>
    </div>
  );
}

// 1.4 - JSX: Expresiones JavaScript en el template
function ExpresionesJSX() {
  const numero1 = 10;
  const numero2 = 20;
  const nombre = "React-JS";
  const miNombre = "Jean";
  const esVerdadero = false;

  return (
    <div className="card">
      <h3>Expresiones en JSX</h3>
      <p>Suma: {numero1} + {numero2} = {numero1 + numero2}</p>
      <p>Template string: {`Aprendiendo ${nombre} ${miNombre}`}</p>
      <p>Condicional: {esVerdadero ? "Es verdadero ✓" : "Es falso ✗"}</p>
      <p>Función: {nombre.toUpperCase()}</p>
    </div>
  );
}

// 1.5 - Componente con estilos inline
function ComponenteConEstilos() {
  const estiloPersonalizado = {
    backgroundColor: '#242424',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  };

  return (
    <div style={{ ...estiloPersonalizado, border: '2px solid #646cff' }}>
      <h3>Componente con estilos inline</h3>
      <p>Los estilos se escriben en camelCase</p>
    </div>
  );
}

// COMPONENTE PRINCIPAL QUE AGRUPA TODOS LOS EJEMPLOS
export default function Fundamentos() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Tema 1: Fundamentos de React</h1>
      
      <section>
        <h2>1.1 Componente Básico</h2>
        <Saludo />
        <Saludo_Santiago /> 
      </section>

      

      <section>
        <h2>1.2 Props - Pasar datos a componentes</h2>
        <SaludoPersonalizado nombre="María" edad={25} />
        <SaludoPersonalizado nombre="Juan" edad={30} />
        <SaludoPersonalizado nombre="Ana" edad={28} />
        <SaludoPersonalizado nombre="Santiago" edad={28} />
      </section>

      <section>
        <h2>1.3 Props con valores por defecto</h2>
        <Tarjeta 
          titulo="React 19" 
          contenido="La última versión de React con muchas mejoras" 
        />
        <Tarjeta titulo="Vite" />
        <Tarjeta />
      </section>

      <section>
        <h2>1.4 Expresiones JavaScript en JSX</h2>
        <ExpresionesJSX />
      </section>

      <section>
        <h2>1.5 Estilos en React</h2>
        <ComponenteConEstilos />
      </section>

      <div className="card" style={{ marginTop: '30px', backgroundColor: '#1a1a1a' }}>
        <h3>💡 Puntos Clave:</h3>
        <ul style={{ textAlign: 'left', color: 'white' }}>
          <li>Los componentes son funciones que retornan JSX</li>
          <li>Props permiten pasar datos de padres a hijos</li>
          <li>JSX permite mezclar HTML con JavaScript usando {'{}'}</li>
          <li>Los atributos HTML se escriben en camelCase (className, onClick)</li>
          <li>Un componente debe retornar un solo elemento padre</li>
        </ul>
      </div>
    </div>
  );
}
