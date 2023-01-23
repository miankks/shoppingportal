import React from 'react'
import { Helmet} from 'react-helmet'; 

const Metahead = ({metaTitle}) => {
  return (
    <Helmet>
    <meta charSet='utf-8'/>
    <title>{metaTitle}</title>
  </Helmet>
  )
}

export default Metahead