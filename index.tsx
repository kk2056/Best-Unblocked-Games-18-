
import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Explicitly extending React.Component ensures that the 'props' property is correctly inherited from the base class
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4 text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">OOPS! CRASHED!</h1>
            <p className="mb-6">Something went wrong. Don't worry, your progress is safe.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold transition-all"
            >
              RELOAD GAME HUB
            </button>
          </div>
        </div>
      );
    }

    // Correctly accessing children via this.props as defined by the inherited React.Component
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
