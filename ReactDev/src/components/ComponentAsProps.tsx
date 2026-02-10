import { ReactNode, ComponentType, ReactElement } from 'react';

// ============================================
// Pattern 1: Using ReactNode (Most Flexible)
// ============================================
interface CardProps {
  header: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

function Card({ header, content, footer }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// ============================================
// Pattern 2: Using ComponentType (Component Reference)
// ============================================
interface LayoutProps {
  HeaderComponent: ComponentType;
  ContentComponent: ComponentType<{ title: string }>;
  data: { title: string };
}

function Layout({ HeaderComponent, ContentComponent, data }: LayoutProps) {
  return (
    <div className="layout">
      <HeaderComponent />
      <ContentComponent title={data.title} />
    </div>
  );
}

// ============================================
// Pattern 3: Using ReactElement (Pre-rendered Component)
// ============================================
interface WrapperProps {
  icon: ReactElement;
  label: string;
}

function Wrapper({ icon, label }: WrapperProps) {
  return (
    <div className="wrapper">
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </div>
  );
}

// ============================================
// Pattern 4: Render Props Pattern
// ============================================
interface DataProviderProps {
  data: string[];
  render: (items: string[]) => ReactNode;
}

function DataProvider({ data, render }: DataProviderProps) {
  return <div className="data-provider">{render(data)}</div>;
}

// ============================================
// Pattern 5: Component with Props Factory
// ============================================
interface DynamicRendererProps<T> {
  Component: ComponentType<T>;
  componentProps: T;
}

function DynamicRenderer<T>({ Component, componentProps }: DynamicRendererProps<T>) {
  return (
    <div className="dynamic-renderer">
      <Component {...componentProps} />
    </div>
  );
}

// ============================================
// Pattern 6: Conditional Component Rendering
// ============================================
interface AlertProps {
  type: 'success' | 'error' | 'warning';
  IconComponent: ComponentType<{ className?: string }>;
  message: string;
}

function Alert({ type, IconComponent, message }: AlertProps) {
  const colors = {
    success: 'green',
    error: 'red',
    warning: 'yellow',
  };

  return (
    <div className={`alert alert-${type}`} style={{ color: colors[type] }}>
      <IconComponent className="alert-icon" />
      <span>{message}</span>
    </div>
  );
}

// ============================================
// Example Icon Components
// ============================================
function SuccessIcon({ className }: { className?: string }) {
  return <span className={className}>✅</span>;
}

function ErrorIcon({ className }: { className?: string }) {
  return <span className={className}>❌</span>;
}

function WarningIcon({ className }: { className?: string }) {
  return <span className={className}>⚠️</span>;
}

// ============================================
// Example Content Components
// ============================================
function SimpleHeader() {
  return <h1>Simple Header</h1>;
}

function ContentWithTitle({ title }: { title: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>This is the content section</p>
    </div>
  );
}

function ComplexCard({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ============================================
// Main Demo Component
// ============================================
export default function ComponentAsPropsDemo() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className="demo-container">
      <h1>Component as Props Patterns</h1>

      {/* Pattern 1: ReactNode */}
      <section>
        <h2>1. ReactNode Pattern</h2>
        <Card
          header={<h2>Card Title</h2>}
          content={
            <div>
              <p>This is card content</p>
              <button>Action</button>
            </div>
          }
          footer={<small>Footer text</small>}
        />
      </section>

      {/* Pattern 2: ComponentType */}
      <section>
        <h2>2. ComponentType Pattern</h2>
        <Layout
          HeaderComponent={SimpleHeader}
          ContentComponent={ContentWithTitle}
          data={{ title: 'Dynamic Title' }}
        />
      </section>

      {/* Pattern 3: ReactElement */}
      <section>
        <h2>3. ReactElement Pattern</h2>
        <Wrapper icon={<SuccessIcon />} label="Success Message" />
        <Wrapper icon={<ErrorIcon />} label="Error Message" />
      </section>

      {/* Pattern 4: Render Props */}
      <section>
        <h2>4. Render Props Pattern</h2>
        <DataProvider
          data={items}
          render={(data) => (
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        />
      </section>

      {/* Pattern 5: Dynamic Renderer */}
      <section>
        <h2>5. Dynamic Renderer Pattern</h2>
        <DynamicRenderer
          Component={ComplexCard}
          componentProps={{
            title: 'Dynamic Component',
            description: 'This component was passed as a prop',
          }}
        />
      </section>

      {/* Pattern 6: Conditional with Icons */}
      <section>
        <h2>6. Conditional Component Pattern</h2>
        <Alert type="success" IconComponent={SuccessIcon} message="Operation successful!" />
        <Alert type="error" IconComponent={ErrorIcon} message="Something went wrong!" />
        <Alert type="warning" IconComponent={WarningIcon} message="Please be careful!" />
      </section>
    </div>
  );
}
