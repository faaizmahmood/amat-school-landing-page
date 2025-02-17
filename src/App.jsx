import { ToastContainer } from 'react-toastify'
import './globalStyles/styles.css'
import Layout from './layout/layout'

function App() {

  return (
    <>
      <Layout />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
