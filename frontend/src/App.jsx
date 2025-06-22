import { Upload } from "./Component/Upload"

const App = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      paddingTop: '20px'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: '0',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          Product Upload System
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#6c757d',
          margin: '10px 0 0 0'
        }}>
          Upload and manage your products with ease
        </p>
      </div>

      <Upload/>
    </div>
  )
}



export default App