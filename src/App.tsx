import { useState } from 'react'
import './App.css'

// Import GCDS components
import '@cdssnc/gcds-components/dist/gcds/gcds.css'
import { 
  GcdsButton, 
  GcdsHeading, 
  GcdsContainer, 
  GcdsHeader,
  GcdsFooter, 
  GcdsText,
  GcdsLink
} from '@cdssnc/gcds-components-react'

/**
 * Main App component that demonstrates the use of GCDS components
 * This serves as a showcase for the component library
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* GCDS Header Component */}
      <GcdsHeader
        lang="en"
        // Simple header with minimal props
        title="GC Design Extended"
      />
      
      <main>
        <GcdsContainer centered size="lg">
          <div style={{ padding: '2rem 0' }}>
            <GcdsHeading tag="h1">GC Design System - Extended Component Library</GcdsHeading>
            
            <GcdsText>
              This project demonstrates how to use and extend the GC Design System components.
              Below are examples of the base components and our extended versions.
            </GcdsText>
            
            <div style={{ margin: '2rem 0' }}>
              <GcdsHeading tag="h2">Base GCDS Components</GcdsHeading>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <GcdsButton onClick={() => setCount((count) => count + 1)}>
                  Count: {count}
                </GcdsButton>
                
                <GcdsButton type="button" buttonRole="secondary">
                  Secondary Button
                </GcdsButton>
                
                <GcdsButton type="button" buttonRole="danger">
                  Danger Button
                </GcdsButton>
              </div>
            </div>
            
            <GcdsHeading tag="h2" style={{ marginTop: '2rem' }}>Extended Component Library</GcdsHeading>
            <GcdsText>
              Our extended component library will provide additional components and enhanced versions 
              of existing ones. Start building your components in the 
              <code> src/components/lib </code> directory.
            </GcdsText>
            
            <GcdsLink href="https://github.com/cds-snc/gcds-components">
              GCDS Official Documentation
            </GcdsLink>
          </div>
        </GcdsContainer>
      </main>
      
      {/* GCDS Footer Component */}
      <GcdsFooter lang="en" />
    </>
  )
}

export default App
