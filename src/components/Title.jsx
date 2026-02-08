import { Helmet } from 'react-helmet'

export default function Title({ children }) {
  return (
    <Helmet>
        <title>Hyper Movies | {children || 'Loading...'}</title>
    </Helmet>
  )
}
