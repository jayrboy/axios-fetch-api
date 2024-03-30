//TODO: Axios
import Title from './components/Title'
import AxiosRequest from './examples-axios/1-axios-request'
import AxiosHeaders from './examples-axios/2-axios-headers'
import AxiosPost from './examples-axios/3-axios-post'
import GlobalInstance from './examples-axios/4-global-instance'
// import './axios/global'
import CustomInstance from './examples-axios/5-custom-instance'
import Interceptors from './examples-axios/6-interceptors'

//TODO: Fetch
import FetchRequest from './examples-fetch/1-fetch-request'
import FetchHeaders from './examples-fetch/2-fetch-headers'
import FetchPost from './examples-fetch/3-fetch-post'
import FetchGlobal from './examples-fetch/4-fetch-global'

function App() {
  return (
    <main>
      <Title />

      <AxiosRequest />
      {/* <AxiosHeaders /> */}
      <AxiosPost />
      {/* <GlobalInstance /> */}
      {/* <CustomInstance /> */}
      {/* <Interceptors /> */}
      <hr />
      <FetchRequest />
      {/* <FetchHeaders /> */}
      <FetchPost />
      {/* <FetchGlobal /> */}
    </main>
  )
}

export default App
