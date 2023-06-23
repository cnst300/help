import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualizează starea pentru a afișa fallback UI în caz de eroare
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Poți adăuga aici orice logică suplimentară pentru gestionarea erorilor, cum ar fi înregistrarea lor într-un serviciu
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Înlocuiește fallback UI cu codul HTML sau componentele pe care le dorești
      return <h1>A intervenit o eroare.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;