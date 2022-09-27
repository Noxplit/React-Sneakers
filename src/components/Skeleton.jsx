import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader  className="skeleton border rounded-2xl mx-auto text-center m-5"
    speed={2}
    width={230}
    height={230}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="30" y="263" rx="9" ry="9" width="280" height="24" /> 
    <rect x="31" y="312" rx="8" ry="8" width="280" height="88" /> 
    <rect x="32" y="421" rx="8" ry="8" width="90" height="27" /> 
    <rect x="132" y="409" rx="9" ry="9" width="150" height="44" /> 
    <rect x="30" y="20" rx="0" ry="0" width="150" height="91" /> 
    <rect x="30" y="122" rx="0" ry="0" width="150" height="15" /> 
    <rect x="30" y="151" rx="0" ry="0" width="93" height="15" /> 
    <rect x="30" y="190" rx="0" ry="0" width="80" height="24" /> 
    <rect x="150" y="180" rx="0" ry="0" width="32" height="32" />
  </ContentLoader>
)

export default MyLoader