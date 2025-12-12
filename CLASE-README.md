# 📚 Material de Clase - React 19

## 🎯 Descripción
Material interactivo para clase de React con ejemplos prácticos y ejercicios.

## 🚀 Cómo usar este material

### 1. Iniciar el proyecto
```bash
npm run dev
```

### 2. Abrir en el navegador
Abre `http://localhost:5173` en tu navegador

## 📖 Contenido de la Clase

### Tema 1: Fundamentos de React
- ✅ Componentes funcionales
- ✅ Props (propiedades)
- ✅ JSX (JavaScript XML)
- ✅ Expresiones en JSX
- ✅ Estilos en React

**Archivo:** `src/components/1-Fundamentos.jsx`

### Tema 2: Hooks
- ✅ useState - Manejo de estado
- ✅ useEffect - Efectos secundarios
- ✅ useRef - Referencias DOM
- ✅ Ejemplos con temporizadores
- ✅ Llamadas a APIs

**Archivo:** `src/components/2-Hooks.jsx`

### Tema 3: Eventos y Formularios
- ✅ Manejo de eventos (onClick, onChange, etc.)
- ✅ Eventos con parámetros
- ✅ Formularios controlados
- ✅ Validación de formularios
- ✅ Diferentes tipos de inputs

**Archivo:** `src/components/3-EventosFormularios.jsx`

### Tema 4: Listas y Renderizado Condicional
- ✅ Renderizado de listas con .map()
- ✅ Keys en listas
- ✅ Filtrado de listas con .filter()
- ✅ Renderizado condicional (ternario, &&)
- ✅ CRUD básico (TodoList)

**Archivo:** `src/components/4-ListasRenderizado.jsx`

## 💡 Conceptos Clave

### Componentes
```jsx
function MiComponente() {
  return <h1>Hola Mundo</h1>;
}
```

### Props
```jsx
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}

// Uso:
<Saludo nombre="María" />
```

### Estado (useState)
```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Contador: {count}
</button>
```

### Efectos (useEffect)
```jsx
useEffect(() => {
  // Código que se ejecuta después del render
  console.log('Componente montado');
  
  return () => {
    // Limpieza
    console.log('Componente desmontado');
  };
}, []); // Dependencias
```

### Listas
```jsx
const items = ['A', 'B', 'C'];

{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

### Renderizado Condicional
```jsx
{isLoggedIn ? <Dashboard /> : <Login />}

{showMessage && <p>Mensaje visible</p>}
```

## 🎓 Ejercicios Propuestos

### Ejercicio 1: Componente de Tarjeta Personal
Crea un componente que reciba props de una persona (nombre, edad, profesión) y muestre una tarjeta estilizada.

### Ejercicio 2: Calculadora Simple
Crea una calculadora con useState que pueda sumar, restar, multiplicar y dividir.

### Ejercicio 3: Lista de Compras
Crea una lista de compras donde puedas:
- Agregar items
- Marcar como comprados
- Eliminar items
- Filtrar (todos/comprados/pendientes)

### Ejercicio 4: Formulario de Registro
Crea un formulario de registro con:
- Validación en tiempo real
- Mensajes de error
- Confirmación al enviar

## 📚 Recursos Adicionales

- [Documentación oficial de React](https://react.dev)
- [React Hooks](https://react.dev/reference/react)
- [Vite](https://vitejs.dev)

## 🛠️ Tecnologías Utilizadas

- React 19.2
- Vite 7.2.4
- JavaScript ES6+
- CSS3

## 📝 Notas para el Profesor

Cada archivo de componente (`1-Fundamentos.jsx`, etc.) contiene:
- Múltiples ejemplos progresivos
- Comentarios explicativos
- Código listo para ejecutar
- Estilos inline para facilidad de uso

Los estudiantes pueden:
1. Navegar por los temas usando el menú
2. Interactuar con todos los ejemplos
3. Ver el código fuente en los archivos
4. Modificar y experimentar

## 🎯 Objetivos de Aprendizaje

Al final de esta clase, los estudiantes podrán:
- ✅ Crear componentes funcionales en React
- ✅ Usar props para pasar datos
- ✅ Manejar estado con useState
- ✅ Implementar efectos con useEffect
- ✅ Crear formularios controlados
- ✅ Renderizar listas dinámicamente
- ✅ Aplicar renderizado condicional
- ✅ Manejar eventos del usuario

---

**Fecha:** 9 de Diciembre 2025  
**Versión:** 1.0  
**React:** 19.2
