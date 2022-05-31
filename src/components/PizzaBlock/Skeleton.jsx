import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="135" cy="125" r="125" /> 
    <rect x="0" y="271" rx="10" ry="10" width="280" height="33" /> 
    <rect x="3" y="316" rx="10" ry="10" width="280" height="90" /> 
    <rect x="5" y="435" rx="5" ry="5" width="91" height="27" /> 
    <rect x="123" y="427" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton