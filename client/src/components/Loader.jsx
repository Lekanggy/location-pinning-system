
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return<TailSpin
    visible={true}
    height="40"
    width="40"
    color="#fff"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
  />
}

export default Loader