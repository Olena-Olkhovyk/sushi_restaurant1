import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={275}
    height={340}
    viewBox="0 0 275 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="109" y="97" rx="0" ry="0" width="0" height="36" />
    <rect x="35" y="147" rx="3" ry="3" width="209" height="25" />
    <rect x="3" y="8" rx="0" ry="0" width="268" height="123" />
    <rect x="16" y="189" rx="0" ry="0" width="241" height="55" />
    <rect x="172" y="220" rx="0" ry="0" width="1" height="5" />
    <rect x="15" y="272" rx="6" ry="6" width="38" height="22" />
    <rect x="193" y="268" rx="16" ry="16" width="81" height="31" />
    <rect x="230" y="288" rx="0" ry="0" width="4" height="6" />
  </ContentLoader>
);

export default Skeleton;
