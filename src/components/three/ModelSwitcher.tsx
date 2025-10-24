import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16"
import { useRef } from "react"

const ModelSwitcher = ({scale, isMobile}) => {

    const smallMacbookRef = useRef();
    const largeMacbookRef = useRef();

    const showSmallMacbook = isMobile;
    const showLargeMacbook = scale === 0.08 || scale === 0.05;

  return (
    <>
    <PresentationControls>
        <group ref={largeMacbookRef}>
        <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
        </group>
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher