# **Welcome to React JS Tutorial 😊**

### Since you're just starting with React, I'll explain how it works in a simple way. 🚀

---

## **How React Works (Simple Explanation)**

React is a **JavaScript library** for building user interfaces. It makes it easy to create interactive web apps by updating only the parts that change, instead of refreshing the whole page.

### **1. The Virtual DOM (How React Updates UI Efficiently)**

- The **DOM (Document Object Model)** is what browsers use to display content.
- **Problem**: Directly updating the DOM is **slow**.
- **Solution**: React creates a **Virtual DOM** (a copy of the real DOM).
  - It updates the Virtual DOM first.
  - Compares the old vs. new version (diffing).
  - Only updates the changed part in the real DOM (reconciliation).

👉 This makes React **fast and efficient**!

---

### **2. Components (Building Blocks of React)**

React apps are made of **components**—small reusable pieces that control what appears on the screen.

Example of a simple component:

```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

- Components return **JSX**, which looks like HTML but is JavaScript.
- React **renders** components to display them on the screen.

To use a component:

```jsx
function App() {
  return <Greeting />;
}
```

This will show **"Hello, React!"** on the page.

---

### **3. React Hooks (How We Handle State and Effects)**

Hooks are functions that let you **add features** like state, side effects, etc., to React components.

#### 🟢 **useState (Handling State in React)**

- State is **data** that changes in a component.
- `useState` lets a component **remember values** (like a counter).

Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

- `useState(0)` means **count starts at 0**.
- `setCount(count + 1)` updates the state.
- React **re-renders** the component when state changes.

---

#### 🟢 **useEffect (Calling APIs and Running Side Effects)**

- `useEffect` runs **after** a component renders.
- Useful for **fetching data**, timers, or changing the page title.

Example:

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty `[]` means it runs only once (on mount)

  return <p>Time: {time} seconds</p>;
}
```

- **Runs once** when the component loads (`[]` dependency array).
- **Cleans up** when the component unmounts (removes interval).

---

### **4. How to Call an API in React**

React calls APIs inside `useEffect` and saves the data using `useState`.

Example: Fetching currency exchange rates

```jsx
import { useState, useEffect } from "react";

function CurrencyRates() {
  const [rates, setRates] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Runs once on mount

  return (
    <div>
      <h2>Exchange Rates</h2>
      <pre>{JSON.stringify(rates, null, 2)}</pre>
    </div>
  );
}
```

- `fetchData()` calls the API.
- `setRates(data.rates)` stores API data in state.
- The page updates **when the data arrives**.

---

### **5. How React Works Internally**

1. **Renders Components**
   - Calls function components and creates a Virtual DOM.
2. **Compares Virtual DOM**
   - Finds changes using **diffing**.
3. **Updates the Real DOM**
   - Updates only what changed (reconciliation).

This makes React **fast and optimized**.

---

### **Key Takeaways**

| Concept                   | Explanation                                                   |
| ------------------------- | ------------------------------------------------------------- |
| **Components**            | Small reusable parts of the UI (functions that return JSX).   |
| **State (`useState`)**    | Stores data that changes (like a counter).                    |
| **Effects (`useEffect`)** | Runs code when a component loads or updates (like API calls). |
| **Virtual DOM**           | React updates only the parts that changed, making it fast.    |
| **Reconciliation**        | React compares old vs. new and updates only changed elements. |

---

### **Where to Go Next?**

✅ Try making a simple **To-Do List** with `useState`.  
✅ Fetch data from an API (like `https://jsonplaceholder.typicode.com/todos`).  
✅ Learn about **React Router** (for navigation).

### **Understanding Hooks in React**

Hooks in React allow you to use state and lifecycle features inside functional components. They were introduced in **React 16.8** to replace class components with more concise and readable functional components.

---

## **1. Commonly Used Hooks**

### 🔹 **`useState` - Managing Local Component State**

- **Purpose:** Allows components to have local state.
- **Where to Use?** Inside functional components when you need to store and update values dynamically.

**Example: Counter Component**

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

- ✅ `useState(0)` initializes `count` with `0`.
- ✅ `setCount(count + 1)` updates the state and triggers re-render.

---

### 🔹 **`useEffect` - Side Effects (API Calls, Event Listeners, Timers)**

- **Purpose:** Runs code after render, replacing lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- **Where to Use?** When you need to **fetch data**, **set up subscriptions**, or **modify the DOM**.

**Example: Fetching Data from an API**

```jsx
import React, { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data)); // Update state after fetching
  }, []); // Empty array = Run once after initial render

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```

- ✅ `useEffect` runs **after** the initial render.
- ✅ The **empty dependency array (`[]`)** ensures it runs **only once**.

📌 **When does `useEffect` run?**
| Dependency Array | When it Runs |
|------------------|-------------|
| `useEffect(fn, [])` | Runs **only once** after initial render |
| `useEffect(fn, [someValue])` | Runs when `someValue` changes |
| `useEffect(fn)` | Runs **after every render** (not recommended) |

---

### 🔹 **`useRef` - Accessing DOM Elements & Persisting Values**

- **Purpose:** Keeps a reference to an element without causing re-renders.
- **Where to Use?** When you need to focus an input or store a previous value.

**Example: Auto-focus on Input**

```jsx
import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus input on mount
  }, []);

  return <input ref={inputRef} placeholder="Type here..." />;
}

export default FocusInput;
```

- ✅ `useRef` holds a reference to the **input element**.
- ✅ It does **not** trigger re-renders.

---

### 🔹 **`useContext` - Global State Management**

- **Purpose:** Avoids **prop drilling** by providing global state.
- **Where to Use?** When you need to **share state** across multiple components without passing props manually.

**Example: Using `useContext`**

```jsx
import React, { createContext, useContext } from "react";

// 1️⃣ Create Context
const ThemeContext = createContext("light");

function ThemeDisplay() {
  const theme = useContext(ThemeContext); // 2️⃣ Consume Context
  return <p>Current Theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      {" "}
      {/* 3️⃣ Provide Context */}
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}

export default App;
```

- ✅ No need to pass props manually (`theme` is accessible anywhere).
- ✅ Useful for theming, authentication, and global states.

---

## **2. Advanced Hooks**

### 🔹 **`useReducer` - Alternative to `useState` for Complex Logic**

- **Purpose:** Manages complex state logic using a reducer function.
- **Where to Use?** When the state has **multiple sub-values** or **complex updates**.

**Example: Counter with `useReducer`**

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;
```

- ✅ Useful when managing **state transitions**.

---

### 🔹 **`useMemo` - Optimize Performance by Memoizing Values**

- **Purpose:** Avoids unnecessary calculations by caching values.
- **Where to Use?** When you have **expensive calculations** inside the component.

**Example: Expensive Computation**

```jsx
import React, { useState, useMemo } from "react";

function ExpensiveComponent({ num }) {
  const expensiveValue = useMemo(() => {
    console.log("Computing...");
    return num * 2; // Simulate expensive operation
  }, [num]); // Only recompute if 'num' changes

  return <p>Computed Value: {expensiveValue}</p>;
}

export default ExpensiveComponent;
```

- ✅ Prevents unnecessary recalculations.

---

### 🔹 **`useCallback` - Optimize Performance by Memoizing Functions**

- **Purpose:** Prevents unnecessary re-renders by memoizing functions.
- **Where to Use?** When passing **functions** as props to child components.

**Example: Preventing Function Re-Creation**

```jsx
import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Parent;
```

- ✅ Prevents `Child` from re-rendering when `Parent` updates.

---

## **3. When to Use Hooks?**

| **Scenario**                                  | **Hook to Use**          |
| --------------------------------------------- | ------------------------ |
| Managing local state                          | `useState`               |
| Running side effects (API calls, DOM updates) | `useEffect`              |
| Accessing DOM elements                        | `useRef`                 |
| Global state management                       | `useContext`             |
| Complex state logic (e.g., toggles, counters) | `useReducer`             |
| Performance optimizations                     | `useMemo`, `useCallback` |

---

### **Final Takeaway 🚀**

- **Hooks make React functional components powerful & reusable.**
- **Use `useState` for simple states and `useReducer` for complex ones.**
- **Use `useEffect` for side effects like API calls.**
- **Optimize performance using `useMemo` and `useCallback`.**
- **Use `useContext` for global state instead of prop drilling.**

Want more details on a specific hook? Let me know! 😊
