import { Component, ErrorInfo, ReactNode, useEffect, useRef, useState } from 'react';

type InnerBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type InnerBoundaryState = {
  hasError: boolean;
};

class InnerGlobalErrorBoundary extends Component<InnerBoundaryProps, InnerBoundaryState> {
  state: InnerBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[GlobalErrorBoundary] Caught error', error, errorInfo);
  }

  override render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

type GlobalErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
  resetKey?: unknown;
};

export default function GlobalErrorBoundary({ children, fallback, resetKey }: GlobalErrorBoundaryProps) {
  const [key, setKey] = useState(0);
  const previousKey = useRef(resetKey);

  useEffect(() => {
    if (!Object.is(previousKey.current, resetKey)) {
      previousKey.current = resetKey;
      setKey((value) => value + 1);
    }
  }, [resetKey]);

  return (
    <InnerGlobalErrorBoundary key={key} fallback={fallback}>
      {children}
    </InnerGlobalErrorBoundary>
  );
}
